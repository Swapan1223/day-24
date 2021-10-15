function preloader (){
    const loader = document.querySelector(".loader")
    const main = document.querySelector(".main")
    loader.style.display ="none"
    main.style.display ="block"
   

}
window.addEventListener("load",preloader)
