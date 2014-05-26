define([
    "jquery",
    "underscore",
    "backbone",
    "config",
    "handlebars",
    "view/common/base_view",
    "view/modules/shell",
    "view/common/transitioner"
], function (
    $,
    _,
    Backbone,
    Config,
    Handlebars,
    BaseView,
    ShellView,
    Transitioner
) {

    "use strict";

    return BaseView.extend({

        transitioner:null,
        $rootNode:null,
        shellView:null,

        initialize: function() {
            
        },

        start:function(){
            this.$rootNode = $('#rootNode');
            this.transitioner = new Transitioner({el:this.$rootNode});
            this.addEvents();

            //this.shellView = new ShellView({el:$('.shell-holder')});
        },

        addEvents:function(){
            window.onresize = _.bind(this.onResize, this);
        },

        onResize: function (evt) {
            if(this.transitioner){
                this.transitioner.onResize(evt);
            }
        },

        render: function() {}
    });
});