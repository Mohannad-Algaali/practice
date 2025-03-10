const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
            
        }
    })
});

const hiddenLeftElements = document.querySelectorAll('.hidden-left');

hiddenLeftElements.forEach((el)=> observer.observe(el));

const hiddenRightElements = document.querySelectorAll('.hidden-right');

hiddenRightElements.forEach((el)=> observer.observe(el));
