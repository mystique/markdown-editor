$(function () {

    var converter = new showdown.Converter();

    var editor = new Vue({
        el: '#editor',
        data: {
            markdown_text: ''
        },
        computed: {
            preview_text: function () {
                return converter.makeHtml(this.markdown_text);
            }
        }
    });

    var markdown = CodeMirror.fromTextArea($('#markdown_editor')[0], {
        lineNumbers: true,
        theme: 'the-matrix',
        mode: 'markdown'
    });

    markdown.on('changes', function(instance) {
        editor.markdown_text = instance.getValue();
    });
});