const icon = document.querySelector("#theme");
const body = document.querySelector("body");
icon.addEventListener("click", function () {
if (icon.classList.contains("fa-sun-o")) {
    icon.classList.remove("fa-sun-o");
    icon.classList.add("fa-moon-o");
    body.dataset.theme = "dark";
} else {
    icon.classList.remove("fa-moon-o");
    icon.classList.add("fa-sun-o");
    body.dataset.theme = "light";
}
});
