// AUTRE
const inputFieldAutrPLogement = document.getElementById("input-tags-autre-partie-logement");
const tagsContainerAutrePLogement = document.getElementById("tags-container-autre-partie-logement");

function addTagAutrePLogement(textAutre) {
    textAutre = textAutre.trim();
    if (textAutre === "" || isDuplicate(textAutre)) return; // Empêche les doublons et les entrées vides

    const tagAutre = document.createElement("p");
    tagAutre.classList.add("tagAutre");
    tagAutre.innerHTML = `${textAutre} <i class="close">&times;</i>`;

    // Supprimer le tagAutre au clic sur "X"
    tagAutre.querySelector(".close").addEventListener("click", function () {
        tagAutre.remove();
    });

    tagsContainerAutrePLogement.appendChild(tagAutre);
    inputFieldAutrPLogement.value = ""; // Efface l'input après l'ajout
}

function isDuplicate(textAutre) {
    const tagsAutre = document.querySelectorAll(".tagAutre");
    return [...tagsAutre].some(tag => tag.textContent.trim() === textAutre);
}

// Ajouter via la touche Enter
inputFieldAutrPLogement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêche le saut de ligne
        addTagAutrePLogement(inputFieldAutrPLogement.value);
    }
});



// ELEMENT 
const inputFieldElement = document.getElementById("input-tags-element");
const tagsContainerElement = document.getElementById("tags-container-element");

function addTagElement(textElement) {
    textElement = textElement.trim();
    if (textElement === "" || isDuplicate(textElement)) return; // Empêche les doublons et les entrées vides

    const tagElement = document.createElement("p");
    tagElement.classList.add("tagElement");
    tagElement.innerHTML = `${textElement} <i class="close">&times;</i>`;

    // Supprimer le tagElement au clic sur "X"
    tagElement.querySelector(".close").addEventListener("click", function () {
        tagElement.remove();
    });

    tagsContainerElement.appendChild(tagElement);
    inputFieldElement.value = ""; // Efface l'input après l'ajout
}

function isDuplicate(textElement) {
    const tagsElement = document.querySelectorAll(".tagElement");
    return [...tagsElement].some(tag => tag.textContent.trim() === textElement);
}

// Ajouter via la touche Enter
inputFieldElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêche le saut de ligne
        addTagElement(inputFieldElement.value);
    }
});


// ADD TAG
const inputField = document.getElementById("input-tags");
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




// EQUIPEMENT 
const inputFieldEquipement = document.getElementById("input-equipement");
const tagsContainerEquipement = document.getElementById("tags-container-equipement");

function addTagEquipement(textEquipement) {
    textEquipement = textEquipement.trim();
    if (textEquipement === "" || isDuplicate(textEquipement)) return; // Empêche les doublons et les entrées vides

    const tagEquipement = document.createElement("p");
    tagEquipement.classList.add("tagEquipement");
    tagEquipement.innerHTML = `${textEquipement} <i class="close">&times;</i>`;

    // Supprimer le tagEquipement au clic sur "X"
    tagEquipement.querySelector(".close").addEventListener("click", function () {
        tagEquipement.remove();
    });

    tagsContainerEquipement.appendChild(tagEquipement);
    inputFieldEquipement.value = ""; // Efface l'input après l'ajout
}

function isDuplicate(textEquipement) {
    const tagsEquipement = document.querySelectorAll(".tagEquipement");
    return [...tagsEquipement].some(tag => tag.textContent.trim() === textEquipement);
}

// Ajouter via la touche Enter
inputFieldEquipement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêche le saut de ligne
        addTagEquipement(inputFieldEquipement.value);
    }
});




// DESIGNATION 
const inputFieldDesignation = document.getElementById("input-designation");
const tagsContainerDesignation = document.getElementById("tags-container-designation");

function addTagDesignation(textDesignation) {
    textDesignation = textDesignation.trim();
    if (textDesignation === "" || isDuplicate(textDesignation)) return; // Empêche les doublons et les entrées vides

    const tagDesignation = document.createElement("p");
    tagDesignation.classList.add("tagDesignation");
    tagDesignation.innerHTML = `${textDesignation} <i class="close">&times;</i>`;

    // Supprimer le tagDesignation au clic sur "X"
    tagDesignation.querySelector(".close").addEventListener("click", function () {
        tagDesignation.remove();
    });

    tagsContainerDesignation.appendChild(tagDesignation);
    inputFieldDesignation.value = ""; // Efface l'input après l'ajout
}

function isDuplicate(textDesignation) {
    const tagsDesignation = document.querySelectorAll(".tagDesignation");
    return [...tagsDesignation].some(tag => tag.textContent.trim() === textDesignation);
}

// Ajouter via la touche Enter
inputFieldDesignation.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.code === "Enter") {
        event.preventDefault(); // Empêche le saut de ligne
        addTagDesignation(inputFieldDesignation.value);
    }
console.log("Touche pressée :", event.key, " | Code :", event.code, " | KeyCode :", event.keyCode);
});

