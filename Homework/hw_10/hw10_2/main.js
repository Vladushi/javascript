let price = localStorage.getItem('price');
let lastUpdate = localStorage.getItem('lastUpdate');

if(price === null) {
    price = 100;
    localStorage.setItem('price', price);
} else {
    price = +price;
}

if(lastUpdate === null) {
    lastUpdate = Date.now();
    localStorage.setItem('lastUpdate', lastUpdate);
} else {
    lastUpdate = +lastUpdate;
}

let now = Date.now();

if (now - lastUpdate > 10000) {
    price += 10;
    localStorage.setItem('price', price);
    localStorage.setItem('lastUpdate', now);
}

document.getElementById('priceBlock').innerText = price + 'грн';
