// Aguarda o documento carregar para rodar o script
document.addEventListener('DOMContentLoaded', function() {
    
    // Lógica do Carrossel
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    
    let currentSlide = 0;

    // Função para mostrar o slide
    function showSlide(index) {
        // Esconde todos os slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove o loop (se o índice for maior que o número de slides)
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        // Mostra o slide atual
        slides[currentSlide].classList.add('active');
    }

    // Event Listeners (escuta os cliques nos botões)
    nextBtn.addEventListener('click', function() {
        showSlide(currentSlide + 1);
    });

    prevBtn.addEventListener('click', function() {
        showSlide(currentSlide - 1);
    });

    // Inicia o carrossel no primeiro slide
    showSlide(currentSlide);

});