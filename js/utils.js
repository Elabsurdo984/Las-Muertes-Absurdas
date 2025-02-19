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

createFloatingIcons();