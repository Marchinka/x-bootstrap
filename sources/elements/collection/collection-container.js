import utils from "./../../utils/utils.js";
import elementBase from "./../../base/element-base.js";

const template = `
    <collection-container-content 
        id="inner-content">
    </collection-container-content>`;

const pagerHtml = `
    <ul class="pager">
        <li><a id="previous-button">Previous</a></li>
        <li><a id="next-button">Next</a></li>
    </ul>`;

const showMoreButtonHtml = `
    <button id="show-more-button" class="btn btn-default">Show More</button>`;

var collectionContainer = {
    accessors: {
        url: {
            attribute: { },
            get: function() {
                return this.getDataAttribute('url');
            },
            set: function(data) {
                this.xtag.data.url = data;
            }
        },
        infiniteScrolling: {
            attribute: { boolean: true },
            get: function() {
                return this.hasDataAttribute('infinite-scrolling');
            },
            set: function(data) {
                this.xtag.data.infiniteScrolling = data;
            }
        },
        showMoreButton: {
            attribute: { boolean: true },
            get: function() {
                return this.hasDataAttribute('show-more-button');
            },
            set: function(data) {
                this.xtag.data.showMoreButton = data;
            }
        },  
        pager: {
            attribute: { boolean: true },
            get: function() {
                return this.hasDataAttribute('pager');
            },
            set: function(data) {
                this.xtag.data.pager = data;
            }
        },  
        elementsPerPage: {
            attribute: { },
            get: function() {
                return this.getDataAttribute('elements-per-page');
            },
            set: function(data) {
                this.xtag.data.elementsPerPage = data;
            }
        },              
        currentPage: {
            attribute: { },
            get: function() {
                return this.getDataAttribute('current-page');
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
            this.getRenderingRoot().innerHTML = template;
            this.selectInRenderingRoot("#inner-content").innerHTML = this.innerContent;
            this.initializeComponents();
        },
        inserted: function () {
            var self = this;
            self.onComponentsReady(function() { 
                self.fetchData();
                self.activateRefreshing();
                self.activateInfiniteScrolling();
                self.renderShowMoreButton();
                self.renderPager();                
            });
            this.activateRefreshing();            
        }
    },
    methods: {
        initializeComponents: function () {
            this.collectionElementTag = this.selectInRenderingRoot("collection-elements,collection-table,[collection-elements],[collection-table],[data-collection-elements],[data-collection-table]");
            this.searchForm = this.selectInRenderingRoot("collection-search-form,[collection-search-form],[data-collection-search-form]");
            this.currentPage = this.currentPage || 1;
        },
        fetchData: function() {
            var self = this;

            if (!self.url) {
                throw new Error("Url is not defined");
            }

            if (!self.collectionElementTag) {
                 throw new Error("No <collection-elements/> found as inner contet of <collection-container/>.");
            }
           
            var formData = {};
            if (self.searchForm) {
                var isFormValid = self.searchForm.validate();
                if (!isFormValid) {
                    return;
                }
                formData = self.searchForm.getData();    
            }

            var dataMatcher = _.matcher(self.lastData || {});
            var hasFormChanged = !dataMatcher(formData);
            self.lastData = _(formData).clone();
            if (hasFormChanged) {
                self.currentPage = 1;
                self.collectionElementTag.emptyCollection();
            }
            formData.page = self.currentPage;
            formData.elementsPerPage = self.elementsPerPage;

            var restService = self.getRestService();
            restService.ajax({
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
            this.collectionElementTag.appendData(result.collection);
            this.renderFeedbacks(result);
            this.toggleShowButtons();
        },
        toggleShowButtons: function () {
            var modelList = this.collectionElementTag.getModel();
            var button = this.selectInRenderingRoot("#show-more-button");
            var pager = this.selectInRenderingRoot(".pager");
            if (_(modelList).isEmpty()) {
                utils.hideElement(button);
                utils.hideElement(pager);
            } else {
                utils.showElement(button);
                utils.showElement(pager);
            }
        },
        renderFeedbacks: function (result) {
            var feedbacks = this
                .getRenderingRoot()
                .querySelectorAll("collection-feedback");

            _(feedbacks).each(function (feedback) {
                if(_(feedback.renderFrom).isFunction()) feedback.renderFrom(result);
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
            if (!self.showMoreButton) {
                return;
            }
            self.appendHtmlInRenderingRoot(showMoreButtonHtml);
            var showMoreButton = this.selectInRenderingRoot("#show-more-button");
            showMoreButton.onclick = function() {
                self.appendNextPageData();
            };
        },
        renderPager: function () {
            var self = this;
            if (!self.pager) {
                return;
            }
            self.appendHtmlInRenderingRoot(pagerHtml);
            var nextButton = this.selectInRenderingRoot("#next-button");
            var previousButton = this.selectInRenderingRoot("#previous-button");    
            nextButton.onclick = function() {
                self.fetchNextPageData();
            };
            previousButton.onclick = function() {
                self.fetchPreviousPageData();
            };
        },
        activateInfiniteScrolling: function () {
            var self = this;
            if (!self.infiniteScrolling)
            {
                return;
            }
            var scrollCallback =  function () {                    
                var positionOffset = window.outerHeight + (window.scrollY || pageYOffset) - document.body.offsetHeight;
                //console.log(positionOffset);
                if (positionOffset >= 0) {
                    self.appendNextPageData();
                }                    
            };
            var throttledFunction = _.throttle(scrollCallback, 300);
            window.addEventListener("scroll", throttledFunction, false);
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
        }
    }
};

export default utils
    .extend(collectionContainer)
    .from(elementBase);