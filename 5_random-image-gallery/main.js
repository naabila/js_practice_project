let btn=document.querySelector('.load-more-btn');
let container=document.querySelector('.img-container');
let check=document.querySelector(".check");
let body=document.querySelector("body");

btn.addEventListener("click",()=>{
    imgNum=10;
    addNewImage()
})
function addNewImage(){
    for(let i=0;i<imgNum;i++){
        let newImage=document.createElement("img");
        newImage.src=`https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000)}`;
        container.appendChild(newImage)
    }
  
}

//bg toggle
check.addEventListener("click",()=>{
if(check.checked){
    body.classList.add("dark")
}else{
body.classList.remove("dark")
}
})

