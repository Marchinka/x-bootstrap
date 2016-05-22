import utils from "./../utils/utils.js";
import inputElementBase from "./input-element-base.js";

var dorpdownInputElementBase = {
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
            if (_.isEmpty(data)) {
                throw new Error("Data must be a collection.");
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
            if (!dropdown) {
                throw new Error("A .dropdown div must be defined inside autocomplete template");
            }
            return dropdown;
        },
        getDropdownMenu: function () {
            var dropdownMenu = this.selectInRenderingRoot(".dropdown-menu");
            if (!dropdownMenu) {
                throw new Error("A .dropdown-menu div must be defined inside autocomplete template");
            }
            return dropdownMenu;
        },
        showMenu: function () {
            if (this.disabled) {
                this.hideMenu();
            } else {
                this.getDropdown().className = "dropdown open";
            }
        },
        hideMenu: function () {
            this.getDropdown().className = "dropdown";
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

export default utils.extend(dorpdownInputElementBase).from(inputElementBase);