document.addEventListener("DOMContentLoaded", function() {
    const inputFields = document.querySelectorAll("input, textarea");

    inputFields.forEach(inputField => {
        inputField.addEventListener("focus", function() {
            const label = this.nextElementSibling;
            label.style.top = "-10px";
            label.style.fontSize = "12px";
            label.style.color = "#ccc";
            label.style.background_color = "white";
        });

        inputField.addEventListener("blur", function() {
            if (this.value === "") {
                const label = this.nextElementSibling;
                label.style.top = "-10px";
            label.style.fontSize = "12px";
            label.style.color = "rgb(230, 46, 120)";
            label.style.background_color = "white";
            }
        });
    });
   
});