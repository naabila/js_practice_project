let hrEl=document.querySelector("#hour");
let minEl=document.querySelector('#min');
let secEl=document.querySelector('#sec');
let apEl=document.querySelector(".ap")

function updateTime(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let amPm="AM"
    if(h>12){
        h=h-12;
        amPm="PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hrEl.innerText=h;
    minEl.innerText=m;
    secEl.innerText=s;
    apEl.innerText=amPm
    
    setTimeout(()=>{
        updateTime()
    },1000)
}
updateTime()