let products = [
    {
        category : "camera",
        images : ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    },
    {
        category : "bag",
        images : ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww" , "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFnfGVufDB8fDB8fHww"]
    },
    {
        category : "watch",
        images : ["https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D" , "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D" , "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D" , "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fHww"]
    },
    {
        category : "mobile",
        images : ["https://plus.unsplash.com/premium_photo-1680906246343-59c4c7c7e82e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8fHww" , "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlfGVufDB8fDB8fHww"]
    },
    {
        category : "tablet",
        images : ["https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8fDB8fHww" , "https://images.unsplash.com/photo-1527698266440-12104e498b76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFibGV0fGVufDB8fDB8fHww" , "https://images.unsplash.com/photo-1521633286323-05b17f47cb74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D"]
    },
    {
        category : "laptop",
        images : ["https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww" , "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww"]
    }
]

const container = document.getElementById ("container")
const clos = document.getElementById ("clos")
const img = document.querySelector (".slider img")
const total = document.querySelector (".total")
const prev = document.querySelector ("#prev")
const next = document.querySelector ("#next")
const num = document.querySelector (".count")
let count =0;
let selectProduct;

products.forEach(element =>{
    container.innerHTML += `<img src ="${element.images[0]}" id="${element.category}">`
})

const images = document.querySelectorAll (".container img")
const popup = document.querySelector (".popup")

images.forEach(element => {
    element.addEventListener("click" , ()=>{
        popup.style.display = "block";
        count=0;
        num.innerHTML=1;
        prev.style.visibility ="hidden"
        let category = element.id;
        selectProduct = products.find(element =>{return element.category == category })
        img.src = selectProduct.images[0];
        total.innerHTML = selectProduct.images.length
    })
})


clos.addEventListener("click" ,()=>{
    popup.style.display = "none"
})


prev.addEventListener("click" , ()=>{
    if (count>0) {
        next.style.visibility ="visible"
        count--;
        num.innerHTML= count+1;
        img.src = selectProduct.images[count]
        if (count==0) {
            prev.style.visibility ="hidden"
        }
    }
})

next.addEventListener("click" , ()=>{
    if (count< selectProduct.images.length -1) {
        prev.style.visibility ="visible"
        count++;
        num.innerHTML= count+1;
        img.src = selectProduct.images[count]
        if (count==selectProduct.images.length -1) {
            next.style.visibility ="hidden"
        }
    }
})