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
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
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

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let i = 0;
let position = 0;

images.forEach(element => {
    const items = document.querySelector('.items');

    const div = document.createElement('div');
    div.classList.add('item');

    if(i === 0){
        div.classList.add('active');
    }

    items.appendChild(div);

    const img = document.createElement('img');
    img.src = element.image;

    const h2 = document.createElement('h2');
    h2.innerText = element.title;

    const p = document.createElement('p');
    p.innerText = element.text;

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);

    i++;
});

i = 0;

images.forEach(element => {
    const thumbs = document.querySelector('.thumbs');

    const div = document.createElement('div');
    div.classList.add('thumb');
    div.setAttribute('id', `${i}`);
    div.setAttribute('onclick', 'switchActive(this.id)');

    if(i === 0){
        div.classList.add('active');
    }

    thumbs.appendChild(div);

    const img = document.createElement('img');
    img.src = element.image;

    div.appendChild(img);

    i++;
});

const list = document.querySelectorAll('.item');

const thumbList = document.querySelectorAll('.thumb');

function switchActive(id){
    thumbList[position].classList.remove('active');
    list[position].classList.remove('active');
    list[id].classList.add('active');
    thumbList[id].classList.add('active');

    position = id;
}

prev.addEventListener('click', function(){
    if(position > 0){
        list[position].classList.remove('active');
        thumbList[position].classList.remove('active');
        position --;
        list[position].classList.add('active');
        thumbList[position].classList.add('active');
    }
    else{
        list[position].classList.remove('active');
        thumbList[position].classList.remove('active');
        position = list.length - 1;
        list[position].classList.add('active');
        thumbList[position].classList.add('active');
    }
});

next.addEventListener('click', function(){
    if(position < list.length - 1){
        list[position].classList.remove('active');
        thumbList[position].classList.remove('active');
        position ++;
        list[position].classList.add('active');
        thumbList[position].classList.add('active');
    }
    else{
        list[position].classList.remove('active');
        thumbList[position].classList.remove('active');
        position = 0;
        list[position].classList.add('active');
        thumbList[position].classList.add('active');
    }
});