let array = [];
for (let i = 1; i <= 100; i++) {
    array.push({ id: i, name: "Item " + i });
}

let currentPage = 1;
const itemsPerPage = 10;

const container = document.getElementById('container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function showItems() {
    container.innerHTML = "";
    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    for (let i = start; i < end && i < array.length; i++) {
        container.innerHTML += array[i].id + ": " + array[i].name + "<br>";
    }
}

nextBtn.onclick = function() {
    if (currentPage < 10) {
        currentPage++;
        showItems();
    }
};

prevBtn.onclick = function() {
    if (currentPage > 1) {
        currentPage--;
        showItems();
    }
};

showItems();
