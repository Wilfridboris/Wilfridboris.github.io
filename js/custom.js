$(function(){



$('li a').click(function(e){
//e.preventDefault();
var url=this.href;
$('li a.active').removeClass('active')
$(this).addClass('active');
//$('div.container').remove()
//$('div.contain').load(url+'#contain').fadeIn();

})


});