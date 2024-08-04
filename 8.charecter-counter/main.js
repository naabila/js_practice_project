let textArea=document.querySelector('.char');
let remainingEl=document.querySelector('.remaining');
let totalEl=document.querySelector(".total");

textArea.addEventListener("keyup",()=>{
    updateChar();
})
  
updateChar();
function updateChar(){
    let maxLength = textArea.getAttribute("maxLength");
    let length = textArea.value.length;
    totalEl.innerText = length;
    remainingEl.innerText = maxLength - length; 
}