const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const container = document.querySelector('.container');
const itemsContainer = document.querySelector('.items');
const thumbsContainer = document.querySelector('.thumbs');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const toggleAutoplayBtn = document.querySelector('.toggle-autoplay');
const reverseAutoplayBtn = document.querySelector('.reverse-autoplay');

let position = 0;
let intervalId;
let autoplayEnabled = true;
let autoplayDirection = 1;

function startAutoplay() {
    intervalId = setInterval(() => {
        position = (position + autoplayDirection + images.length) % images.length;
        switchActive(position);
    }, 3000); // Adjust autoplay interval as needed
}

function stopAutoplay() {
    clearInterval(intervalId);
}

function toggleAutoplay() {
    if (autoplayEnabled) {
        stopAutoplay();
        toggleAutoplayBtn.textContent = 'Start Autoplay';
    } else {
        startAutoplay();
        toggleAutoplayBtn.textContent = 'Stop Autoplay';
    }
    autoplayEnabled = !autoplayEnabled;
}

function reverseAutoplay() {
    autoplayDirection *= -1;
}

function switchActive(index){
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.thumb.active').classList.remove('active');
    document.querySelectorAll('.item')[index].classList.add('active');
    document.querySelectorAll('.thumb')[index].classList.add('active');

    position = index;
}

images.forEach((element, index) => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.setAttribute('data-index', index);

    if(index === 0){
        div.classList.add('active');
    }

    const img = document.createElement('img');
    img.src = element.image;

    const h2 = document.createElement('h2');
    h2.innerText = element.title;

    const p = document.createElement('p');
    p.innerText = element.text;

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);

    itemsContainer.appendChild(div);

    const div2 = document.createElement('div');
    div2.classList.add('thumb');
    div2.setAttribute('data-index', index);
    div2.addEventListener('click', () => switchActive(index));

    if(index === 0){
        div2.classList.add('active');
    }

    const thumbImg = document.createElement('img');
    thumbImg.src = element.image;

    div2.appendChild(thumbImg);

    thumbsContainer.appendChild(div2);
});

prev.addEventListener('click', function(){
    stopAutoplay();
    position = (position - 1 + images.length) % images.length;
    switchActive(position);
    if (autoplayEnabled) {
        startAutoplay();
    }
});

next.addEventListener('click', function(){
    stopAutoplay();
    position = (position + 1) % images.length;
    switchActive(position);
    if (autoplayEnabled) {
        startAutoplay();
    }
});

toggleAutoplayBtn.addEventListener('click', toggleAutoplay);
reverseAutoplayBtn.addEventListener('click', reverseAutoplay);

startAutoplay();