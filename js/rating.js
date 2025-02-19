const deathRatings = {};

const ratingTexts = {
    1: "No muy absurda... bastante normal 🤔",
    2: "Algo absurda, pero he visto peores 😏",
    3: "¡Definitivamente absurda! 😅",
    4: "¡Muy absurda! ¡Me encanta! 🤪",
    5: "¡EXTREMADAMENTE ABSURDA! ¡INCREIBLE! 🤯"
};

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

document.addEventListener('DOMContentLoaded', () => {
    initializeRating();
});