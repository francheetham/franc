define([
    "jquery",
    "underscore",
    "backbone",
    "config",
    "handlebars",
    "view/common/base_view",
    "view/modules/menu",
    "text!templates/modules/shell.hbs"
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

        $menuIcon:null,
        $menuHolder:null,

        menuView:null,

        initialize: function() {

            _.bindAll(this,"onClickMenu");
            
            var compiledTemplate = Handlebars.compile(Template);
            this.$el.append(
                $( compiledTemplate( { 'title': 'Awesome!', 'time': new Date().toString() } ) )
            );

            this.$menuIcon = this.$el.find('.menu-icon-js');
            this.$menuHolder = this.$el.find('.menu-holder-js');
            
            this.$menuIcon.on('click', this.onClickMenu);
        },

        onClickMenu:function(e){
            this.menuView = new MenuView({el:this.$menuHolder});
            this.menuView.on('close:menu', this.onCloseMenu, this);
        },

        onCloseMenu:function(){
            this.menuView.off('close:menu', this.onCloseMenu);
            this.menuView.out();
        },

        render: function() { }
    });
});
