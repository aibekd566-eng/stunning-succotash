// Furniture PRO — Enhanced with Reviews, i18n, Theme Toggle
// ========================================

// Translation dictionary
const translations = {
    ru: {
        nav_catalog: 'Каталог',
        nav_about: 'О нас',
        nav_advantages: 'Преимущества',
        nav_reviews: 'Отзывы',
        nav_payment: 'Оплата',
        hero_future: 'FUTURE',
        hero_of: 'OF',
        hero_furniture: 'FURNITURE',
        hero_subtitle: 'Премиальная мебель для тех, кто ценит стиль и комфорт',
        hero_cta: 'Смотреть коллекцию',
        stat_years: 'лет на рынке',
        stat_clients: 'довольных клиентов',
        stat_quality: 'качество',
        about_title: 'О НАС',
        about_text1: 'Furniture PRO — это целая экосистема современного подхода к мебели с внутренним комьюнити, собственным стилем и философией.',
        about_text2: 'Мы создаем мебель, которая не просто заполняет пространство — она трансформирует вашу жизнь. Каждый предмет разработан с учетом эргономики, эстетики и долговечности.',
        about_text3: 'Хотите обновить интерьер с премиальным качеством? Мы предлагаем индивидуальный подход, 3D-визуализацию и доставку по всей стране.',
        catalog_title: 'КАТАЛОГ',
        catalog_subtitle: 'Выберите идеальную мебель для вашего пространства',
        advantages_title: 'ПРЕИМУЩЕСТВА',
        adv_materials: 'Премиальные материалы',
        adv_materials_desc: 'Натуральное дерево, итальянская кожа, немецкая фурнитура',
        adv_design: 'Индивидуальный дизайн',
        adv_design_desc: 'Разработаем мебель по вашим эскизам и размерам',
        adv_warranty: 'Гарантия 5 лет',
        adv_warranty_desc: 'Полное гарантийное и постгарантийное обслуживание',
        reviews_title: 'ОТЗЫВЫ',
        reviews_subtitle: 'Что говорят наши клиенты',
        payment_title: 'СПОСОБЫ ОПЛАТЫ',
        payment_subtitle: 'Выберите удобный способ оплаты',
        pay_card: 'Банковская карта',
        pay_sbp: 'СБП',
        pay_sbp_desc: 'Система быстрых платежей',
        pay_cash: 'Наличные',
        pay_cash_desc: 'При получении',
        pay_installment: 'Рассрочка',
        pay_installment_desc: '0% на 6 месяцев',
        inst_subtitle: 'Следите за нами в Instagram',
        inst_follow: 'Подписаться',
        cta_title: 'Мы не просто продаём мебель',
        cta_subtitle: 'мы создаём пространство для жизни',
        cta_btn: 'Выбрать мебель',
        footer_desc: 'Премиальная мебель для вашего дома',
        footer_rights: 'Все права защищены',
        cart_title: 'Корзина',
        cart_total: 'Итого:',
        cart_checkout: 'Оформить заказ',
        chat_title: 'AI Помощник',
        chat_placeholder: 'Спросите о мебели...',
        cart_empty: 'Корзина пуста',
        order_thanks: 'Спасибо за покупку!',
        order_sum: 'Сумма'
    },
    en: {
        nav_catalog: 'Catalog',
        nav_about: 'About',
        nav_advantages: 'Advantages',
        nav_reviews: 'Reviews',
        nav_payment: 'Payment',
        hero_future: 'FUTURE',
        hero_of: 'OF',
        hero_furniture: 'FURNITURE',
        hero_subtitle: 'Premium furniture for those who value style and comfort',
        hero_cta: 'View Collection',
        stat_years: 'years on market',
        stat_clients: 'happy clients',
        stat_quality: 'quality',
        about_title: 'ABOUT US',
        about_text1: 'Furniture PRO is a complete ecosystem of modern approach to furniture with internal community, own style and philosophy.',
        about_text2: 'We create furniture that does not just fill space — it transforms your life. Each piece is designed with ergonomics, aesthetics and durability in mind.',
        about_text3: 'Want to update your interior with premium quality? We offer individual approach, 3D visualization and nationwide delivery.',
        catalog_title: 'CATALOG',
        catalog_subtitle: 'Choose perfect furniture for your space',
        advantages_title: 'ADVANTAGES',
        adv_materials: 'Premium Materials',
        adv_materials_desc: 'Natural wood, Italian leather, German hardware',
        adv_design: 'Custom Design',
        adv_design_desc: 'We will design furniture according to your sketches and sizes',
        adv_warranty: '5 Year Warranty',
        adv_warranty_desc: 'Full warranty and post-warranty service',
        reviews_title: 'REVIEWS',
        reviews_subtitle: 'What our clients say',
        payment_title: 'PAYMENT METHODS',
        payment_subtitle: 'Choose convenient payment method',
        pay_card: 'Bank Card',
        pay_sbp: 'SBP',
        pay_sbp_desc: 'Fast Payment System',
        pay_cash: 'Cash',
        pay_cash_desc: 'On delivery',
        pay_installment: 'Installment',
        pay_installment_desc: '0% for 6 months',
        inst_subtitle: 'Follow us on Instagram',
        inst_follow: 'Follow',
        cta_title: 'We do not just sell furniture',
        cta_subtitle: 'we create space for living',
        cta_btn: 'Choose Furniture',
        footer_desc: 'Premium furniture for your home',
        footer_rights: 'All rights reserved',
        cart_title: 'Cart',
        cart_total: 'Total:',
        cart_checkout: 'Checkout',
        chat_title: 'AI Assistant',
        chat_placeholder: 'Ask about furniture...',
        cart_empty: 'Cart is empty',
        order_thanks: 'Thank you for your purchase!',
        order_sum: 'Total'
    }
};

