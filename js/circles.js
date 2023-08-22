/* const colors = ["#0CF25D", "#02735E", "#038C3E"];
const numCircles = 5;

function createCircles() {
    for (let i = 0; i < numCircles; i++) {
        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.backgroundColor = colors[i % colors.length];
        document.body.appendChild(circle);
        animateCircle(circle);
    }
}

function animateCircle(circle) {
    const duration = Math.random() * 60 + 10;
    const startLeft = Math.random() * (window.innerWidth - 1000);
    const startTop = Math.random() * (window.innerHeight - 1000);
    const endLeft = Math.random() * (window.innerWidth - 1000);
    const endTop = Math.random() * (window.innerHeight - 1000);

    const maxCircleSize = Math.min(window.innerWidth, window.innerHeight);

    circle.style.width = `${Math.random() * maxCircleSize}px`;
    circle.style.height = circle.style.width;
    circle.style.left = `${
        Math.random() * (window.innerWidth - parseFloat(circle.style.width))
    }px`;
    circle.style.top = `${
        Math.random() * (window.innerHeight - parseFloat(circle.style.height))
    }px`;

    const animation = circle.animate(
        [
            { transform: `translate(${startLeft}px, ${startTop}px)` },
            { transform: `translate(${endLeft}px, ${endTop}px)` },
        ],
        {
            duration: duration * 400,
            iterations: Infinity,
            easing: "linear",
        }
    );

    animation.onfinish = () => {
        circle.style.left = `${
            Math.random() * (window.innerWidth - parseFloat(circle.style.width))
        }px`;
        circle.style.top = `${
            Math.random() *
            (window.innerHeight - parseFloat(circle.style.height))
        }px`;
        animation.currentTime = 0;
    };
}

createCircles();
 */