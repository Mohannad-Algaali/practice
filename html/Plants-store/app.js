let menuBtn = document.querySelector(".menu-btn");
const CHECKED = 'checked';

menuBtn.addEventListener('click', (e)=>{
    if(menuBtn.classList.contains(CHECKED)){
        menuBtn.classList.add(CHECKED);
    }else{
        menuBtn.classList.remove(CHECKED);
    }
});