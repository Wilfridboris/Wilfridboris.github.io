$(function(){
$('h1.display-4').hide();
$('h1.display-4').slideDown(500);
/** 
$('h1.display-4').mouseover(function () { 
    $('h1.display-4').hide(600);  
});
*/

let touch=0;
$('div.builch-list-bc').hide();
$('div.builch-list-ac').hide();
$('#builch-list-bc').click(function(e){
e.preventDefault();
var url=this.href;
$('div.list-group a.active').removeClass('active');
$(this).addClass('active');
touch+=1;
if(touch<=1){

$('div.builch-list-bc').slideDown();
}
if(touch>=2){
$('div.builch-list-bc').hide();
touch=0;
}
});
$('#builch-list-ac').click(function(e){
    e.preventDefault();

    var url=this.href;
    $('div.list-group a.active').removeClass('active');
    $(this).addClass('active');
    touch+=1;
    if(touch<=1){
    
    $('div.builch-list-ac').slideDown();
    }
    if(touch>=2){
    $('div.builch-list-ac').hide();
    touch=0;
    }
    });




/*
$('div.builch-list a').click(function(e){

});
*/
    
    


/*
var url=this.href;
$('li a.active').removeClass('active')
$(this).addClass('active');
//$('div.container').remove()
//$('div.contain').load(url+'#contain').fadeIn();
/*/




});