let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".top-nav-bar ul"); 

const SHOWN = 'shown';
menuBtn.addEventListener('click', (e)=>{
    if(manu.classList.contains(SHOWN)){
        menu.classList.remove(SHOWN);
    }else{
        menu.classList.add(SHOWN);
    }
});