const users = {};

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById("registerError").textContent = "";
    document.getElementById("loginError").textContent = "";
    document.getElementById("registerError").classList.remove("visible");
    document.getElementById("loginError").classList.remove("visible");
    document.getElementById("registerForm").reset();
    document.getElementById("loginForm").reset();
}

function switchModals(closeModalId, openModalId) {
    closeModal(closeModalId);
    setTimeout(() => {
        openModal(openModalId);
    }, 300);
}

function isValidGmailAddress(email) {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add("visible");
    setTimeout(() => {
        errorElement.classList.remove("visible");
    }, 5000);
}

function saveUsersToStorage() {
    localStorage.setItem('usersData', JSON.stringify(users));
}

function loadUsersFromStorage() {
    const userData = localStorage.getItem('usersData');
    if (userData) {
        Object.assign(users, JSON.parse(userData));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadUsersFromStorage();
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
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
    const userId = 'user_' + Date.now();
    users[userId] = {
        username: username,
        email: email,
        password: password,
        createdAt: new Date().toISOString(),
        settings: {...config}
    };
    saveUsersToStorage();
    createEmojiShower('¡Registro exitoso!');
    closeModal('registerModal');
    setTimeout(() => {
        openModal('loginModal');
    }, 1000);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
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
        if (users[userId].settings) {
            Object.assign(config, users[userId].settings);
            applyConfig();
        }
        closeModal('loginModal');
        createEmojiShower('¡Bienvenido de vuelta, ' + username + '!');
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

function logout() {
    const currentUser = getCurrentUser();
    if (currentUser) {
        users[currentUser].settings = {...config};
        saveUsersToStorage();
    }
    document.querySelector('.auth-buttons').innerHTML = `
        <button class="fancy-button register-btn" onclick="openModal('registerModal')">
            <i class="fas fa-user-plus"></i> Registrarse
        </button>
        <button class="fancy-button login-btn" onclick="openModal('loginModal')">
            <i class="fas fa-sign-in-alt"></i> Iniciar Sesión
        </button>
    `;
    createEmojiShower('¡Hasta pronto!');
}

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

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
});

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
            if (users[currentUserId].settings) {
                Object.assign(config, users[currentUserId].settings);
                applyConfig();
            }
        }
    }
});