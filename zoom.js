document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const closeButton = document.getElementById("modal-close");

    const imageButtons = document.querySelectorAll(".image-button");

    /*
     * Abrir imagen
     */
    imageButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const imageSource = button.getAttribute("data-image");

            if (!imageSource) {
                return;
            }

            modalImage.src = imageSource;
            modal.classList.add("active");
            modal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        });
    });

    /*
     * Cerrar modal
     */
    function closeModal() {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";

        // Limpiamos la imagen después de cerrar
        setTimeout(function () {
            modalImage.src = "";
        }, 200);
    }

    /*
     * Botón X
     */
    closeButton.addEventListener("click", function () {
        closeModal();
    });

    /*
     * Clicar fuera de la imagen
     */
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    /*
     * Tecla ESC
     */
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            if (modal.classList.contains("active")) {
                closeModal();
            }
        }
    });

});