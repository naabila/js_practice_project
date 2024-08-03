let containerEl=document.querySelector(".container");
const career=["Youtuber","Developer","designer","Freelancer"];
let careerIndex=0;
let charecterIndex=0;
updateText()
function updateText(){
    charecterIndex++
    containerEl.innerHTML=`
<h1>I am a ${career[careerIndex].slice(0,charecterIndex)} </h1>
`;
if(charecterIndex===career[careerIndex].length){
    careerIndex++
    charecterIndex=0
   
}
if(careerIndex===career.length){
    careerIndex=0
}
setTimeout(updateText,400);

}



