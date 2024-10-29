const express = require('express');
const router = express.Router();

let tshirts = [
    { id: 1, name: 'Midnight flame', color: 'Red', size: 'M', price: 20 },
    { id: 2, name: 'Silver drops', color: 'Blue', size: 'S', price: 15 },
    { id: 3, name: 'Magnetic', color: 'Green', size: 'L', price: 25 },
    { id: 4, name: 'Paper house', color: 'Yellow', size: 'M', price: 30 },
    { id: 5, name: 'Malicious', color: 'Red', size: 'XL', price: 18 },
    { id: 6, name: 'Energy', color: 'Blue', size: 'L', price: 22 }
];

// GET - Отримати всі футболки
router.get('/', (req, res) => {
    const { search, size, priceSort } = req.query;
    let filteredTshirts = [...tshirts];

    // Пошук за назвою
    if (search) {
        filteredTshirts = filteredTshirts.filter(tshirt =>
            tshirt.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    // Фільтр за розміром
    if (size) {
        filteredTshirts = filteredTshirts.filter(tshirt => tshirt.size === size);
    }

    // Сортування за ціною
    if (priceSort) {
        filteredTshirts.sort((a, b) => priceSort === 'asc' ? a.price - b.price : b.price - a.price);
    }

    res.json(filteredTshirts);
});

// POST - Додати нову футболку
router.post('/', (req, res) => {
    const { name, color, size, price } = req.body;
    if (!name || !color || !size || !price) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newId = tshirts.length ? tshirts[tshirts.length - 1].id + 1 : 1;
    const newTshirt = { id: newId, name, color, size, price };
    tshirts.push(newTshirt);
    res.status(201).json(newTshirt);
});

// PUT - Оновити футболку
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, color, size, price } = req.body;
    const tshirtIndex = tshirts.findIndex(t => t.id == id);
    if (tshirtIndex === -1) {
        return res.status(404).json({ error: 'T-Shirt not found' });
    }

    tshirts[tshirtIndex] = { id: parseInt(id), name, color, size, price };
    res.json(tshirts[tshirtIndex]);
});

// DELETE - Видалити футболку
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const tshirtIndex = tshirts.findIndex(t => t.id == id);
    if (tshirtIndex === -1) {
        return res.status(404).json({ error: 'T-Shirt not found' });
    }

    const deletedTshirt = tshirts.splice(tshirtIndex, 1);
    res.json(deletedTshirt[0]);
});

module.exports = router;
