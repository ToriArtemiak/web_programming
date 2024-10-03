const tshirts = [
    { name: 'Midnight flame', color: 'Red', size: 'M', price: 20 },
    { name: 'Silver drops', color: 'Blue', size: 'S', price: 15 },
    { name: 'Magnetic', color: 'Green', size: 'L', price: 25 },
    { name: 'Paper house', color: 'Yellow', size: 'M', price: 30 },
    { name: 'Malicious', color: 'Red', size: 'XL', price: 18 },
    { name: 'Energy', color: 'Blue', size: 'L', price: 22 },
    /*{ name: 'Поставте 1.2', color: 'будь ласка', size: 'будь ласка', price: 'будь ласка' },*/
];

let filteredTshirts = [...tshirts];

function displayItems(items) {
    const tshirtList = document.getElementById('tshirtList');
    tshirtList.innerHTML = '';
    items.forEach(tshirt => {
        const tshirtDiv = document.createElement('div');
        tshirtDiv.classList.add('tshirt');
        tshirtDiv.innerHTML = `
            <h2>${tshirt.name}</h2>
            <p>Color: ${tshirt.color}</p>
            <p>Size: ${tshirt.size}</p>
            <p>Price: $${tshirt.price}</p>
        `;
        tshirtList.appendChild(tshirtDiv);
    });
    document.getElementById('itemCount').innerText = `Total Items: ${items.length}`;
}

function filterItems() {
    const nameSearch = document.getElementById('nameSearch').value.toLowerCase().trim();
    filteredTshirts = tshirts.filter(tshirt =>
        tshirt.name.toLowerCase().includes(nameSearch)
    );

    sortItems();
}

function sortItems() {
    const sizeSort = document.getElementById('sizeSort').value;
    const priceSort = document.getElementById('priceSort').value;

    let sortedTshirts = [...filteredTshirts];

    if (sizeSort) {
        sortedTshirts = sortedTshirts.filter(tshirt => tshirt.size === sizeSort);
    }

    if (priceSort) {
        sortedTshirts.sort((a, b) =>  a.price - b.price );
    }

    displayItems(sortedTshirts);
}

displayItems(tshirts);