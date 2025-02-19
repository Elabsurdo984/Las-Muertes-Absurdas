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
    applyConfig();
}

function saveConfig() {
    localStorage.setItem('siteConfig', JSON.stringify(config));
}

function applyConfig() {
    document.documentElement.setAttribute('data-theme', config.theme);
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.className = config.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    document.body.style.fontSize = {
        small: '0.9rem',
        normal: '1rem',
        large: '1.1rem'
    }[config.fontSize];
    document.documentElement.style.setProperty('--animation-speed', config.animationSpeed);
    updateRatingSymbols();
    const emojiInput = document.getElementById('emojiAcount');
    const emojiValue = document.getElementById('emojiAmountValue');
    if (emojiInput && emojiValue) {
        emojiInput.value = config.emojiAmount;
        emojiValue.textContent = config.emojiAmount;
    }
    saveConfig();
}

function toggleTheme() {
    config.theme = config.theme === 'light' ? 'dark' : 'light';
    applyConfig();
}

function changeFontSize(size) {
    config.fontSize = size;
    applyConfig();
}

function changeAnimationSpeed() {
    const speed = document.getElementById('animationSpeed').value;
    config.animationSpeed = parseFloat(speed);
    applyConfig();
}

function changeRatingStyle() {
    config.ratingStyle = document.getElementById('ratingStyle').value;
    applyConfig();
}

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

function updateEmojiAccount() {
    const amount = document.getElementById('emojiAcount').value;
    config.emojiAmount = parseInt(amount);
    document.getElementById('emojiAmountValue').textContent = amount;
    saveConfig();
}

function resetConfig() {
    const currentTheme = config.theme;
    Object.assign(config, {
        fontSize: 'normal',
        animationSpeed: 1,
        ratingStyle: 'skull',
        sound: false,
        emojiAmount: 50,
        theme: currentTheme
    });
    applyConfig();
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

document.addEventListener('click', (e) => {
    const configMenu = document.getElementById('configMenu');
    const configButton = document.querySelector('.config-button');
    if (!configMenu.contains(e.target) && !configButton.contains(e.target) && configMenu.classList.contains('visible')) {
        configMenu.classList.remove('visible');
        configButton.style.transform = 'rotate(0deg)';
    }
});