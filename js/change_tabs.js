// Intercambiar imagen principal al hacer click en thumbnail
function toExchangeImage(element) {
    const mainImg = document.getElementById("img_main");
    if (mainImg && element) {
        mainImg.src = element.src;
    }
}

// Abrir imagen en modal
function viewImage(src) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");

    if (modal && modalImg) {
        modalImg.src = src;
        modal.classList.remove("hidden");
    }
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById("image-modal");
    if (modal) {
        modal.classList.add("hidden");
    }
}

// Cerrar modal cuando se hace click fuera de la imagen
document.addEventListener("click", function (event) {
    const modal = document.getElementById("image-modal");
    if (modal && event.target === modal) {
        modal.classList.add("hidden");
    }
});

// Inicializar event listeners cuando el documento carga
document.addEventListener("DOMContentLoaded", function () {
    // Event listeners para tabs
    const productTab = document.getElementById("product-tab");
    const imagesTab = document.getElementById("images-tab");

    if (productTab) {
        productTab.addEventListener("click", function () {
            // Cambiar estilos de tabs
            productTab.classList.add("bg-blue-600", "text-white");
            productTab.classList.remove("bg-gray-100", "text-gray-700");

            imagesTab.classList.remove("bg-blue-600", "text-white");
            imagesTab.classList.add("bg-gray-100", "text-gray-700");

            // Mostrar/ocultar contenido (si existe)
            const productContent = document.getElementById("product-content");
            const imagesContent = document.getElementById("images-content");

            if (productContent) productContent.style.display = "block";
            if (imagesContent) imagesContent.style.display = "none";
        });
    }

    if (imagesTab) {
        imagesTab.addEventListener("click", function () {
            // Cambiar estilos de tabs
            imagesTab.classList.add("bg-blue-600", "text-white");
            imagesTab.classList.remove("bg-gray-100", "text-gray-700");

            productTab.classList.remove("bg-blue-600", "text-white");
            productTab.classList.add("bg-gray-100", "text-gray-700");

            // Mostrar/ocultar contenido (si existe)
            const productContent = document.getElementById("product-content");
            const imagesContent = document.getElementById("images-content");

            if (productContent) productContent.style.display = "none";
            if (imagesContent) imagesContent.style.display = "block";
        });
    }
});