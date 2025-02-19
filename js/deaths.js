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

let currentDeath = '';

function showRandomDeath() {
    const outputDiv = document.getElementById('output');
    const ratingContainer = document.getElementById('rating-container');
    const randomIndex = Math.floor(Math.random() * deaths.length);
    currentDeath = deaths[randomIndex];

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
        createEmojiShower(currentDeath);
        setTimeout(() => {
            ratingContainer.classList.remove('hidden');
            ratingContainer.classList.add('visible');
        }, 500);
    }, 300);
}