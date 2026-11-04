const headerImg = document.querySelector('.header-img');
const mainWrapper = document.querySelector('.main-wrapper');

// Calibrado para completar el efecto en 3 scrolls (~300px)
const maxScroll = 300;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    const progress = Math.min(currentScroll / maxScroll, 1);

    // Desvanecimiento suave al 3er scroll
    headerImg.style.opacity = 1 - progress;

    // La imagen sube despacio de fondo
    headerImg.style.transform = `translateY(-${currentScroll * 0.2}px)`;

    // Todo el bloque (logo + switch + botones) sube sincronizado
    const scrollMultiplier = 0.10;
    const contentOffset = currentScroll * scrollMultiplier;
    mainWrapper.style.transform = `translateY(${contentOffset}px)`;
});





const tabSwitch = document.querySelector('.tab-switch');
const btnLinks = document.getElementById('btn-links');
const btnShop = document.getElementById('btn-shop');
const sectionLinks = document.getElementById('section-links');
const sectionShop = document.getElementById('section-shop');

// Estado inicial garantizado: Links visible, Shop oculto
tabSwitch.classList.remove('shop-active');
btnLinks.classList.add('active');
btnShop.classList.remove('active');

sectionLinks.className = 'tab-content active';
sectionShop.className = 'tab-content';

// Clic en Links
btnLinks.addEventListener('click', () => {
    if (btnLinks.classList.contains('active')) return;

    // Actualizar botones y pastilla
    tabSwitch.classList.remove('shop-active');
    btnLinks.classList.add('active');
    btnShop.classList.remove('active');

    // 1. Shop sale hacia la derecha
    sectionShop.className = 'tab-content active exit-to-right';

    setTimeout(() => {
        sectionShop.className = 'tab-content'; // Ocultar Shop

        // 2. Links se prepara a la izquierda y entra al centro
        sectionLinks.className = 'tab-content enter-from-left';
        void sectionLinks.offsetWidth; // Forzar repintado
        sectionLinks.className = 'tab-content active';
    }, 200);
});

// Clic en Shop
btnShop.addEventListener('click', () => {
    if (btnShop.classList.contains('active')) return;

    // Actualizar botones y pastilla
    tabSwitch.classList.add('shop-active');
    btnShop.classList.add('active');
    btnLinks.classList.remove('active');

    // 1. Links sale hacia la izquierda
    sectionLinks.className = 'tab-content active exit-to-left';

    setTimeout(() => {
        sectionLinks.className = 'tab-content'; // Ocultar Links

        // 2. Shop se prepara a la derecha y entra al centro
        sectionShop.className = 'tab-content enter-from-right';
        void sectionShop.offsetWidth; // Forzar repintado
        sectionShop.className = 'tab-content active';
    }, 200);
});