const template = data => `
    <collection-container-content id="inner-content"></collection-container-content>
    <div hidden class="show-more">
        <button id="show-more-button" class="btn btn-default">Show More</button>
    </div>
    <ul hidden class="pager">
        <li><a id="previous-button">Previous</a></li>
        <li><a id="next-button">Next</a></li>
    </ul>`;

export default {
    accessors: {
        url: {
            attribute: { },
            get: function() {
                return this.getAttribute('url');
            },
            set: function(data) {
                this.xtag.data.url = data;
            }
        },
        infiniteScrolling: {
            attribute: { boolean: true },
            get: function() {
                return this.hasAttribute('infinite-scrolling');
            },
            set: function(data) {
                this.xtag.data.infiniteScrolling = data;
            }
        },
        showMoreButton: {
            attribute: { boolean: true },
            get: function() {
                return this.hasAttribute('show-more-button');
            },
            set: function(data) {
                this.xtag.data.showMoreButton = data;
            }
        },  
        pager: {
            attribute: { boolean: true },
            get: function() {
                return this.hasAttribute('pager');
            },
            set: function(data) {
                this.xtag.data.pager = data;
            }
        },  
        elementsPerPage: {
            attribute: { },
            get: function() {
                return this.getAttribute('elements-per-page');
            },
            set: function(data) {
                this.xtag.data.elementsPerPage = data;
            }
        },              
        currentPage: {
            attribute: { },
            get: function() {
                return this.getAttribute('current-page');
            },
            set: function(data) {
                this.xtag.data.currentPage = data;
            }
        },
        refreshEvery: {
            attribute: { },
            get: function() {
                return this.getAttribute('refresh-every');
            },
            set: function(data) {
                this.xtag.data.refreshEvery = data;
            }
        },            
    },
    lifecycle: {
        created: function () {
            this.innerContent = this.getInnerContent("collection-container-content").innerHTML;
            this.getRenderingRoot().innerHTML = template({});
            this.selectInRenderingRoot("#inner-content").innerHTML = this.innerContent;
            this.collectionElementTag = this.selectInRenderingRoot("collection-elements");
            this.searchForm = this.selectInRenderingRoot("collection-search-form");
            this.showMoreButtonTag = this.selectInRenderingRoot("#show-more-button");
            this.nextButton = this.selectInRenderingRoot("#next-button");
            this.previousButton = this.selectInRenderingRoot("#previous-button");
            this.currentPage = this.currentPage || 1;
        },
        inserted: function () {
            this.renderInfiniteScrolling();
            this.renderShowMoreButton();
            this.renderPager();
            var self = this;
            this.onComponentsReady(function(event) { 
                self.fetchData();
            });
            this.activateRefreshing();
        },
        attributeChanged: function(attributeName) {
            this.activateRefreshing();
        }
    },
    methods: {
        fetchData: function() {
            var self = this;

            if (!self.url) {
                throw new Error("Url is not defined");
            }

            if (!self.collectionElementTag) {
                 throw new Error("No <collection-elements/> found as inner contet of <collection-container/>.");
            }   

            if (!window.restService) {
                throw new Error("'restService' must be assigned to main window for <collection-container/> to work correctly");   
            }      
           
            var formData = {};
            if (self.searchForm) {
                var isFormValid = self.searchForm.validate();
                if (!isFormValid) {
                    return;
                }
                formData = self.searchForm.getData();    
            }
            formData.page = this.currentPage;
            formData.elementsPerPage = this.elementsPerPage;

            window.restService.ajax({
                url: self.url,
                method: "GET",
                data: formData,
                success: function (result) {
                    self.checkDataFormat(result);
                    self.handleDataRendering(result);
                }
            });                
        },
        checkDataFormat: function(dataFromServer) {
            if (!_(dataFromServer.numberOfResults).isNumber()) {
                throw new Error("Result json from server is expected to have a numberOfResults property of type number");
            }

            if (!_(dataFromServer.collection).isArray()) {
                throw new Error("Result json from server is expected to have a collection property of type array");
            }
        },        
        handleDataRendering: function (result) {
            if (this.showMoreButton) {
                this.resultCounter = (this.resultCounter || 0) + result.numberOfResults;
            } else if (this.infiniteScrolling) {
                this.resultCounter = (this.resultCounter || 0) + result.numberOfResults;
            } else if (this.pager) {
                this.resultCounter = result.numberOfResults;
                this.collectionElementTag.emptyCollection();
            } else {
                var message = 
                    "Neither show-more-button, infinite-scrolling or pager are defined. " + 
                    "Showing the top " + 
                    this.elementsPerPage + 
                    " elements of collection."
                console.log(message)
                this.resultCounter = result.numberOfResults;
                this.collectionElementTag.emptyCollection();
            }
            this.collectionElementTag.addResults({
                collection: result.collection,
                numberOfResults: this.resultCounter
            });
        },
        appendNextPageData: function () {
            this.currentPage++;
            this.fetchData();
        },
        fetchNextPageData: function () {
            this.currentPage++;
            this.fetchData();
        },
        fetchPreviousPageData: function () {
            if (this.currentPage == 1) {
                return;
            }
            this.currentPage--;
            this.fetchData();
        },
        renderShowMoreButton: function () {
            var self = this;
            if (self.showMoreButton) {
                self.selectInRenderingRoot(".show-more").hidden = false;
                self.showMoreButtonTag.onclick = function() {
                    self.appendNextPageData();
                };
            }                
        },
        renderPager: function () {
            var self = this;
            if (self.pager) {
                self.selectInRenderingRoot(".pager").hidden = false;
                self.nextButton.onclick = function() {
                    self.fetchNextPageData();
                };
                self.previousButton.onclick = function() {
                    self.fetchPreviousPageData();
                };                    
            }
        },
        renderInfiniteScrolling: function () {
            var self = this;
            if (self.infiniteScrolling) {
                var scrollCallback =  function () {                    
                    var positionOffset = window.outerHeight + (window.scrollY || pageYOffset) - document.body.offsetHeight;
                    console.log(positionOffset);
                    if (positionOffset >= 0) {
                        self.appendNextPageData();
                    }                    
                };
                var throttledFunction = _.throttle(scrollCallback, 300);
                window.addEventListener("scroll", throttledFunction, false);
            }                
        },
        activateRefreshing: function() {
            var self = this;
            clearInterval(self.refreshInterval);

            if(!self.refreshEvery) {
                return;
            }

            if (self.refreshEvery <= 0 ) {
                return;
            }

            self.refreshInterval = setInterval(function () {
                self.collectionElementTag.emptyCollection();
                self.fetchData();
            }, 1000 * self.refreshEvery);
        }
    },
    events: {
        submit: function (e) {
            e.preventDefault();
            this.currentPage = 1;
            this.resultCounter = 0;
            this.collectionElementTag.emptyCollection();
            this.fetchData();
        },
        tap: function () {

        }
    }
};