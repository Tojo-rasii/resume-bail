
    const inputField = document.getElementById("input-tags");
    const okButton = document.getElementById("ok-btn");
    const tagsContainer = document.getElementById("tags-container");

    function addTag(text) {
        text = text.trim();
        if (text === "" || isDuplicate(text)) return; // Empêche les doublons et les entrées vides

        const tag = document.createElement("p");
        tag.classList.add("tag");
        tag.innerHTML = `${text} <i class="close">&times;</i>`;

        // Supprimer le tag au clic sur "X"
        tag.querySelector(".close").addEventListener("click", function () {
            tag.remove();
        });

        tagsContainer.appendChild(tag);
        inputField.value = ""; // Efface l'input après l'ajout
    }

    function isDuplicate(text) {
        const tags = document.querySelectorAll(".tag");
        return [...tags].some(tag => tag.textContent.trim() === text);
    }

    // Ajouter via la touche Enter
    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Empêche le saut de ligne
            addTag(inputField.value);
        }
    });
