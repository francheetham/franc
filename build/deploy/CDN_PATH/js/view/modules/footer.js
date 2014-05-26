define([
    "jquery",
    "underscore",
    "backbone",
    "config",
    "handlebars",
    "view/common/base_view",
    "text!templates/modules/footer.hbs"
], function (
    $,
    _,
    Backbone,
    Config,
    Handlebars,
    BaseView,
    Template
) {
    // not implemented
    "use strict";

    return BaseView.extend({

        initialize: function() {
            var compiledTemplate = Handlebars.compile(Template);
            this.$el.append(
                $( compiledTemplate( { 'title': 'Awesome!', 'time': new Date().toString() } ) )
            );
        },

        render: function() {}
    });
});
