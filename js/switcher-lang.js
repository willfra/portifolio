const brButton = document.getElementById("br-button");
const usButton = document.getElementById("us-button");

brButton.addEventListener("click", () => {
    document.querySelectorAll(".br-text").forEach(element => element.style.display = "block");
    document.querySelectorAll(".us-text").forEach(element => element.style.display = "none");
});

usButton.addEventListener("click", () => {
    document.querySelectorAll(".br-text").forEach(element => element.style.display = "none");
    document.querySelectorAll(".us-text").forEach(element => element.style.display = "block");
});
