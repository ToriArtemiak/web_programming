const express = require('express');
const cors = require('cors');
const path = require('path');
const tshirtRoutes = require('./routes/tshirts'); // Підключаємо маршрути для футболок

const app = express();

// Налаштування CORS
app.use(cors());

// Підтримка JSON для запитів
app.use(express.json());

// Статичні файли (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Маршрути для API футболок
app.use('/api/tshirts', tshirtRoutes);

// Маршрут для кореневої сторінки
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
