
//INITIATE MY MODULE
(function(){
// MY HEAD MODULE
var app=angular.module('base',[]);
app.directive('headBase',()=>{
    return{
        restrict:'E',
        templateUrl:'/includes/head.html'
    };


});
app.directive('controlPanel',()=>{
    return{
        'restrict':'E',
        'templateUrl':'/includes/controlPanel.html'
    }
})
})()