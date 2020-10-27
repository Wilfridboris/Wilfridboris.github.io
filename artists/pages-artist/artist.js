(function(){
    //get all necessary files;
    var fondArtist;
    var xhr=new XMLHttpRequest();
    xhr.onload=function(){
        if(xhr.status===200){
            responseObject=JSON.parse(xhr.responseText);
            fondArtist=responseObject.fondArtist;
            
        };
    };
    xhr.open('GET','./database/fond.json',true);
    xhr.send(null);  
    current=window.location.pathname;
    var artistName=current.split('/')[3];
    artistName=artistName.split('.')[0];
    console.log(artistName);
    console.log(current);
    
    var art=angular.module('arts',[]);
    art.controller('pane',function(){
        for(var x in fondArtist){
            if(artistName==fondArtist[x].title){
                this.fond=fondArtist[x].imageFond;
                this.titreFond=fondArtist[x].title;
            }
        }

    });
    art.controller("leftMenu",function($http){
        //this.articles=article;
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
art.directive('headArtist',function(){

    return{
        restrict:'E',
        templateUrl:'./includes/headArtist.html'
    };

});
art.directive('controlArtist',()=>{
    return{
        'restrict':'E',
        'templateUrl':'./includes/controlArtist.html'
    }
});


})();
