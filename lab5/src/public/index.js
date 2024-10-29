let filteredTshirts = [];
let tshirts = [];

// Виклик пошуку та сортування при введенні/зміні параметрів
document.getElementById('nameSearch').addEventListener('input', fetchTshirts);
document.getElementById('sizeSort').addEventListener('change', fetchTshirts);
document.getElementById('priceSort').addEventListener('change', fetchTshirts);

// Відкриття модального вікна створення
document.getElementById('addTshirtBtn').addEventListener('click', () => {
    document.getElementById('createModal').style.display = 'block';
});

// Закриття модального вікна створення
document.getElementById('closeCreateModal').addEventListener('click', () => {
    document.getElementById('createModal').style.display = 'none';
});

// Закриття модального вікна редагування
document.getElementById('closeEditModal').addEventListener('click', () => {
    document.getElementById('editModal').style.display = 'none';
});

// Запобігання оновленню сторінки після додавання нового елемента
document.getElementById('createForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Запобігаємо оновленню сторінки
    const name = document.getElementById('createName').value.trim();
    const color = document.getElementById('createColor').value.trim();
    const size = document.getElementById('createSize').value;
    const price = parseFloat(document.getElementById('createPrice').value);

    try {
        const response = await fetch('http://localhost:3000/api/tshirts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, color, size, price }),
        });

        // Перевіряємо, чи відповідь успішна
        if (!response.ok) {
            throw new Error(`Failed to add T-shirt: ${response.status}`);
        }

        const newTshirt = await response.json(); // Отримати нову футболку
        tshirts.push(newTshirt); // Додаємо нову футболку в масив
        document.getElementById('createForm').reset(); // Очищення форми після додавання
        document.getElementById('createModal').style.display = 'none'; // Закриття модального вікна
        fetchTshirts(); // Оновлення списку футболок після додавання
    } catch (error) {
        console.error('Failed to add T-shirt:', error);
    }
});

// Запобігання оновленню сторінки після редагування
document.getElementById('editForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Запобігаємо оновленню сторінки
    const index = document.getElementById('editIndex').value;
    const name = document.getElementById('editName').value.trim();
    const color = document.getElementById('editColor').value.trim();
    const size = document.getElementById('editSize').value;
    const price = parseFloat(document.getElementById('editPrice').value);

    try {
        const response = await fetch(`http://localhost:3000/api/tshirts/${tshirts[index].id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, color, size, price }),
        });

        // Перевіряємо, чи відповідь успішна
        if (!response.ok) {
            throw new Error(`Failed to update T-shirt: ${response.status}`);
        }

        const updatedTshirt = await response.json(); // Отримати оновлену футболку
        tshirts[index] = updatedTshirt; // Оновлюємо відповідний елемент в масиві
        document.getElementById('editForm').reset(); // Очищення форми після редагування
        document.getElementById('editModal').style.display = 'none'; // Закриття модального вікна
        fetchTshirts(); // Оновлення списку футболок після редагування
    } catch (error) {
        console.error('Failed to update T-shirt:', error);
    }
});

// Видалення футболки
function deleteTshirt(index) {
    const tshirtId = tshirts[index].id;
    fetch(`http://localhost:3000/api/tshirts/${tshirtId}`, {
        method: 'DELETE',
    })
        .then(() => {
            tshirts.splice(index, 1); // Видаляємо футболку з масиву
            fetchTshirts(); // Оновлюємо список
        })
        .catch(error => console.error('Failed to delete T-shirt:', error));
}

// Функція для запиту на сервер із параметрами пошуку та сортування
async function fetchTshirts() {
    const search = document.getElementById('nameSearch').value.trim();
    const size = document.getElementById('sizeSort').value;
    const priceSort = document.getElementById('priceSort').value;

    // Формуємо URL з параметрами пошуку та сортування
    let url = `http://localhost:3000/api/tshirts?search=${search}`;
    if (size) url += `&size=${size}`;
    if (priceSort) url += `&priceSort=${priceSort}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch T-shirts: ${response.status}`);
        }

        tshirts = await response.json();
        displayItems(tshirts);
    } catch (error) {
        console.error('Failed to fetch T-shirts:', error);
    }
}

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
            <button class="delete-btn" onclick="deleteTshirt(${index})">Delete</button>
        `;
        tshirtList.appendChild(tshirtDiv);
    });

    document.getElementById('itemCount').innerText = `Total Items: ${items.length}`;
}

function openEditModal(index) {
    const tshirt = tshirts[index];
    document.getElementById('editIndex').value = index;
    document.getElementById('editName').value = tshirt.name;
    document.getElementById('editColor').value = tshirt.color;
    document.getElementById('editSize').value = tshirt.size;
    document.getElementById('editPrice').value = tshirt.price;

    document.getElementById('editModal').style.display = 'block';
}

// Закриття модальних вікон при натисканні поза ними
window.onclick = function(event) {
    const createModal = document.getElementById('createModal');
    const editModal = document.getElementById('editModal');
    if (event.target === createModal) {
        createModal.style.display = 'none';
    }
    if (event.target === editModal) {
        editModal.style.display = 'none';
    }
};

// Спочатку завантажуємо футболки
fetchTshirts();
