/**
 * Created by Aditya on 7/13/2017.
 */
(function() {
    var app = angular.module("MobileStore", []);
    var iphone = {
        name: "iphone7 plus",
        color: "black",
        memory: "3GB RAM,128 Internal Memory",
        price: 75000,
        image: "img/iphone-7-plus-matt-black_sku-header.png",
        isSoldOut: true,
        activeTab:"Description"
    };
    var iphone1 = {
        name: "iphone7 plus",
        color: "red",
        memory: "3GB RAM,128 Internal Memory",
        price: 75000,
        image: "img/apple_iphone_7_plus_128gb_red_sku_header.png",
        isSoldOut: true,
        activeTab:"Description"
    };
    app.controller("StoreController", function () {
        this.mobiles = [iphone, iphone1];

        this.setActiveTab=function(mobile,tab){
           mobile.activeTab=tab;
        }
    });
})();