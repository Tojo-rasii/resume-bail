document.addEventListener("DOMContentLoaded", function () {
    const dropdownBail = document.getElementById("dropdown-bail");
    const input = document.getElementById("selected-option-bail");
    const options = dropdownBail.querySelectorAll("p");

    // Toggle dropdownBail on input click
    input.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownBail.style.display = dropdownBail.style.display === "block" ? "none" : "block";
    });

    // Select an option
    options.forEach(option => {
        option.addEventListener("click", function () {
            dropdownBail.style.display = "none";
            input.value = this.textContent;
        });
    });

    // Close dropdownBail when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdownBail.contains(event.target) && event.target !== input) {
            dropdownBail.style.display = "none";
        }
    });
});