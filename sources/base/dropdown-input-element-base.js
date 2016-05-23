import utils from "./../utils/utils.js";
import inputElementBase from "./input-element-base.js";

var dropdownInputElementBase = {
    accessors: {
        url: {
            attribute: { },
            get: function() {
                return this.getAttribute('url');
            },
            set: function(data) {
                this.xtag.data.url = data;
            }
        }
    },
    methods: {
        renderData: function (data) {
            if (!data) {
                throw new Error("Data not defined.");
            }

            this.getDropdownMenu().innerHTML = '';
            if (_.isEmpty(data)) {
                return;
            }
            
            _.each(data, function (optionData) {
                var dropdownOption = this.createDropdownOption(optionData);
                this.getDropdownMenu().appendChild(dropdownOption);
            }, this);
        },
        createDropdownOption: function (optionData) {
            var dropdownOption = utils.createElement("dropdown-option", {
               key: optionData.key ,
               value: optionData.value
            });
            return dropdownOption;
        },
        getDropdown: function () {
            var dropdown = this.selectInRenderingRoot(".dropdown");
            return dropdown;
        },
        getDropdownMenu: function () {
            var dropdownMenu = this.selectInRenderingRoot(".dropdown-menu");
            return dropdownMenu;
        },
        showMenu: function () {
            if (this.disabled) {
                this.hideMenu();
            } else {
                var dropdown = this.getDropdown();
                if(dropdown) dropdown.className = "dropdown open";
            }
        },
        hideMenu: function () {
            var dropdown = this.getDropdown();
            if(dropdown) dropdown.className = "dropdown";
        }
    },
    events: {
        focus: function () {
            this.showMenu();
        },
        blur: function () {
            this.hideMenu();
        },
        mousedown: function (e) {
            if (e.target.parentElement.parentElement.nodeName === "DROPDOWN-OPTION") {
                var dropdownOption = e.target.parentElement.parentElement;
                this.selectOption(dropdownOption);
            }
        }
    }
};

export default utils.extend(dropdownInputElementBase).from(inputElementBase);