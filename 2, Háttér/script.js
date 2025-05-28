function createBackgroundDiv() {
    const div = document.createElement("div");
    div.style.width = "300px";
    div.style.height = "200px";
    div.style.backgroundImage = "url('original.jpg')"; // Alap háttérkép
    div.style.backgroundSize = "cover";
    div.style.cursor = "pointer";
    
    div.addEventListener("click", () => {
        div.style.backgroundImage = "url('temporary.jpg')"; // Kattintás utáni háttérkép
        setTimeout(() => {
            div.style.backgroundImage = "url('original.jpg')"; // Visszaáll az eredetire
        }, 2000);
    });

    return div;
}

// Hozzáadás a dokumentumhoz
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const newDiv = createBackgroundDiv();
    container.appendChild(newDiv);
});
