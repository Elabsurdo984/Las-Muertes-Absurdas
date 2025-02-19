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

function createFallingEmoji(emoji) {
    const emojiElement = document.createElement('div');
    emojiElement.className = 'falling-emoji';
    emojiElement.textContent = emoji;
    emojiElement.style.left = `${Math.random() * 100}vw`;
    emojiElement.style.fontSize = `${Math.random() * 20 + 20}px`;
    emojiElement.style.transform = `rotate(${Math.random() * 360}deg)`;
    emojiElement.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.body.appendChild(emojiElement);
    emojiElement.addEventListener('animationend', () => {
        emojiElement.remove();
    });
}

function findRelatedEmojis(deathText) {
    const words = deathText.toLowerCase().split(' ');
    const relatedEmojis = new Set();
    words.forEach(word => {
        const cleanWord = word.replace(/[.,]/g, '');
        if (emojiMap[cleanWord]) {
            relatedEmojis.add(emojiMap[cleanWord]);
        }
    });
    if (relatedEmojis.size === 0) {
        relatedEmojis.add('💫');
        relatedEmojis.add('✨');
        relatedEmojis.add('🌟');
    }
    return Array.from(relatedEmojis);
}

function createEmojiShower(deathText) {
    const relatedEmojis = findRelatedEmojis(deathText);
    for (let i = 0; i < config.emojiAmount; i++) {
        setTimeout(() => {
            const randomEmoji = relatedEmojis[Math.floor(Math.random() * relatedEmojis.length)];
            createFallingEmoji(randomEmoji);
        }, i * (100 / config.animationSpeed));
    }
}