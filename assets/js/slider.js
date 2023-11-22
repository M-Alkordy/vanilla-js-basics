const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const slides = document.querySelectorAll(".slide")
let count=0;
prev.addEventListener("click" , ()=>{
    if(count == slides.length-1){
        count=0
    }
    else{
        count++;
    }
    slides.forEach(e =>{
        e.style.transform = "translateX(-" + count * 100 + "%)"
    })
})

next.addEventListener("click" , ()=>{
    if(count == 0){
        count= slides.length-1
    }
    else{
        count--;
    }
    slides.forEach(e =>{
        e.style.transform = "translateX(-" + count * 100 + "%)"
    })
})