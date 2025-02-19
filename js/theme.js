function initializeTheme() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.className = config.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadConfig();
    initializeTheme();
});