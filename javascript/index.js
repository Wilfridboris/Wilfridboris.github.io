const toogle=document.querySelector(".toggle");
const menu=document.querySelector(".menu-list");

/*Toogle**/
function toogleMenu(){
    if(menu.classList.contains("select")){
        menu.classList.remove("select");
        toogle.querySelector("a").innerHTML="<i class='fas fa-bars'></i>"

    }else{
        menu.classList.add("select")
        toogle.querySelector("a").innerHTML="<i class='fas fa-times'></i>"
    }
} 
toogle.addEventListener("click",toogleMenu,false);