define([
    "underscore",
    "router",
    "model/app_model",
    "data/app_data",
    "controller/loader_controller"
],function (
    _,
    Router,
    AppModel,
    AppData,
    LoaderController
) {
    "use strict";

    var AppController = function(){};
    _.extend(AppController.prototype, Backbone.Events);

    _.extend(AppController.prototype, {

        loaderController:null,
        appHasStarted:false,

        init: function() {

            //setup app routes
            Router.setRoutes([
                /*,["", AppData.PAGES.HOME.NAME]*/
                [AppData.PAGES.HOME.URL, AppData.PAGES.HOME.NAME],
                [AppData.PAGES.ABOUT.URL, AppData.PAGES.ABOUT.NAME],
                [AppData.PAGES.WORK.URL, AppData.PAGES.WORK.NAME],
                [AppData.PAGES.PLAY.URL, AppData.PAGES.PLAY.NAME]
            ]);

            Router.on("page", this.onRouterPage, this);

            AppModel.getNavigationModel().createNavigation(AppData.PAGES);

            //initial load
            this.loaderController = new LoaderController();
            this.loaderController.init();
            this.loaderController.addList(AppData.INITIAL_LOAD);
            this.loaderController.on('complete', this.appReady, this);
            this.loaderController.start();
        },

        appReady:function(){
            if(!this.appHasStarted){
                this.appHasStarted = true;
                $('head').append(AppModel.getLoaderModel().getItemByID('/css/all.css'));
                this.trigger('AppController:ready');
            }
           
        },

        onRouterPage: function ( page, pageOptions ) {
            AppModel.set({'page': page, 'pageOptions': pageOptions});
        }
    });

    return AppController;
});