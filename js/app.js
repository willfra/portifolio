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

const blurElement = document.getElementById('spotlight');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX + window.scrollX;
    const mouseY = e.clientY + window.scrollY;

    blurElement.style.left = mouseX - blurElement.clientWidth / 2 + 'px';
    blurElement.style.top = mouseY - blurElement.clientHeight / 2 + 'px';
});

// Função para calcular a distância entre dois elementos
function calcularDistancia(element1, element2) {
    const rect1 = element1.getBoundingClientRect(); // Obtém as coordenadas do element1
    const rect2 = element2.getBoundingClientRect(); // Obtém as coordenadas do element2

    const bottom1 = rect1.bottom; // Coordenada bottom de element1
    const top2 = rect2.top; // Coordenada top de element2

    // Calcula a distância subtraindo o bottom de element1 do top de element2
    const distancia = top2 - bottom1;

    return distancia;
}


// Chame a função para calcular a distância entre os elementos
const cardPerfil = document.getElementById("card-perfil");
const iconTec = document.getElementById("icon-tec");

const distanciaEntreElementos = calcularDistancia(cardPerfil, iconTec);

// Atualize o tamanho da linha vertical de acordo com a distância
const linhaVertical = document.querySelector(".line-y");
linhaVertical.style.height = distanciaEntreElementos + "px";

const cardPerfilRect = cardPerfil.getBoundingClientRect();
const positionY = cardPerfilRect.bottom + window.scrollY;

linhaVertical.style.top = positionY - 20 + "px";

// alterar tamanho do conteudo das linhas

const lineBox = document.querySelector(".line-box");
const cardPerfilWidth = cardPerfil.offsetWidth;

lineBox.style.width = cardPerfilWidth + "px";


