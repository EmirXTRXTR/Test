document.addEventListener("keydown", function(event) {
    let selectedApp = document.querySelector(".selected");
    if (!selectedApp) return;

    switch (event.key) {
        case "ArrowRight":
            let nextElement = selectedApp.nextElementSibling;
            if (nextElement && nextElement.classList.contains("app")) {
                selectedApp.classList.remove("selected");
                nextElement.classList.add("selected");
            }
            break;

        case "ArrowLeft":
            let previousElement = selectedApp.previousElementSibling;
            if (previousElement && previousElement.classList.contains("app")) {
                selectedApp.classList.remove("selected");
                previousElement.classList.add("selected");
            }
            break;

        case "Enter":
            alert("Uygulama açıldı: " + selectedApp.textContent);
            break;
    }
});
