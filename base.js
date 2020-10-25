
//INITIATE MY MODULE
(function(){
   

  
// MY base module index
var app=angular.module('base',[]);
app.directive('headBase',()=>{
    return{
        restrict:'E',
        templateUrl:'/includes/head.html'
    };


});
//my menu panel control

app.controller("leftMenu",function(){
    /**left menu state change */
   this.change=function(e){
       //e.preventDefault();
       se=document.querySelectorAll('a.selected');
        se[0].removeAttribute('class');
        e.srcElement.setAttribute('class','selected');
        
            
       };
       

});
app.controller("subscript",function(){
    this.hide=function(){
    cl=document.getElementById('page');
    cl.style.display="none";
    
    };
    
    
    
    });
app.directive('controlPanel',()=>{
    return{
        'restrict':'E',
        'templateUrl':'/includes/controlPanel.html'
    }
});

})();  

