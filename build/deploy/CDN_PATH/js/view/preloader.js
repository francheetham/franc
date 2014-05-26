define([
    "jquery",'config'
],function(
    $, TweenLite, Config
){
    function destroyPreloader(){

    }

    window.onload = function(){
        if(Config.getIEversion() !== 8){
            $(preloaderHolder).empty();
            createCanvas();
        }
        //TweenLite.to(preloaderHolder,1, {opacity:1, ease:Power4.easeOut});
        window.destroyPreloader = destroyPreloader;
    };
});