const deaths = [
    'Aplastado por una avalancha de globos de helio.',
    'Ahogado en una piscina de gelatina de fresa.',
    'Desintegrado por un rayo de confeti.',
    'Envenenado por una bebida de tierra y lombrices.',
    'Atropellado por una montaña de almohadas.',
    'Chocado por una tormenta de peluches.',
    'Aplastaado por una gigantesca torta de cumpleaños.',
    'Tragado por un volcán de chocolate.',
    'Atascado en un charco de chicle.',
    'Desintegrado por un rayo de crema batida.',
    'Ahogado en una bañera llena de burbujas.',
    'Aplastado por una ola de esponjas.',
    'Envenenado por un batido de ketchup y mostaza.',
    'Encerrado en una burbuja de chicle gigante.',
    'Deslizado y caído en un tobogán de caramelos.',
    'Atropellado por una avalancha de esferas de gel.',
    'Colisionado con un camión de algodón de azúcar.',
    'Desintegrado por una lluvia de serpientes de goma.',
    'Ahogado en una piscina de yogur griego.',
    'Chocado por una tormenta de gomitas.',
    'Aplastado por una pila de chicles.',
    'Atropellado por una avalancha de alfileres de papel.',
    'Envenenado por una sopa de chicles.',
    'Golpeado por una lluvia de pasteles.',
    'Atascado en una avalancha de pelotas de playa.',
    'Desintegrado por un rayo de confites.',
    'Ahogado en una piscina de nata.',
    'Atropellado por una avalancha de papas fritas.',
    'Desaparecido en una nube de polvo de talco.',
    'Encerrado en una burbuja de gelatina.',
    'Chocado por una tormenta de piñas.',
    'Atropellado por un carrito de palomitas de maíz.',
    'Aplastaado por una montaña de peluches de peluche.',
    'Desintegrado por un rayo de azúcar glas.',
    'Envenenado por un batido de pescado.',
    'Ahogado en una piscina de queso fundido.',
    'Golpeado por una avalancha de galletas.',
    'Chocado por una tormenta de espaguetis.',
    'Aplastado por una pila de revistas antiguas.',
    'Atropellado por una máquina de algodón de azúcar descontrolada.',
    'Envenenado por un batido de brotes de brócoli.',
    'Desintegrado por una lluvia de caramelos ácidos.',
    'Aplastado por una ola de gomitas.',
    'Chocado por una tormenta de plátanos.',
    'Tragado por una nube de crema batida.',
    'Ahogado en una bañera llena de caramelos.',
    'Aplastado por una avalancha de peluches gigantes.',
    'Desintegrado por un rayo de chicle.',
    'Envenenado por una sopa de sopa.',
    'Golpeado por una lluvia de espárragos.',
    'Atropellado por una avalancha de bolas de helado.',
    'Chocado por una tormenta de tortas de cumpleaños.',
    'Aplastaado por una marea de gomitas.',
    'Desintegrado por una lluvia de galletas de chocolate.',
    'Ahogado en una piscina de manteca de maní.',
    'Atropellado por una avalancha de galletas de la fortuna.',
    'Envenenado por una bebida de queso crema.',
    'Chocado por una tormenta de caramelos de menta.',
    'Aplastado por una pila de juguetes de plástico.',
    'Desaparecido en una nube de algodón de azúcar.',
    'Atropellado por una ola de patatas fritas.',
    'Ahogado en un lago de chocolate líquido.',
    'Chocado por una tormenta de pastelillos.',
    'Desintegrado por un rayo de jarabe de arce.',
    'Aplastaado por una avalancha de paletas.',
    'Envenenado por una bebida de salsa picante.',
    'Golpeado por una lluvia de orejas de conejo de peluche.',
    'Ahogado en una piscina de licor de cereza.',
    'Aplastado por una montaña de almohadas de felpa.',
    'Chocado por una tormenta de puré de papas.',
    'Atropellado por una avalancha de tortas de manzana.',
    'Desintegrado por un rayo de crema de cacahuate.',
    'Envenenado por un batido de calabacín.',
    'Ahogado en un charco de malvaviscos derretidos.',
    'Aplastado por una ola de palomitas de maíz.',
    'Chocado por una tormenta de caramelos de goma.',
    'Desintegrado por una lluvia de chicles de frutas.',
    'Envenenado por una bebida de aceitunas.',
    'Ahogado en una piscina de gelatina de limón.',
    'Aplastado por una avalancha de burritos.',
    'Chocado por una tormenta de malvaviscos.',
    'Desaparecido en una nube de azúcar impalpable.',
    'Aplastaado por una pila de bolsas de patatas fritas.',
    'Golpeado por una lluvia de crema de cacahuate.',
    'Atropellado por una máquina de chicles descontrolada.',
    'Ahogado en una piscina de batido de vainilla.',
    'Desintegrado por una avalancha de caramelos de menta.',
    'Envenenado por una bebida de melaza.',
    'Chocado por una tormenta de tiramisú.',
    'Aplastado por una marea de frutas confitadas.',
    'Desintegrado por un rayo de crema de queso.',
    'Ahogado en un lago de jarabe de arce.',
    'Aplastaado por una avalancha de helado de fresa.',
    'Envenenado por una bebida de cebolla.',
    'Golpeado por una lluvia de popurrí.',
    'Atropellado por una avalancha de bagels.',
    'Chocado por una tormenta de mantequilla de maní.',
    'Desaparecido en una nube de polvo de repostería.',
    'Aplastado por una ola de crepes.',
    'Envenenado por una bebida de salsa barbacoa.'
];

