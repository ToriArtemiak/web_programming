const tshirts = [
    { name: 'Midnight flame', color: 'Red', size: 'M', price: 20 },
    { name: 'Silver drops', color: 'Blue', size: 'S', price: 15 },
    { name: 'Magnetic', color: 'Green', size: 'L', price: 25 },
    { name: 'Paper house', color: 'Yellow', size: 'M', price: 30 },
    { name: 'Malicious', color: 'Red', size: 'XL', price: 18 },
    { name: 'Energy', color: 'Blue', size: 'L', price: 22 },
];

let filteredTshirts = [...tshirts];

function displayItems(items) {
    const tshirtList = document.getElementById('tshirtList');
    tshirtList.innerHTML = '';
    items.forEach((tshirt, index) => {
        const tshirtDiv = document.createElement('div');
        tshirtDiv.classList.add('tshirt');
        tshirtDiv.innerHTML = `
            <h2>${tshirt.name}</h2>
            <p>Color: ${tshirt.color}</p>
            <p>Size: ${tshirt.size}</p>
            <p>Price: $${tshirt.price}</p>
            <button class="edit-btn" onclick="openEditModal(${index})">Edit</button>
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
        if (priceSort === 'asc') {
            sortedTshirts.sort((a, b) => a.price - b.price);
        } else if (priceSort === 'desc') {
            sortedTshirts.sort((a, b) => b.price - a.price);
        }
    }

    displayItems(sortedTshirts);
}

// Функції для модальних вікон
const createModal = document.getElementById('createModal');
const editModal = document.getElementById('editModal');
const addTshirtBtn = document.getElementById('addTshirtBtn');
const closeCreateModal = document.getElementById('closeCreateModal');
const closeEditModal = document.getElementById('closeEditModal');

// Відкриття модального вікна для створення
addTshirtBtn.onclick = () => {
    createModal.style.display = 'block';
};

// Закриття модального вікна для створення
closeCreateModal.onclick = () => {
    createModal.style.display = 'none';
    document.getElementById('createForm').reset();
};

// Закриття модального вікна для редагування
closeEditModal.onclick = () => {
    editModal.style.display = 'none';
    document.getElementById('editForm').reset();
};

// Закриття модальних вікон при кліку поза їхньою областю
window.onclick = (event) => {
    if (event.target == createModal) {
        createModal.style.display = 'none';
        document.getElementById('createForm').reset();
    }
    if (event.target == editModal) {
        editModal.style.display = 'none';
        document.getElementById('editForm').reset();
    }
};

// Обробка форми створення нової футболки
document.getElementById('createForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('createName').value.trim();
    const color = document.getElementById('createColor').value.trim();
    const size = document.getElementById('createSize').value;
    const price = parseFloat(document.getElementById('createPrice').value);

    // Валідація даних
    if (name.length < 3) {
        alert('Name must be at least 3 characters long.');
        return;
    }
    if (!color) {
        alert('Color is required.');
        return;
    }
    if (!size) {
        alert('Size is required.');
        return;
    }
    if (isNaN(price) || price < 0) {
        alert('Price must be a positive number.');
        return;
    }

    // Перевірка на унікальність імені (ігноруючи регістр)
    const duplicate = tshirts.some(tshirt => tshirt.name.toLowerCase() === name.toLowerCase());
    if (duplicate) {
        alert('A T-Shirt with this name already exists. Please choose a different name.');
        return;
    }

    // Додавання нової футболки
    tshirts.push({ name, color, size, price });
    createModal.style.display = 'none';
    document.getElementById('createForm').reset();
    filterItems(); // Оновлення списку
});

// Функція для відкриття модального вікна редагування
function openEditModal(index) {
    const tshirt = filteredTshirts[index];
    if (!tshirt) {
        alert('T-Shirt not found!');
        return;
    }

    // Заповнення форми поточними даними
    document.getElementById('editIndex').value = index;
    document.getElementById('editName').value = tshirt.name;
    document.getElementById('editColor').value = tshirt.color;
    document.getElementById('editSize').value = tshirt.size;
    document.getElementById('editPrice').value = tshirt.price;

    editModal.style.display = 'block';
}

// Обробка форми редагування футболки
document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const index = document.getElementById('editIndex').value;
    const name = document.getElementById('editName').value.trim();
    const color = document.getElementById('editColor').value.trim();
    const size = document.getElementById('editSize').value;
    const price = parseFloat(document.getElementById('editPrice').value);

    // Валідація даних
    if (name.length < 3) {
        alert('Name must be at least 3 characters long.');
        return;
    }
    if (!color) {
        alert('Color is required.');
        return;
    }
    if (!size) {
        alert('Size is required.');
        return;
    }
    if (isNaN(price) || price < 0) {
        alert('Price must be a positive number.');
        return;
    }

    // Отримання поточної футболки
    const tshirtToEdit = filteredTshirts[filteredIndex];
    if (!tshirtToEdit) {
        alert('T-Shirt not found!');
        return;
    }

    // Перевірка на унікальність імені (ігноруючи регістр), виключаючи поточну футболку
    const duplicate = tshirts.some((tshirt, idx) =>
        tshirt.name.toLowerCase() === name.toLowerCase() &&
        !(tshirt.name === tshirtToEdit.name && tshirt.color === tshirtToEdit.color && tshirt.size === tshirtToEdit.size && tshirt.price === tshirtToEdit.price)
    );
    if (duplicate) {
        alert('A T-Shirt with this name already exists. Please choose a different name.');
        return;
    }

    // Оновлення даних футболки
    const originalIndex = tshirts.findIndex(t => t.name === filteredTshirts[index].name && t.color === filteredTshirts[index].color && t.size === filteredTshirts[index].size && t.price === filteredTshirts[index].price);
    if (originalIndex !== -1) {
        tshirts[originalIndex] = { name, color, size, price };
    }

    editModal.style.display = 'none';
    document.getElementById('editForm').reset();
    filterItems(); // Оновлення списку
});

displayItems(tshirts);
