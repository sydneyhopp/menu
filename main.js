const button = document.querySelector("#mode-button")
const changeMode = function () {
    var page = document.getElementById("page");
    page.classList.toggle("dark-mode");
}
button.addEventListener("click", changeMode)
