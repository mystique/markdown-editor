$(function () {

    var editor = new Vue({
        el: '#editor',
        data: {
            markdown_text: ''
        },
        computed: {
            preview_text: function() {
                return markdown.toHTML(this.markdown_text);
            }
        }
    });
});