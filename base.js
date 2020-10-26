
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
    this.articles=article;

    /**left menu state change */
   this.change=function(e){
       e.preventDefault();
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
app.directive('subscription',()=>{
    return{
        'restrict':'E',
        'templateUrl':'subscription.html'
    }
});

/**my Mcd with JSON */
var article=[
    
        {title:'Davido',by:'francois xavier',image:'img/davido.jpeg'},
        {title:'Singula',by:'Sweden george',image:'img/singula.jpg'},
        {title:'Burna Boy',by:'England jean',image:'img/burnaboy.jpg'}

]



})();  

