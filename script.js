var show_keys = window.document.getElementById("show-hide")
var edittext2 = window.document.getElementById("edittext2")

show_keys.addEventListener('click', () =>{
    if(edittext2.type === "text"){
        edittext2.setAttribute("type", "password")
        show_keys.innerText = "visibility_off"
    }else{
        edittext2.setAttribute("type", "text")
        show_keys.innerText = "visibility"
    }
})

setInterval(function () {
    var show_keys = window.document.getElementById("show-hide")
    var edittext2 = window.document.getElementById("edittext2")

    if(edittext2.value == ''){
        show_keys.style.display = "none"
    }else{
        show_keys.style.display = "block"
    }
    
}, 50);
