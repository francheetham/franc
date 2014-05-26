define([
    "jquery",
    "underscore",
    "backbone",
    "config",
    "handlebars",
    "view/common/base_view",
    "view/modules/menu",
    "text!templates/modules/menu.hbs"
], function (
    $,
    _,
    Backbone,
    Config,
    Handlebars,
    BaseView,
    MenuView,
    Template
) {
    // not implemented
    "use strict";

    return BaseView.extend({

        $closeBtn:null,

        initialize: function() {

            _.bindAll(this,"onClickClose");
            
            var compiledTemplate = Handlebars.compile(Template);
            this.$node = $( compiledTemplate( { 'title': 'Awesome!', 'time': new Date().toString() } ) );
            this.$el.append(this.$node);

            this.$closeBtn = this.$el.find('.close-btn');
            this.$closeBtn.on('click', this.onClickClose);
            TweenMax.set(this.$node, { opacity: 0 });
            TweenMax.to(this.$node, 0.5, { ease: Expo.easeOut, opacity: 1 });
        },

        out: function(){
            TweenMax.killTweensOf(this.$el);
            TweenMax.to(this.$node, 0.5, { ease: Expo.easeOut, opacity: 0, onComplete:this.destroy() });
        },

        onClickClose:function(e){
            this.trigger('close:menu');
        },

        render: function() { }
    });
});