// Product data with more furniture items
const products = [
    {
        id: 1,
        name: "Кресло Cloud Comfort",
        nameEn: "Cloud Comfort Armchair",
        price: 45900,
        desc: "Эргономичное кресло с регулируемой спинкой",
        descEn: "Ergonomic armchair with adjustable back",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Диван Luna Premium",
        nameEn: "Luna Premium Sofa",
        price: 129000,
        desc: "Премиальный диван из итальянской кожи",
        descEn: "Premium Italian leather sofa",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Стол Orion Glass",
        nameEn: "Orion Glass Table",
        price: 38900,
        desc: "Стеклянный стол с хромированными ножками",
        descEn: "Glass table with chrome legs",
        image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Кровать Dream Elite",
        nameEn: "Dream Elite Bed",
        price: 89000,
        desc: "Двуспальная кровать с подсветкой",
        descEn: "Double bed with LED lighting",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Шкаф Minimal Pro",
        nameEn: "Minimal Pro Wardrobe",
        price: 67900,
        desc: "Встроенный шкаф-купе с зеркалом",
        descEn: "Built-in sliding wardrobe with mirror",
        image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Пуф Ottoman Lux",
        nameEn: "Ottoman Lux Pouf",
        price: 15900,
        desc: "Бархатный пуф с золотыми ножками",
        descEn: "Velvet pouf with gold legs",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "Стул Elegance",
        nameEn: "Elegance Chair",
        price: 12900,
        desc: "Обеденный стул из массива дуба",
        descEn: "Oak wood dining chair",
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Тумба Nightstand",
        nameEn: "Nightstand",
        price: 8900,
        desc: "Прикроватная тумба с ящиками",
        descEn: "Bedside table with drawers",
        image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        name: "Зеркало Mirror Pro",
        nameEn: "Mirror Pro",
        price: 15900,
        desc: "Напольное зеркало в раме",
        descEn: "Full-length mirror with frame",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80"
    }
];

// Reviews data
const reviews = [
    {
        id: 1,
        name: "Анна М.",
        nameEn: "Anna M.",
        role: "Дизайнер интерьера",
        roleEn: "Interior Designer",
        text: "Отличное качество мебели! Диван превзошел все ожидания. Доставка быстрая, сборка профессиональная. Рекомендую!",
        textEn: "Excellent furniture quality! The sofa exceeded all expectations. Fast delivery, professional assembly. Highly recommend!",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 2,
        name: "Михаил К.",
        nameEn: "Michael K.",
        role: "Владелец бизнеса",
        roleEn: "Business Owner",
        text: "Заказывал мебель для офиса. Все выполнено в срок, качество на высоте. Особенно понравилась индивидуальная доработка под наши размеры.",
        textEn: "Ordered furniture for the office. Everything done on time, top quality. Especially liked the custom sizing.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 3,
        name: "Елена В.",
        nameEn: "Elena V.",
        role: "Домохозяйка",
        roleEn: "Homemaker",
        text: "Кровать просто мечта! Подсветка создает невероятную атмосферу в спальне. Спасибо за внимание к деталям.",
        textEn: "The bed is a dream! The lighting creates an incredible atmosphere in the bedroom. Thanks for attention to details.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
        rating: 5
    }
];

// Instagram photos
const instagramPhotos = [
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=400&q=80"
];

// State
let cart = [];
let currentLang = 'ru';
let currentTheme = 'dark';
let currentReview = 0;

// Initialize
function init() {
    renderProducts();
    renderReviews();
    renderInstagram();
    updateCartCount();
    addBotMessage(currentLang === 'ru' ? 'Здравствуйте! Я AI-консультант Furniture PRO. Чем могу помочь?' : 'Hello! I am Furniture PRO AI assistant. How can I help you?');
    startReviewAutoPlay();
}

// Theme toggle
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    document.getElementById('themeIcon').className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// Language toggle
function toggleLang() {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    document.body.setAttribute('data-lang', currentLang);
    document.getElementById('langBtn').textContent = currentLang === 'ru' ? 'EN' : 'RU';

    // Update all text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    // Re-render products and reviews with new language
    renderProducts();
    renderReviews();
    updateCartModal();
}

