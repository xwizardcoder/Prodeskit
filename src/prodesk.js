const html = document.documentElement;
const icon = document.getElementById("themeIcon");



function handlechange() {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
        icon.src = "./assets/light-mode.png";
        localStorage.setItem("theme", "dark");
    } else {
        icon.src = "./assets/dark-mode.png";
        localStorage.setItem("theme", "light");
    }
}
  function toggleMenu() {
            document.getElementById("menu").classList.toggle("hidden");
        }
