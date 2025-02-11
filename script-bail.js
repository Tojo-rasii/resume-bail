document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".aside-article-link-tabs-19 a");
    const sections = document.querySelectorAll("main article");

    function activateTab() {
        let scrollPosition = window.scrollY + 100; // Ajuste selon le besoin

        sections.forEach((section) => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                links.forEach((link) => link.classList.remove("active-bail-tabs"));
                document.querySelector(`.aside-article-link-tabs-19 a[href="#${section.id}"]`)?.classList.add("active-bail-tabs");
            }
        });
    }

    window.addEventListener("scroll", activateTab);

    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            if (targetSection) {
                let offset = 0; // Change cette valeur selon l'espacement à corriger

                // Si un header fixe existe, ajuste l'offset
                const header = document.querySelector("header"); // Remplace par ton sélecteur de header
                if (header) {
                    offset = header.offsetHeight;
                }

                window.scrollTo({
                    top: targetSection.offsetTop - offset,
                    behavior: "smooth",
                });

                // Correction du décalage après le scroll (optionnel)
                setTimeout(() => {
                    window.scrollTo({
                        top: targetSection.offsetTop - offset,
                        behavior: "instant",
                    });
                }, 300);
            }
        });
    });
});



document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
})

// CALENDAR
document.addEventListener("DOMContentLoaded", function () {
    flatpickr("input[placeholder='15/01/2025']", {
        dateFormat: "d/m/Y", // Format jour/mois/année
        allowInput: true, // Permet de taper une date
    });
});



// tpggle affichage
function toggleLabel() {
    const label = document.querySelector('.label-texet-tabs-bail-19');
    const icon = document.querySelector('#icon');

    // Toggle visibility of the label
    if (label.style.display === "none") {
        label.style.display = "block";
    } else {
        label.style.display = "none";
    }

    // Toggle rotation of the icon
    icon.classList.toggle('rotate');
}
function toggleLabelLastArticle() {
    const labelLast = document.querySelector('.label-texte-tabs-bail-19');
    const iconLast = document.querySelector('#icon-last');

    // Toggle visibility of the label
    if (labelLast.style.display === "none") {
        labelLast.style.display = "block";
    } else {
        labelLast.style.display = "none";
    }

    // Toggle rotation of the icon
    iconLast.classList.toggle('rotate');
}
