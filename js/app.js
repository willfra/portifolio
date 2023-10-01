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

const blurElement = document.getElementById('spotlight');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX + window.scrollX;
    const mouseY = e.clientY + window.scrollY;

    blurElement.style.left = mouseX - blurElement.clientWidth / 2 + 'px';
    blurElement.style.top = mouseY - blurElement.clientHeight / 2 + 'px';
});