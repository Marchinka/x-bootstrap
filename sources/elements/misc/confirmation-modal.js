import utils from "./../../utils/utils.js";
import elementBase from "./../../base/element-base.js";

const template = data => `
  <div class="modal fade custom-modal">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>

          <!-- Modal Title -->
          <h4 class="modal-title">${data.title}</h4>

        </div>

        <!-- Modal Body -->
        <div class="modal-body">
          <p>${data.message}</p>
        </div>

        <!-- Modal Footer With Buttons -->
        <div class="modal-footer">
          <button id="no-button" type="button" class="btn btn-default">${data.no}</button>
          <button id="yes-button" type="button" class="btn btn-default">${data.yes}</button>
        </div>
      </div>
      
    </div>
  </div>`;

var dropdownElement = {
    accessors: {
        title: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('title') || '';
            },
            set: function(data) {
                this.xtag.data.title = data;
            }
        },
        message: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('message') || '';
            },
            set: function(data) {
                this.xtag.data.message = data;
            }
        },
        yes: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('yes') || '';
            },
            set: function(data) {
                this.xtag.data.yes = data;
            }
        },
        no: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('no') || '';
            },
            set: function(data) {
                this.xtag.data.no = data;
            }
        }    
    },
    lifecycle: {
        created: function() {
            this.render();
        },
        attributeChanged: function () {
            this.render();
        }
    },
    methods: {
        render: function () {
        	var self = this;

            var data = {
        		title: self.title,
                message: self.message,
                no: self.no,
                yes: self.yes
        	};

            self.getRenderingRoot().innerHTML = template(data);

            self.selectInRenderingRoot("#no-button").onclick = function () {
                self.noCallback();
            };

            self.selectInRenderingRoot("#yes-button").onclick = function () {
                self.yesCallback();
            };
            
            var $ = self.getJquery();
            $(this).children(".modal.custom-modal").on('hidden.bs.modal', function () {
                try {
                    self.declineCallback();
                } catch(e) {
                    console.log(e);
                } finally {
                    self.destroy();
                }
            })
        },
        destroy: function () {
            this.remove();
        },
        open: function () {
            var $ = this.getJquery();
            var modal = $(".modal.custom-modal");
            modal.modal("show");
        },
        close: function () {
            var $ = this.getJquery();
            var modal = $(".modal.custom-modal");
            modal.modal("hide");
        },
        yesCallback: function () {
            this.close();
            this.confirmationCallback();
        },
        noCallback: function () {
            this.close();
        },
        confirmationCallback: function () {
            this.isConfirmed = true;
            if (this.onConfirmation) {
                this.onConfirmation();
            }
        },
        declineCallback: function () {
            if (this.onDecline && !this.isConfirmed) {
                this.onDecline();
            }
            this.isConfirmed = false;
        },
        getJquery: function () {
            return window.$;
        }
    }
};

export default utils
    .extend(dropdownElement)
    .from(elementBase);