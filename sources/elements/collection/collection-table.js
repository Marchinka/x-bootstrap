import utils from "./../../utils/utils.js";
import collectionElements from "./collection-elements.js";

const template = `
    <table class="table">
        <thead>
        </thead>
        <tbody>
        </tbody>
    </table>
    <collection-table-template style="display: none;"></collection-table-template>`;

var collectionTable = {
    lifecycle: {
        created: function () {
            this.saveTemplate();
            this.renderBaseTemplate();
            this.saveTemplateInMarkup();
            this.appendHeader();
        }
    },
    methods: {
        getInnerContainer: function () {
            return this.selectInRenderingRoot("tbody");
        },
        saveTemplate: function () {
            this.innerContent = this.getInnerContent("collection-table-template").innerHTML;
        },
        renderBaseTemplate: function () {
            this.getRenderingRoot().innerHTML = template;
            this.table = this.selectInRenderingRoot("table");
            this.header = this.selectInRenderingRoot("thead");
            this.body = this.selectInRenderingRoot("tbody");
            this.hideTable();
        },
        showTable: function () {
            this.table.className = "table";
        },
        hideTable: function () {
            this.table.className = "hidden table";
        },
        appendHeader: function () {
            var row = document.createElement("tr");
            var columns = this
                .getInnerContent("collection-table-template")
                .querySelectorAll("table-column");

            _(columns).each(function (column) {
                var headerCell = document.createElement("th");
                headerCell.textContent = column.label || column.field;
                row.appendChild(headerCell);
            }, this);

            this.header.appendChild(row);
        },
        saveTemplateInMarkup: function () {
            this.templateTagContainer = this.selectInRenderingRoot('collection-table-template');
            this.templateTagContainer.innerHTML = this.innerContent;
        },
        emptyCollection: function () {
            this.body.innerHTML = '';
            this.emptyModel();
        },
        appendData: function (data) {
            if (!_(data).isArray()) {
                throw new Error("Result json from server is expected to have a collection property of type array");
            }

            this.addToModel(data);

            _(data).each(function (elementData) {
                var domElement = this.getChildElement(elementData);
                this.getInnerContainer().appendChild(domElement);
            }, this);

            var rows = this.getRenderingRoot().querySelectorAll("tr");
            if (rows.length <= 1) {
                this.hideTable();
            } else {
                this.showTable();
            }
        },        
        getChildElement: function (elementData) {
            var row = document.createElement("tr");
            var columns = this
                .getInnerContent("collection-table-template")
                .querySelectorAll("table-column");

            _(columns).each(function (column) {
                var td = document.createElement("td");
                var cellContent = column.renderCell(elementData);
                td.appendChild(cellContent);
                row.appendChild(td);
            }, this);
            return row;
        }        
    }
};

export default utils
    .extend(collectionTable)
    .from(collectionElements);