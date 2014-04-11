if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.redactorcss = {

    init: function() {
        this.buttonAdd('redactorcss', 'Classes', this.showMyModal);
    },

    showMyModal: function() {
        var callback = $.proxy(function() {
            $(".redactor_modal_action_btn").on('click', $.proxy(function(e) {
                e.preventDefault();

                var remove,
                    classes = [];

                $(".ui-selected").each(function() {
                    classes.push($(this).data('class'));
                });

                this.insertClass(classes.join(" "));

            }, this));

            this.shiftClick();
            this.selectionSave();
            this.bufferSet();

        }, this);



        var segment_1 = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1'),
            edit = '<a class="redactorcss_edit" href="/' + segment_1 +'/settings/plugins/redactorcss">add/edit</a>'

        this.modalInit('Choose a class (shift or cmd/ctrl click too) - ' + edit + '', '#redactorcss_modal', 500, callback);
    },

    insertClass: function(classes) {
        this.selectionRestore();
        this.blockSetClass(classes);
        this.modalClose();
    },

    shiftClick: function() {
        var prev = -1;
        $('#container').selectable({
            selecting: function(e, ui) {
                var curr = $(ui.selecting.tagName, e.target).index(ui.selecting);
                if (e.shiftKey && prev > -1) {
                    //console.log(prev, curr, Math.min(prev, curr));
                    $(ui.selecting.tagName, e.target).slice(Math.min(prev, curr), 1 + Math.max(prev, curr)).addClass('ui-selected');
                    prev = -1;
                } else {
                    prev = curr;
                }
            }
        });
    }
};
