// Aguarda o documento carregar para rodar o script
document.addEventListener('DOMContentLoaded', function() {
    
    //
    // --- LÓGICA DO CARROSSEL PRINCIPAL (COM AUTO-PLAY) ---
    //
    const mainSlides = document.querySelectorAll('.carousel-slide');
    const mainPrevBtn = document.querySelector('.carousel-control.prev');
    const mainNextBtn = document.querySelector('.carousel-control.next');
    
    let mainCurrentSlide = 0;
    let carouselInterval; // Variável para guardar o timer

    // Função para mostrar o slide principal
    function showMainSlide(index, resetTimer = true) {
        mainSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        if (index >= mainSlides.length) {
            mainCurrentSlide = 0; // Volta ao início
        } else if (index < 0) {
            mainCurrentSlide = mainSlides.length - 1; // Vai para o fim
        } else {
            mainCurrentSlide = index;
        }

        mainSlides[mainCurrentSlide].classList.add('active');
        
        // Se a função foi chamada por um clique humano, reinicia o timer
        if (resetTimer) {
            resetCarouselInterval();
        }
    }

    // Função para avançar o slide automaticamente
    function autoAdvanceSlide() {
        // Chama showMainSlide sem reiniciar o timer
        showMainSlide(mainCurrentSlide + 1, false);
    }

    // Função para iniciar o auto-play
    function startCarouselAutoPlay() {
        // Define um intervalo para chamar autoAdvanceSlide a cada 5 segundos (5000 milissegundos)
        carouselInterval = setInterval(autoAdvanceSlide, 5000); 
    }

    // Função para parar e reiniciar o timer (usada em cliques manuais)
    function resetCarouselInterval() {
        clearInterval(carouselInterval); // Limpa o timer antigo
        startCarouselAutoPlay(); // Inicia um novo timer
    }

    // Event Listeners dos botões principais
    mainNextBtn.addEventListener('click', function() {
        showMainSlide(mainCurrentSlide + 1, true); // true = foi clique, resetar timer
    });

    mainPrevBtn.addEventListener('click', function() {
        showMainSlide(mainCurrentSlide - 1, true); // true = foi clique, resetar timer
    });

    // Inicia o carrossel no primeiro slide e liga o auto-play
    showMainSlide(mainCurrentSlide, false);
    startCarouselAutoPlay();


    //
    // --- LÓGICA DO MODAL (POP-UP) DE PRODUTOS ---
    //

    // Referências aos elementos do Modal
    const modal = document.getElementById('product-modal');
    const modalName = document.getElementById('modal-product-name');
    const modalPrice = document.getElementById('modal-product-price');
    const modalImageContainer = document.getElementById('modal-image-container');
    const modalPrevBtn = document.querySelector('.modal-control.prev');
    const modalNextBtn = document.querySelector('.modal-control.next');
    const closeButton = document.querySelector('.modal-close-button');

    let modalImages = [];
    let modalCurrentIndex = 0;

    // Pega TODOS os cards de produto da página
    const productCards = document.querySelectorAll('.product-card');

    // Adiciona um evento de clique em CADA card
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            // Pega os dados que guardamos no HTML (data-name, data-price, data-images)
            const name = card.dataset.name;
            const price = card.dataset.price;
            const images = JSON.parse(card.dataset.images); // Converte a string de volta para um array
            
            // Abre o modal com essas informações
            openProductModal(name, price, images);
        });
    });

    // Função que preenche e abre o modal
    function openProductModal(name, price, images) {
        modalName.textContent = name;
        modalPrice.textContent = `R$ ${price}`;
        
        // Limpa as imagens do clique anterior
        modalImageContainer.innerHTML = '';
        modalImages = images;
        modalCurrentIndex = 0;

        // Cria os novos slides para o carrossel do modal
        modalImages.forEach((url, index) => {
            const slide = document.createElement('div');
            slide.className = 'modal-slide';
            if (index === 0) {
                slide.classList.add('active'); // Ativa o primeiro
            }
            slide.innerHTML = `<img src="${url}" alt="${name} - foto ${index + 1}">`;
            modalImageContainer.appendChild(slide);
        });

        // Mostra o modal
        modal.style.display = 'flex';
    }

    // Função para fechar o modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Função para navegar no carrossel do modal
    function showModalSlide(index) {
        const slides = modalImageContainer.querySelectorAll('.modal-slide');
        slides.forEach(slide => slide.classList.remove('active'));

        if (index >= slides.length) {
            modalCurrentIndex = 0;
        } else if (index < 0) {
            modalCurrentIndex = slides.length - 1;
        } else {
            modalCurrentIndex = index;
        }
        
        slides[modalCurrentIndex].classList.add('active');
    }

    // Event Listeners dos controles do Modal
    closeButton.addEventListener('click', closeModal);
    modalPrevBtn.addEventListener('click', () => showModalSlide(modalCurrentIndex - 1));
    modalNextBtn.addEventListener('click', () => showModalSlide(modalCurrentIndex + 1));
    
    // Fecha o modal se clicar no fundo escuro
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});