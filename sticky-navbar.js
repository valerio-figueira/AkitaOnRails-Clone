window.onscroll = function(){
    stickynav();
}

var nav = document.querySelector('.navbar')
var header = document.querySelector('#header')
var sticky = nav.offsetTop;
sticky += header.offsetTop;

function stickynav(){
    if(window.pageYOffset >= sticky){
        nav.classList.add("sticky")
        header.classList.add("sticky")
    } else{
        nav.classList.remove("sticky")
        header.classList.remove("sticky")
    }
}