// Objeto para almacenar la configuración
const config = {
    theme: 'light',
    fontSize: 'normal',
    animationSpeed: 1,
    ratingStyle: 'skull',
    sound: false,
    emojiAmount: 50
};

function loadConfig() {
    const savedConfig = localStorage.getItem('siteConfig');
    if (savedConfig) {
        Object.assign(config, JSON.parse(savedConfig));
    }
    applyConfig(); // Aplicar la configuración cargada
}

function saveConfig() {
    localStorage.setItem('siteConfig', JSON.stringify(config));
}

function applyConfig() {
    // Aplicar tema
    document.documentElement.setAttribute('data-theme', config.theme);
    
    // Actualizar el icono del botón de tema
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.className = config.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    // Aplicar tamaño de fuente
    document.body.style.fontSize = {
        small: '0.9rem',
        normal: '1rem',
        large: '1.1rem'
    }[config.fontSize];

    // Aplicar velocidad de animación
    document.documentElement.style.setProperty('--animation-speed', config.animationSpeed);

    // Aplicar estilo de calificación
    updateRatingSymbols();

    // Actualizar el valor del slider de emojis
    const emojiInput = document.getElementById('emojiAcount');
    const emojiValue = document.getElementById('emojiAmountValue');
    if (emojiInput && emojiValue) {
        emojiInput.value = config.emojiAmount;
        emojiValue.textContent = config.emojiAmount;
    }

    saveConfig(); // Guardar la configuración
}

// Función para alternar el tema
function toggleTheme() {
    config.theme = config.theme === 'light' ? 'dark' : 'light';
    applyConfig();
}

// Cambiar tamaño de fuente
function changeFontSize(size) {
    config.fontSize = size;
    applyConfig();
}

// Cambiar velocidad de animación
function changeAnimationSpeed() {
    const speed = document.getElementById('animationSpeed').value;
    config.animationSpeed = parseFloat(speed);
    applyConfig();
}

// Cambiar estilo de calificación
function changeRatingStyle() {
    config.ratingStyle = document.getElementById('ratingStyle').value;
    applyConfig();
}

