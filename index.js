document.querySelector(".menu-icon").addEventListener("click",function(){
    document.querySelector(".menu").style.display="block";
    document.querySelector("header").style.display="none";
})

document.querySelector(".bcak-angle").addEventListener("click",function(){
    document.querySelector(".menu").style.display="none";
    document.querySelector("header").style.display="block";
})