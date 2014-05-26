define([
	"jquery",
	"view/pages/home",
    "view/pages/about",
    "view/pages/work",
    "view/pages/holding",
    "model/pages/home",
    "model/pages/about",
    "model/pages/work",
    "model/pages/holding",
	"libs/createjs/preloadjs",
	"console"
],function(
	$,
	HomeView,
    AboutView,
    WorkView,
    HoldingView,
    HomeModel,
    AboutModel,
    WorkModel,
    HoldingModel,
	preloadjs
){
    "use strict";

	var data = {
		PAGES:{
			'HOME':{
				'NAME': "HOME",
				'VIEW':HomeView,
				'MODEL':HomeModel,
				'URL':"home"
			},
			'ABOUT':{
				'NAME': "ABOUT",
				'VIEW':AboutView,
				'MODEL':AboutModel,
				'URL':"about"
			},
			'WORK':{
				'NAME': "WORK",
				'VIEW':WorkView,
				'MODEL':WorkModel,
				'URL':"work"
			},
			'HOLDING':{
				'NAME': "HOLDING",
				'VIEW':HoldingView,
				'MODEL':HoldingModel,
				'URL':"holding"
			}
            /*,
			'LOADER':{
				'NAME': "LOADER",
				'VIEW':LoaderView,
				// 'MODEL':TrailerModel,
				'URL':"loader"
			}*/
		}
	};

	data.INITIAL_LOAD = [
		{ src: '/css/all.css', id:'/css/all.css', type:preloadjs.CSS}
        /*,{ src: '/img/bear_body_sprite@2x.png', id:'/img/bear_body_sprite@2x.png', type:preloadjs.IMAGE}*/
	];

    return data;
});