// Actualizar símbolos de calificación
function updateRatingSymbols() {
    const symbols = {
        skull: '💀',
        star: '⭐',
        ghost: '👻',
        pumpkin: '🎃'
    };
    const ratingElements = document.querySelectorAll('.skull-rating');
    ratingElements.forEach(el => {
        el.textContent = symbols[config.ratingStyle];
    });
}

// Actualizar cantidad de emojis
function updateEmojiAccount() {
    const amount = document.getElementById('emojiAcount').value;
    config.emojiAmount = parseInt(amount);
    document.getElementById('emojiAmountValue').textContent = amount;
    saveConfig();
}

function resetConfig() {
    const currentTheme = config.theme; // Guardar el tema actual
    Object.assign(config, {
        fontSize: 'normal',
        animationSpeed: 1,
        ratingStyle: 'skull',
        sound: false,
        emojiAmount: 50,
        theme: currentTheme // Mantener el tema actual
    });
    applyConfig(); // Aplicar la configuración actualizada
}

function toggleConfig() {
    const configMenu = document.getElementById('configMenu');
    const configButton = document.querySelector('.config-button');
    
    if (configMenu.classList.contains('visible')) {
        configMenu.classList.remove('visible');
        configButton.style.transform = 'rotate(0deg)';
    } else {
        configMenu.classList.add('visible');
        configButton.style.transform = 'rotate(90deg)';
    }
}

// Cerrar el menú de configuración al hacer clic fuera
document.addEventListener('click', (e) => {
    const configMenu = document.getElementById('configMenu');
    const configButton = document.querySelector('.config-button');
    
    if (!configMenu.contains(e.target) && !configButton.contains(e.target) && configMenu.classList.contains('visible')) {
        configMenu.classList.remove('visible');
        configButton.style.transform = 'rotate(0deg)';
    }
});

// Objeto para almacenar calificaciones
const deathRatings = {};

// Objeto que mapea palabras clave con emojis relacionados
const emojiMap = {
    'globos': '🎈',
    'gelatina': '🍮',
    'fresa': '🍓',
    'confeti': '🎊',
    'tierra': '🌍',
    'lombrices': '🪱',
    'almohadas': '🛏️',
    'peluches': '🧸',
    'torta': '🎂',
    'chocolate': '🍫',
    'chicle': '🍬',
    'crema': '🧁',
    'burbujas': '🫧',
    'esponjas': '🧽',
    'ketchup': '🥫',
    'mostaza': '🌭',
    'caramelos': '🍭',
    'algodón': '☁️',
    'serpientes': '🐍',
    'yogur': '🥛',
    'gomitas': '🍬',
    'pasteles': '🥮',
    'pelotas': '⚽',
    'papas': '🍟',
    'talco': '❄️',
    'piñas': '🍍',
    'palomitas': '🍿',
    'azúcar': '🧂',
    'pescado': '🐟',
    'queso': '🧀',
    'galletas': '🍪',
    'espaguetis': '🍝',
    'revistas': '📚',
    'brócoli': '🥦',
    'plátanos': '🍌',
    'helado': '🍨',
    'manteca': '🧈',
    'menta': '🌿',
    'juguetes': '🎮',
    'nata': '🥛',
    'cereza': '🍒',
    'manzana': '🍎',
    'aceitunas': '🫒',
    'limón': '🍋',
    'burritos': '🌯',
    'malvaviscos': '🍡',
    'vainilla': '🍶',
    'cebolla': '🧅',
    'bagels': '🥯',
    'crepes': '🥞',
    'barbacoa': '🥩'
};

const ratingTexts = {
    1: "No muy absurda... bastante normal 🤔",
    2: "Algo absurda, pero he visto peores 😏",
    3: "¡Definitivamente absurda! 😅",
    4: "¡Muy absurda! ¡Me encanta! 🤪",
    5: "¡EXTREMADAMENTE ABSURDA! ¡INCREIBLE! 🤯"
};

