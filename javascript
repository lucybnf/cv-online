// Script para menú desplegable
document.querySelectorAll("nav ul li").forEach(function(item) {
    item.addEventListener("mouseenter", function() {
        const subMenu = item.querySelector("ul");
        if (subMenu) {
            subMenu.style.display = "block";
        }
    });

    item.addEventListener("mouseleave", function() {
        const subMenu = item.querySelector("ul");
        if (subMenu) {
            subMenu.style.display = "none";
        }
    });
});
