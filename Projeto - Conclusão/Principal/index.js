setTimeout(() => fadeIn(), 800);

function fadeIn(){
    document.querySelector(".all").classList.toggle("fadeIn");
}

var P1 = document.getElementById("P1")
P1.addEventListener("click", pagLingua);

function pagLingua(){
    setTimeout(() => fadeOut(),);
    setTimeout(() => {
        window.location.href= "/Linguagem/lingua.html"
    },0);
}

function fadeOut(){
    document.querySelector(".all").classList.toggle("fadeOut");
}

