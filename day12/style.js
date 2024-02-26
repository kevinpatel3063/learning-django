let menu = document.getElementById("menu")
let breads = document.getElementById("breads")
let panner = document.getElementById("panner")
let desert = document.getElementById("desert")

menu.addEventListener("focusout", ()=>{
    let item = menu.value
    
    if(item == "#") {
        breads.className = "fadein"
        panner.className = "fadein"
        desert.className = "fadein"
        breads.style.opacity = "1"
        panner.style.opacity = "1"
        desert.style.opacity = "1"
        breads.style.margin = "35px 40px"
        desert.style.margin = "35px 40px"
        panner.style.margin = "35px 40px"
        menu.style.marginLeft = "370px" 
    } else if (item == "breads") {
        // breads.style.opacity = "1"
        if(desert.className == "fadein") {
            desert.className = "fadeout"
            panner.style.opacity = "0"
            breads.className = "fadein"
        } else if(panner.className == "fadein") {
            panner.className = "fadeout"
            desert.style.opacity = "0"
            breads.className = "fadein"
        } 
        else {
            panner.style.opacity = "0"
            desert.style.opacity = "0"
            breads.className = "fadein"
        }
        breads.style.margin = "35px -112px"
        desert.style.margin = "35px -112px"
        panner.style.margin = "35px -112px"
        menu.style.marginLeft = "10px" 
    } else if(item == "panner") {
        // breads.style.opacity = "0"
        // panner.style.opacity = "1"
        if(breads.className == "fadein") {
            breads.className = "fadeout"
            desert.style.opacity = "0"
            panner.className = "fadein"
        } else if (desert.className == "fadeout") {
            desert.className = "fadeout"
            breads.style.opacity = "0"
            panner.className = "fadein"
        }
        desert.style.opacity = "0"
        breads.className = "fadeout"
        panner.className = "fadein"
        breads.style.margin = "35px -112px"
        desert.style.margin = "35px -112px"
        panner.style.margin = "35px -112px"
        menu.style.marginLeft = "10px" 
    } else if(item == "desert") {
        if(breads.className == "fadein") {
            breads.className = "fadeout"
            panner.style.opacity = "0"
        } else if (panner.className == "fadein") {
            panner.className = "fadeout"
            breads.style.opacity = "0"
            // breads.className = "fadein"
        }
        // breads.style.opacity = "0"
        // desert.style.opacity = "1"
        // panner.className = "fadeout"
        desert.className = "fadein"
        breads.style.margin = "35px -112px"
        desert.style.margin = "35px -112px"
        panner.style.margin = "35px -112px"
        menu.style.marginLeft = "10px" 
    }
})

function menuCollected() {
    let items = document.querySelectorAll("input[type='checkbox']:checked")
    let data = []
    for(let i=0; i<items.length; i++) {
        data[i] = items[i].value
    }
    console.log(data)
    localStorage.setItem("menu_data", data)
    // window.location.href = "http://localhost:5501/bill.html"
}