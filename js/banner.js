document.addEventListener("DOMContentLoaded", function() {
    // Lista de imágenes para el banner
    var images = ["/img/banner/imagen2.jpg", "/img/banner/imagen3.jpg" , "/img/banner/imagen1.jpg"];
    var currentImageIndex = 0;

    // Función para cambiar la imagen
    function changeImage() {
        document.getElementById("bannerImage").style.opacity = 0;

        setTimeout(function() {
            // Cambiar la imagen
            document.getElementById("bannerImage").src = images[currentImageIndex];
            
            // Incrementar el índice de la imagen actual
            currentImageIndex = (currentImageIndex + 1) % images.length;

            // Hacer visible la nueva imagen
            document.getElementById("bannerImage").style.opacity = 1;
        }, 1000); // 1000 milisegundos (1 segundo)
    }

    // Cambiar la imagen cada 5 segundos (5000 milisegundos)
    setInterval(changeImage, 2000);
});