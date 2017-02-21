var pass, fort;

window.onload = ini();

function ini() {
    pass = document.getElementById("pass");
    fort = document.getElementById("fort");
}

function revisa() {
    if(pass.value.length<5){
        fort.innerHTML = "no segura";
    }else if(pass.value.length<8){
        fort.innerHTML = "mitjanament segura";
    }else if(pass.value.length>8){
        fort.innerHTML = "segura";
    }
}

