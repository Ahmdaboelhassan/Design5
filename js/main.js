let photos = document.querySelectorAll(".work .img-holder .row div")
let list = document.querySelectorAll(".work ul li")

list.forEach((el)=>{
    el.addEventListener("click",()=>{
        list.forEach((ele)=>{
            ele.classList.remove("active");
        })
        el.classList.add("active");
        photos.forEach((img)=>{
            img.classList.add("d-none");
            if(img.dataset.cat === el.dataset.cat ){
                img.classList.remove("d-none")
            }
            else if(el.dataset.cat === "all"){
                img.classList.remove("d-none")
            }
        })
    })
})