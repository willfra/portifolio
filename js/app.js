/* const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersection) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
 */

/* const lastOne = document.querySelector(".section-next");
const myObserver = new IntersectionObserver((entries) => {
    console.log(entries);
});

myObserver.observe(lastOne); */

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

window.addEventListener("scroll", function () {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition < lastScrollPosition) {
        header.style.marginTop = "0px";
    } else {
        header.style.marginTop = "-100px";
    }

    lastScrollPosition = currentScrollPosition;
});
