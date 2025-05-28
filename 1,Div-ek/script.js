document.addEventListener("DOMContentLoaded", () => {
    const divs = document.querySelectorAll("body > div");

    if (divs.length === 5) {
        divs[0].textContent = "Első";
        divs[divs.length - 1].textContent = "Utolsó";
        divs[2].textContent = "Harmadik";

        divs.forEach((div, index) => {
            if (index !== 0 && index !== 2 && index !== divs.length - 1) {
                div.textContent = `Elem sorszáma a bodyban: ${index + 1}`;
            }
        });
    } else {
        console.error("Nem pontosan 5 div található az oldalon!");
    }
});
