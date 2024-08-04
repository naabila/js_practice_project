let leftEl = document.querySelector(".left");
let rightEl = document.querySelector(".right");
        
        leftEl.addEventListener("mouseenter", () => {
            leftEl.classList.add("left-active");
        });
        
        leftEl.addEventListener("mouseleave", () => {
            leftEl.classList.remove("left-active");
        });
        
        rightEl.addEventListener("mouseenter", () => {
            rightEl.classList.add("right-active");
        });
        
        rightEl.addEventListener("mouseleave", () => {
            rightEl.classList.remove("right-active");
        });