// Render products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${currentLang === 'ru' ? product.name : product.nameEn}" class="product-card__image">
            <div class="product-card__content">
                <h3 class="product-card__title">${currentLang === 'ru' ? product.name : product.nameEn}</h3>
                <div class="product-card__price">${product.price.toLocaleString()} ₽</div>
                <p class="product-card__desc">${currentLang === 'ru' ? product.desc : product.descEn}</p>
                <button class="product-card__btn" onclick="addToCart(${product.id})">${currentLang === 'ru' ? 'В корзину' : 'Add to Cart'}</button>
            </div>
        </div>
    `).join('');
}

// Render reviews
function renderReviews() {
    const track = document.getElementById('reviewsTrack');
    const dots = document.getElementById('reviewsDots');

    track.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-card__stars">${'★'.repeat(review.rating)}</div>
            <p class="review-card__text">${currentLang === 'ru' ? review.text : review.textEn}</p>
            <div class="review-card__author">
                <img src="${review.avatar}" alt="${currentLang === 'ru' ? review.name : review.nameEn}" class="review-card__avatar">
                <div>
                    <div class="review-card__name">${currentLang === 'ru' ? review.name : review.nameEn}</div>
                    <div class="review-card__role">${currentLang === 'ru' ? review.role : review.roleEn}</div>
                </div>
            </div>
        </div>
    `).join('');

    dots.innerHTML = reviews.map((_, i) => `
        <div class="reviews__dot ${i === 0 ? 'active' : ''}" onclick="goToReview(${i})"></div>
    `).join('');
}

// Render Instagram
function renderInstagram() {
    const grid = document.getElementById('instagramGrid');
    grid.innerHTML = instagramPhotos.map(photo => `
        <div class="instagram__item">
            <img src="${photo}" alt="Instagram">
            <div class="instagram__overlay">
                <i class="fab fa-instagram"></i>
            </div>
        </div>
    `).join('');
}

// Review slider functions
function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    updateReviewSlider();
}

function prevReview() {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    updateReviewSlider();
}

function goToReview(index) {
    currentReview = index;
    updateReviewSlider();
}

function updateReviewSlider() {
    const track = document.getElementById('reviewsTrack');
    track.style.transform = `translateX(-${currentReview * 100}%)`;

    document.querySelectorAll('.reviews__dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentReview);
    });
}

function startReviewAutoPlay() {
    setInterval(nextReview, 5000);
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    updateCartModal();

    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓';
    setTimeout(() => btn.textContent = originalText, 1500);
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
    updateCartModal();
}

function updateCartModal() {
    const itemsContainer = document.getElementById('cartItems');
    const totalElement = document.getElementById('cartTotal');

    if (cart.length === 0) {
        itemsContainer.innerHTML = `<p style="color: var(--text-secondary); text-align: center;">${translations[currentLang].cart_empty}</p>`;
        totalElement.textContent = '0 ₽';
        return;
    }

    itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <div style="font-weight: 600;">${currentLang === 'ru' ? item.name : item.nameEn}</div>
                <div style="color: var(--text-secondary); font-size: 14px;">${item.quantity} ${currentLang === 'ru' ? 'шт.' : 'pcs'}</div>
            </div>
            <div style="font-weight: 700;">${(item.price * item.quantity).toLocaleString()} ₽</div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalElement.textContent = total.toLocaleString() + ' ₽';
}

function checkout() {
    if (cart.length === 0) {
        alert(translations[currentLang].cart_empty);
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(translations[currentLang].order_thanks + '\n' + translations[currentLang].order_sum + ': ' + total.toLocaleString() + ' ₽');
    cart = [];
    updateCartCount();
    updateCartModal();
    toggleCart();
}

// Chat functions
function toggleChat() {
    const chat = document.getElementById('chat');
    chat.classList.toggle('minimized');
    document.getElementById('chatToggle').textContent = chat.classList.contains('minimized') ? '+' : '−';
}

function addBotMessage(text) {
    const messages = document.getElementById('chatMessages');
    const message = document.createElement('div');
    message.className = 'chat__message bot';
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}

function addUserMessage(text) {
    const messages = document.getElementById('chatMessages');
    const message = document.createElement('div');
    message.className = 'chat__message user';
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const text = input.value.trim();

    if (!text) return;

    addUserMessage(text);
    input.value = '';

    setTimeout(() => {
        const responses = currentLang === 'ru' ? [
            'Отличный выбор! Этот товар есть в наличии.',
            'Мы можем доставить заказ в течение 3-5 дней.',
            'У нас действует гарантия 5 лет на всю мебель.',
            'Хотите, я подберу похожие товары?',
            'Сейчас у нас скидка 15% на первый заказ!'
        ] : [
            'Great choice! This item is in stock.',
            'We can deliver within 3-5 days.',
            'We offer 5 year warranty on all furniture.',
            'Would you like me to suggest similar items?',
            'We currently have 15% off on first orders!'
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addBotMessage(randomResponse);
    }, 1000);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});