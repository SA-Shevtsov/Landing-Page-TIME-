import dataWatchesImg from './data-watches-img.json' with {type: 'json'};
import dataWatchesDsc from './data-watches-dsc.json' with {type: 'json'};

//header

let home = document.querySelector('#home');
let watches = document.querySelector('#watches');
let aboutUs = document.querySelector('#about-us');
let contacts = document.querySelector('#contacts');

home.addEventListener('click', () => {
    window.scrollTo(0,0);
})

watches.addEventListener('click', () => {
    window.scrollTo(0, 702);
})

aboutUs.addEventListener('click', () => {
    window.scrollTo(0,1483);
})

contacts.addEventListener('click', () => {
    window.scrollTo(0,2823);
})


//watches

let watchesLotOne = document.querySelector('.watches__lot-one');
let watchesLotTwo = document.querySelector('.watches__lot-two');
let watchesLotThree = document.querySelector('.watches__lot-three');
let watchesLotFour = document.querySelector('.watches__lot-four');
let watchesLotFive = document.querySelector('.watches__lot-five');

let watchesWrapper = document.querySelector('.watches__wrapper')
let slideOne = document.querySelector('.watches__slide-one');
let slideTwo = document.querySelector('.watches__slide-two');
let slideThree = document.querySelector('.watches__slide-three');
let slideFour = document.querySelector('.watches__slide-four');

let watchesName = document.querySelector('.watches__name');
let watchesMechanism = document.querySelector('.watches__mechanism');
let watchesMaterial = document.querySelector('.watches__material');
let watchesWaterResistance = document.querySelector('.watches__water-resistance');
let watchesGlass = document.querySelector('.watches__glass');
let watchesDiameter = document.querySelector('.watches__diameter');
let watchesThickness = document.querySelector('.watches__thickness');
let watchesBracelet = document.querySelector('.watches__bracelet');
let watchesZipper = document.querySelector('.watches__zipper');

function handlerLot(item) {
    watchesWrapper.style.backgroundImage = `url(${dataWatchesImg[item][0]})`;
    slideOne.style.backgroundImage = `url(${dataWatchesImg[item][0]})`;
    slideTwo.style.backgroundImage = `url(${dataWatchesImg[item][1]})`;
    slideThree.style.backgroundImage = `url(${dataWatchesImg[item][2]})`;
    slideFour.style.backgroundImage = `url(${dataWatchesImg[item][3]})`;

    watchesName.textContent = dataWatchesDsc[item].name;
    watchesMechanism.textContent = `Механизм: ${dataWatchesDsc[item].mechanism};`;
    watchesMaterial.textContent = `Материал: ${dataWatchesDsc[item].material};`;
    watchesWaterResistance.textContent = `Водонепроницаемость: ${dataWatchesDsc[item].waterresistance};`;
    watchesGlass.textContent = `Стекло: ${dataWatchesDsc[item].glass};`;
    watchesDiameter.textContent = `Диаметр: ${dataWatchesDsc[item].diameter};`;
    watchesThickness.textContent = `Толщина: ${dataWatchesDsc[item].thickness};`;
    watchesBracelet.textContent = `Браслет: ${dataWatchesDsc[item].bracelet};`;
    watchesZipper.textContent = `Застежка: ${dataWatchesDsc[item].zipper};`;
}

handlerLot(0);
watchesLotOne.addEventListener('click', () => {handlerLot(0);
    watchesLotOne.classList.add('watches__lot-active');
    watchesLotTwo.classList.remove('watches__lot-active');
    watchesLotThree.classList.remove('watches__lot-active');
    watchesLotFour.classList.remove('watches__lot-active');
    watchesLotFive.classList.remove('watches__lot-active');
});
watchesLotTwo.addEventListener('click', () => {handlerLot(1);
    watchesLotOne.classList.remove('watches__lot-active');
    watchesLotTwo.classList.add('watches__lot-active');
    watchesLotThree.classList.remove('watches__lot-active');
    watchesLotFour.classList.remove('watches__lot-active');
    watchesLotFive.classList.remove('watches__lot-active');
});
watchesLotThree.addEventListener('click', () => {handlerLot(2);
    watchesLotOne.classList.remove('watches__lot-active');
    watchesLotTwo.classList.remove('watches__lot-active');
    watchesLotThree.classList.add('watches__lot-active');
    watchesLotFour.classList.remove('watches__lot-active');
    watchesLotFive.classList.remove('watches__lot-active');});
watchesLotFour.addEventListener('click', () => {handlerLot(3);
    watchesLotOne.classList.remove('watches__lot-active');
    watchesLotTwo.classList.remove('watches__lot-active');
    watchesLotThree.classList.remove('watches__lot-active');
    watchesLotFour.classList.add('watches__lot-active');
    watchesLotFive.classList.remove('watches__lot-active');});
watchesLotFive.addEventListener('click', () => {handlerLot(4);
    watchesLotOne.classList.remove('watches__lot-active');
    watchesLotTwo.classList.remove('watches__lot-active');
    watchesLotThree.classList.remove('watches__lot-active');
    watchesLotFour.classList.remove('watches__lot-active');
    watchesLotFive.classList.add('watches__lot-active');});

function handlerSlider(item){
    watchesWrapper.style.backgroundImage = item.style.backgroundImage;
}

slideOne.addEventListener('click', () => {handlerSlider(slideOne)});
slideTwo.addEventListener('click', () => { handlerSlider(slideTwo)});
slideThree.addEventListener('click', () => { handlerSlider(slideThree)});
slideFour.addEventListener('click', () => { handlerSlider(slideFour)});

watchesWrapper.addEventListener('mousemove', (e) => {
    watchesWrapper.style.backgroundPositionX = -e.offsetX + "px";
    watchesWrapper.style.backgroundPositionY = -e.offsetY + "px";
});

watchesWrapper.addEventListener('mouseleave', () => {
    watchesWrapper.style.backgroundPosition = "center";
})

//order

let watchesOrderButton = document.querySelector('.watches__order-button');
let watchesOrder = document.querySelector('.watches__order');
let watchesOrderButtonClose = document.querySelector('.watches__order-button-close');

watchesOrderButton.addEventListener('click', () => {
    watchesOrder.classList.add('watches__order-open');
    watchesOrder.classList.remove('watches__order-close');
})

watchesOrderButtonClose.addEventListener('click', () => {
    watchesOrder.classList.add('watches__order-close');
    watchesOrder.classList.remove('watches__order-open');
})

let form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    watchesOrder.classList.add('watches__order-close');
})