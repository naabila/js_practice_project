const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
updateCountDown()
function updateCountDown(){
let yearDate=new Date("jan 1,2025 00:00:00").getTime();
let now=new Date().getTime();
let gap=yearDate-now;

let second=1000;
let minuite=second*60;
let hour=minuite*60;
let day=hour*24;

let d=Math.floor(gap/day);
let h=Math.floor((gap%day)/hour);
let m=Math.floor((gap%hour)/minuite);
let s=Math.floor((gap%minuite)/second)

dayEl.innerText=d;
hourEl.innerText=h;
minuteEl.innerText=m;
secondEl.innerText=s
setTimeout(() => {
   updateCountDown() 
}, 1000);
}