// Funcion para emoji que cae
function createFallingEmoji(emoji) {
    const emojiElement = document.createElement('div')
    emojiElement.className = 'falling-emoji';
    emojiElement.textContent = emoji;

    // Posicion horizontal aleatoria
    emojiElement.style.left = `${Math.random() * 100}vw`;
    // Tamaño aleatorio entre 20px y 40px
    emojiElement.style.fontsize = `${Math.random() * 20 + 20}px`;
    // Rotacion aleatoria
    emojiElement.style.transform = `rotate(${Math.random() * 360}deg)`;
    // Velocidad de caida aleatoria
    emojiElement.style.animationDuration = `${Math.random() * 2 + 3}s`;


    document.body.appendChild(emojiElement);


    // Eliminar el emoji despues de que termine la animacion
    emojiElement.addEventListener('animationend', () => {
        emojiElement.remove();
    })
}

// Funcion para encontrar emojis relacionados con la muerte
function findRelatedEmojis(deathText) {
    const words = deathText.toLowerCase().split(' ');
    const relatedEmojis = new Set();

    words.forEach(word => {
        // Eliminar puntuacion
        const cleanWord = word.replace(/[.,]/g, '');
        if (emojiMap[cleanWord]) {
            relatedEmojis.add(emojiMap[cleanWord]);
        }
    });

    // Si no encuentra emojis relacionados, usar algunos por defecto
    if (relatedEmojis.size === 0) {
        relatedEmojis.add('💫');
        relatedEmojis.add('✨');
        relatedEmojis.add('🌟');
    }

    return Array.from(relatedEmojis);
}

// Modificar la función showRandomDeath para usar la configuración
function createEmojiShower(deathText) {
    const relatedEmojis = findRelatedEmojis(deathText);
    
    // Usar la cantidad configurada de emojis
    for (let i = 0; i < config.emojiAmount; i++) {
        setTimeout(() => {
            const randomEmoji = relatedEmojis[Math.floor(Math.random() * relatedEmojis.length)];
            createFallingEmoji(randomEmoji);
        }, i * (100 / config.animationSpeed)); // Ajustar velocidad según configuración
    }
}

// Función para inicializar el tema
function initializeTheme() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    
    // Verificar si el botón existe
    if (themeToggleBtn) {
        // Agregar evento de clic para alternar el tema
        themeToggleBtn.addEventListener('click', toggleTheme);
        
        // Actualizar el icono según el tema actual
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.className = config.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// Añadir la inicialización del tema al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadConfig();
    initializeTheme();
});

 // Crear iconos flotantes decorativos
function createFloatingIcons() {
    const icons = ['🎈', '🍬', '🧸', '🎂', '🍪', '🍭', '🎠'];
    const container = document.body;
    
    for(let i = 0; i < 15; i++) {
        const icon = document.createElement('div');
        icon.className = 'floating-icon';
        icon.textContent = icons[Math.floor(Math.random() * icons.length)];
        icon.style.left = `${Math.random() * 100}vw`;
        icon.style.top = `${Math.random() * 100}vh`;
        icon.style.animationDelay = `${Math.random() * 5}s`;
        icon.style.fontSize = `${Math.random() * 20 + 20}px`;
        icon.style.opacity = '0.2';
        container.appendChild(icon);
    }
}

let currentDeath = '';

function showRandomDeath() {
    const outputDiv = document.getElementById('output');
    const ratingContainer = document.getElementById('rating-container');
    const randomIndex = Math.floor(Math.random() * deaths.length);
    currentDeath = deaths[randomIndex];

    // Ocultar el contenedor de rating y reiniciar las estrellas
    ratingContainer.classList.add('hidden');
    resetRating();
    
    outputDiv.classList.remove('visible');
    
    setTimeout(() => {
        outputDiv.innerHTML = `
            <div class="death-text">
                <i class="fas fa-tombstone"></i>
                ${currentDeath}
            </div>
        `;
        outputDiv.classList.add('visible');

        // Iniciar la lluvia de emojis 
        createEmojiShower(currentDeath)

        // Mostrar el contenedor de rating despues de mostrar la muerte
        setTimeout(() => {
            ratingContainer.classList.remove('hidden');
            ratingContainer.classList.add('visible');
        }, 500);
    }, 300);
}

