/* let letters = document.querySelectorAll('.loading-screen svg path');
document.
for (let i =0;i<letters.length;i+=1;){
    let length = letters[i].getTotalLength();
    console.log(`letter ${i} has length ${length}`);
    letters[i].style = `stroke-dasharray: ${length}; stroke-dashoffset: ${length}; animation: text-animation${i} 2s ease-in 200ms forwards;`;
    addAnimation(`
        @keyframes text-animation${i} { 
         from {
            stroke-dashoffset: ${length};
         }
        to {
          stroke-dashoffset: 0;
        }
      }`);
}

function addAnimation(body) {
    if (!dynamicStyles) {
      dynamicStyles = document.createElement('style');
      dynamicStyles.type = 'text/css';
      document.head.appendChild(dynamicStyles);
    }
  
    dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}*/