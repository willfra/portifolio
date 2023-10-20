/* efeito mouse */

const blurElement = document.getElementById("spotlight");

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX + window.scrollX;
    const mouseY = e.clientY + window.scrollY;

    blurElement.style.left = mouseX - blurElement.clientWidth / 2 + "px";
    blurElement.style.top = mouseY - blurElement.clientHeight / 2 + "px";
});

function calcularDistancia(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    const bottom1 = rect1.bottom;
    const top2 = rect2.top;

    const distancia = top2 - bottom1;

    return distancia;
}

const cardPerfil = document.getElementById("card-perfil");
const iconTec = document.getElementById("icon-tec");

const distanciaEntreElementos = calcularDistancia(cardPerfil, iconTec);

const linhaVertical = document.querySelector(".line-y");
linhaVertical.style.height = distanciaEntreElementos + "px";

const cardPerfilRect = cardPerfil.getBoundingClientRect();
const positionY = cardPerfilRect.bottom + window.scrollY;

linhaVertical.style.top = positionY - 20 + "px";

const lineBox = document.querySelector(".line-box");
const cardPerfilWidth = cardPerfil.offsetWidth;

lineBox.style.width = cardPerfilWidth + "px";

let lastScrollPosition = 0;

const header = document.querySelector("header");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = header.offsetHeight;

    if (scrollTop > lastScrollTop) {
        // Scroll para baixo
        header.classList.remove("show-style-header");
        header.classList.remove("show-header");
    } else {
        // Scroll para cima
        header.classList.add("show-style-header");
        header.classList.add("show-header");
        console.log(header.classList);
    }

    // Remove a classe "show" quando o cabeçalho estiver perto do topo do corpo
    if (scrollTop < headerHeight) {
        header.classList.remove("show-style-header");
        console.log(scrollTop);
    }

    lastScrollTop = scrollTop;
});

// ASIDE JS ----------------------------------------

const checkbox = document.getElementById("hamburger");
const aside = document.querySelector(".aside");
const closebutton = document.querySelector(".closebutton");
const body = document.querySelector("body");

checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
        aside.classList.add("ative");
        closebutton.style.right = "0";
        header.classList.add("aside-hide");
        /* body.style.overflowY = "hidden"; */
    } else {
        aside.classList.remove("ative");
        closebutton.style.right = "-2000px";
        header.classList.remove("aside-hide");
        /* body.style.overflowY = "auto"; */
    }
});
closebutton.addEventListener("click", function () {
    aside.classList.remove("ative");
    header.classList.remove("aside-hide");
    closebutton.style.right = "-2000px";
    checkbox.checked = false;
    /* body.style.overflowY = "auto"; */
});
