define([
	"jquery",
	"underscore",
	"config",
	"backbone",
	"controller/app_controller",
	"model/app_model"
],function (
    $,
    _,
    Config,
    Backbone,
    AppController,
    AppModel
){

	"use strict";

    return Backbone.View.extend({

        currentSection: null,

        initialize: function () {
            this.listenTo(AppModel, "change:page", this.onAppModelPage);
        },

        onResize: function (evt) {
            if (this.currentSection) {
                this.currentSection.onResize(evt);
            }
        },

        onAppModelPage: function (model, page, options) {
            var pageId = page;

            //# If the view is already displayed, abort.
            if (this.currentViewId === pageId || pageId.length === 0) {
                return;
            }
            if(this.currentSection){
                this.currentSection.out();
            }
            var ViewClass = AppModel.getPageView();
            var ModelClass = AppModel.getPageModel();
            if (ViewClass && ModelClass) {
                this.currentViewId = pageId;
                this.currentSection = new ViewClass({el:this.el, model:new ModelClass()});
                this.currentSection.enter();
                this.currentSection.onResize();
            }
        }
	});
});