function resetRating() {
    const skulls = document.querySelectorAll('.skull-rating');
    skulls.forEach(skull => {
        skull.classList.remove('active');
    });
    document.getElementById('rating-text').textContent = '';
}

function initializeRating() {
    const skulls = document.querySelectorAll('.skull-rating');
    skulls.forEach(skull => {
        skull.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            updateRating(rating);
            saveRating(currentDeath, rating);
        });

        skull.addEventListener('mouseenter', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            previewRating(rating);
        });
    });

    const ratingContainer = document.querySelector('.rating-stars');
    ratingContainer.addEventListener('mouseleave', function() {
        if (!currentDeath || !deathRatings[currentDeath]) {
            resetRating();
        } else {
            updateRating(deathRatings[currentDeath]);
        }
    });
}

function previewRating(rating) {
    const skulls = document.querySelectorAll('.skull-rating');
    skulls.forEach((skull, index) => {
        skull.classList.toggle('active', index < rating);
    });
    document.getElementById('rating-text').textContent = ratingTexts[rating];
}

function updateRating(rating) {
    const skulls = document.querySelectorAll('.skull-rating');
    skulls.forEach((skull, index) => {
        skull.classList.toggle('active', index < rating);
    });
    document.getElementById('rating-text').textContent = ratingTexts[rating];
}

function saveRating(death, rating) {
    deathRatings[death] = rating;
}

// Estructura para almacenar usuarios con correo electrónico
const users = {};

// Función para abrir modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden"; // Prevenir scroll
}

// Función para cerrar modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto"; // Restaurar scroll
    // Limpiar mensajes de error
    document.getElementById("registerError").textContent = "";
    document.getElementById("loginError").textContent = "";
    document.getElementById("registerError").classList.remove("visible");
    document.getElementById("loginError").classList.remove("visible");
    // Resetear formularios
    document.getElementById("registerForm").reset();
    document.getElementById("loginForm").reset();
}

// Función para cambiar entre modales
function switchModals(closeModalId, openModalId) {
    closeModal(closeModalId);
    setTimeout(() => {
        openModal(openModalId);
    }, 300); // Pequeña pausa para la animación
}

// Validar correo Gmail
function isValidGmailAddress(email) {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
}

// Mostrar error en el formulario
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add("visible");
    
    // Hacer que el mensaje desaparezca después de 5 segundos
    setTimeout(() => {
        errorElement.classList.remove("visible");
    }, 5000);
}

// Función para guardar usuarios en localStorage
function saveUsersToStorage() {
    localStorage.setItem('usersData', JSON.stringify(users));
}

// Función para cargar usuarios desde localStorage
function loadUsersFromStorage() {
    const userData = localStorage.getItem('usersData');
    if (userData) {
        Object.assign(users, JSON.parse(userData));
    }
}

// Cargar usuarios al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    loadUsersFromStorage();
});

