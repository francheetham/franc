define([
    "jquery",
    "underscore",
    "backbone",
    "config",
    "router",
    "tweenmax",
    "handlebars",
    "util/utils",
    "model/app_model",
    "view/common/base_view",
    "text!templates/pages/about.hbs"
], function (
    $,
    _,
    Backbone,
    Config,
    Router,
    TweenMax,
    Handlebars,
    Utils,
    AppModel,
    BaseView,
    Template
) {

    "use strict";

    return BaseView.extend({

        events: {
            'click a.framework-navigation-js': 'onTriggerNavigation'
        },

        initialize: function() {
            var allNavigation = AppModel.getNavigationModel().getAllRoutes();
            this.compileAndAppendTemplate(Template,{'navigation':allNavigation});

            TweenMax.set(this.$el, { opacity: 0 });
        },

        onTriggerNavigation:function(e){
            e.preventDefault();
            Utils.navigateToRoute(Router, $(e.currentTarget).attr('href'));
        },

        enter: function(){
            TweenMax.killTweensOf(this.$el);
            TweenMax.to(this.$el, 1, { ease: Expo.easeOut, opacity: 1 });
        },

        out: function(){
            TweenMax.killTweensOf(this.$el);
            TweenMax.to(this.$el, 0.5, { ease: Expo.easeOut, opacity: 0, onComplete:this.destroy() });
        },

        render: function() {}
    });
});