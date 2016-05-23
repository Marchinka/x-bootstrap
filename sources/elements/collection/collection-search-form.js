const template = data => `
    <form>
        <collection-search-form-content>
            ${data.innerContent}
        </collection-search-form-content>
    </form>`;

export default {
    lifecycle: {
        created: function() {
            this.innerContent = this.getInnerContent("collection-search-form-content").innerHTML;
            this.render();
        }
    },
    methods: {
        render: function ()
        {
            var data = {
                innerContent: this.innerContent
            };
            this.innerHTML = template(data);
        }          
    },
    events: {
        submit: function (e) {
            e.preventDefault();
            var isFormValid = this.validate();
            if (!isFormValid) {
                e.stopPropagation();
                //var formData = this.getData();
                //alert(JSON.stringify(formData));
            }
        }
    }
};