// Manejar el registro
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validaciones
    if (username.length < 3) {
        showError('registerError', '❌ El nombre de usuario debe tener al menos 3 caracteres');
        return;
    }
    
    if (!isValidGmailAddress(email)) {
        showError('registerError', '❌ Solo se permiten direcciones de correo Gmail');
        return;
    }
    
    if (password.length < 6) {
        showError('registerError', '❌ La contraseña debe tener al menos 6 caracteres');
        return;
    }
    
    if (password !== confirmPassword) {
        showError('registerError', '❌ Las contraseñas no coinciden');
        return;
    }
    
    // Verificar si el usuario ya existe
    for (const existingUser in users) {
        if (users[existingUser].username === username) {
            showError('registerError', '❌ El nombre de usuario ya está en uso');
            return;
        }
        if (users[existingUser].email === email) {
            showError('registerError', '❌ Este correo ya está registrado');
            return;
        }
    }
    
    // Guardar el usuario
    const userId = 'user_' + Date.now();
    users[userId] = {
        username: username,
        email: email,
        password: password,
        createdAt: new Date().toISOString(),
        settings: {...config} // Copia la configuración actual
    };
    
    saveUsersToStorage();
    
    // Mostrar mensaje de éxito con confeti
    createEmojiShower('¡Registro exitoso!');
    closeModal('registerModal');
    
    setTimeout(() => {
        openModal('loginModal');
    }, 1000);
});

// Manejar el inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    // Buscar usuario por nombre de usuario
    let userFound = false;
    let userId = null;
    
    for (const id in users) {
        if (users[id].username === username && users[id].password === password) {
            userFound = true;
            userId = id;
            break;
        }
    }
    
    if (userFound) {
        // Cargar configuración del usuario
        if (users[userId].settings) {
            Object.assign(config, users[userId].settings);
            applyConfig();
        }
        
        // Mensaje de éxito con confeti
        closeModal('loginModal');
        createEmojiShower('¡Bienvenido de vuelta, ' + username + '!');
        
        // Actualizar la interfaz para mostrar que el usuario ha iniciado sesión
        document.querySelector('.auth-buttons').innerHTML = `
            <div class="user-profile">
                <span class="user-greeting">Hola, ${username}</span>
                <button class="fancy-button logout-btn" onclick="logout()">
                    <i class="fas fa-sign-out-alt"></i> Cerrar sesión
                </button>
            </div>
        `;
    } else {
        showError('loginError', '❌ Nombre de usuario o contraseña incorrectos');
    }
});

// Función para cerrar sesión
function logout() {
    // Guardar la configuración actual en el usuario
    const currentUser = getCurrentUser();
    if (currentUser) {
        users[currentUser].settings = {...config};
        saveUsersToStorage();
    }
    
    // Restaurar los botones de autenticación
    document.querySelector('.auth-buttons').innerHTML = `
        <button class="fancy-button register-btn" onclick="openModal('registerModal')">
            <i class="fas fa-user-plus"></i> Registrarse
        </button>
        <button class="fancy-button login-btn" onclick="openModal('loginModal')">
            <i class="fas fa-sign-in-alt"></i> Iniciar Sesión
        </button>
    `;
    
    // Mensaje de despedida
    createEmojiShower('¡Hasta pronto!');
}

// Obtener el usuario actual (si ha iniciado sesión)
function getCurrentUser() {
    const userGreeting = document.querySelector('.user-greeting');
    if (userGreeting) {
        const username = userGreeting.textContent.replace('Hola, ', '');
        for (const id in users) {
            if (users[id].username === username) {
                return id;
            }
        }
    }
    return null;
}

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
});

// Verificar si hay un usuario con sesión iniciada al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadUsersFromStorage();
    if (Object.keys(users).length > 0 && localStorage.getItem('currentUserId')) {
        const currentUserId = localStorage.getItem('currentUserId');
        if (users[currentUserId]) {
            document.querySelector('.auth-buttons').innerHTML = `
                <div class="user-profile">
                    <span class="user-greeting">Hola, ${users[currentUserId].username}</span>
                    <button class="fancy-button logout-btn" onclick="logout()">
                        <i class="fas fa-sign-out-alt"></i> Cerrar sesión
                    </button>
                </div>
            `;
            // Cargar configuración del usuario
            if (users[currentUserId].settings) {
                Object.assign(config, users[currentUserId].settings);
                applyConfig();
            }
        }
    }
});

// Inicializar los iconos flotantes y el sistema de rating al cargar la página
createFloatingIcons();
initializeRating();