
//INITIATE MY MODULE
(function(){
    var article;
//get all necessary files;
    var xhr=new XMLHttpRequest();
    xhr.onload=function(){
        if(xhr.status===200){
            responseObject=JSON.parse(xhr.responseText);
            article=responseObject.article;
        };
    };
    xhr.open('GET','/database/article.json',true);
    xhr.send(null);  

  
// MY base module index

var app=angular.module('base',[]);
app.directive('headBase',()=>{
    return{
        restrict:'E',
        templateUrl:'/includes/head.html'
    };


});
//my menu panel control

app.controller("leftMenu",function($http){
    this.articles=article;
    /*
    this.check=function(e){
        var ecran=document.getElementById("infos-center");
        //ecran.remove();
        e.preventDefault();
        var pag=e.srcElement.alt|| e.srcElement.textContent;
        $http.get("/artists/pages-artist/"+pag+".html").then(function(response){
            ecran.innerHTML=response.data;
            console.log(response.data);
        });
        console.log(pag);
    

    };
    */
    
    

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
/*
    var article=[
    
    {title:"Davido",by:"francois xavier",image:"img/davido.jpeg"},
    {title:"Singula",by:"Sweden george",image:"img/singula.jpg"},
    {title:"Burna Boy",by:"England jean",image:"img/burnaboy.jpg"}

               
                ];

*/

})();  

