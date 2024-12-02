const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const PORT = process.env.PORT || 5005;
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'my_secret_key';
app.use(cors());
app.use(express.json());
const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));

let users = [
    {
        email: "example@mail.com",
        password: "hashed_password",
        username: "User1",
        cart: []
    }
];


let products = [
    {
        id: 1,
        title: 'Midnight flame',
        price: 20,
        imageUrl: '/img/Midnight_flame.png',
        color: ['White','Black','Red'],
        size: ['XS','S','M','L','XL']
    },
    {
        id: 2,
        title: 'Silver drops',
        price: 25,
        imageUrl: '/img/Silver_drops.png',
        color: ['White','Green','Red'],
        size: ['XS','S','M','L','XL']
    },
    {
        id: 3,
        title: 'Magnetic',
        price: 25,
        imageUrl: '/img/Magnetic.png',
        color:  ['White','Black','Red'],
        size: ['XS','S','M','L','XL']
    },

    {
        id: 4,
        title: 'Paper house',
        price: 30,
        imageUrl: '/img/Paper house.png',
        color:  ['White','Black','Red'],
        size: ['XS','S','M','L','XL']
    },

    {
        id: 5,
        title: 'Malicious',
        price: 18,
        imageUrl: '/img/Malicious.png',
        color:  ['White','Black','Red'],
        size: ['XS','S','M','L','XL']
    },

    {
        id: 6,
        title: 'Disco',
        price: 40,
        imageUrl: '/img/Disco.png',
        color:  ['White','Black','Red'],
        size: ['XS','S','M','L','XL']
    },

    {
        id: 7,
        title: "I'm Everething",
        price: 22,
        imageUrl: '/img/Everething.png',
        color:  ['White','Black','Red'],
        size: ['XS','S','M','L','XL']
    },

    {
        id: 8,
        title: 'Starboy',
        price: 45,
        imageUrl: '/img/Starboy.png',
        color:  ['White','Black','Red'],
        size: ['XS','S','M','L','XL']
    },

    {
        id: 9,
        title: 'Stargirl',
        price: 45,
        imageUrl: '/img/Stargirl.png',
        color:  ['White','Black','Red'],
        size: ['XS','S','M','L','XL']
    },

    {
        id: 10,
        title: 'Spiderman',
        price: 22,
        imageUrl: '/img/Spiderman.png',
        color:  ['White','Black','Red'],
        size: ['XS','S','M','L','XL']
    },

    {
        id: 11,
        title: 'France',
        price: 22,
        imageUrl: '/img/France.png',
        color: 'white',
        size: ['XS','S','M','L','XL']
    },

    {
        id: 12,
        title: 'Marshmellow',
        price: 18,
        imageUrl: '/img/Marshmellow.png',
        color:  ['White','Black','Red','Pink'],
        size: ['XS','S','M','L','XL']
    },

    {
        id: 13,
        title: 'Women',
        price: 33,
        imageUrl: '/img/Women.png',
        color:  ['White','Black','Red'],
        size: ['XS','S','M','L','XL']
    },


    {
        id: 14,
        title: 'Suzuki',
        price: 45,
        imageUrl: '/img/Suzuki.png',
        color:  ['White','Black','Red','Beige'],
        size: ['XS','S','M','L','XL']
    },


    {
        id: 15,
        title: 'NY',
        price: 60,
        imageUrl: '/img/NY.png',
        color:  ['White','Black','Red', 'Blue'],
        size: ['XS','S','M','L','XL']
    },


    {
        id: 16,
        title: 'NY girl',
        price: 12,
        imageUrl: '/img/NY girl.png',
        color:  ['White','Black','Red'],
        size: ['XS','S','M','L','XL']
    },

    {
        id: 17,
        title: 'Fix him',
        price: 34,
        imageUrl: '/img/Fix him.png',
        color:  ['White','Black','Red','Green'],
        size: ['XS','S','M','L','XL']
    },

    {
        id: 18,
        title: 'Cherry bomb',
        price: 25,
        imageUrl: '/img/Fix him-1.png',
        color:  ['White','Black','Red'],
        size: ['XS','S','M','L','XL']
    },

    {
        id: 19,
        title: 'Blue flower',
        price: 35,
        imageUrl: '/img/Flower.png',
        color:  ['White','Black','Red','Blue'],
        size: ['XS','S','M','L','XL']
    },

    {
        id: 20,
        title: 'Hysteric',
        price: 26,
        imageUrl: '/img/Hysteric.png',
        color:  ['White','Black','Red','Gray'],
        size: ['XS','S','M','L','XL']
    }
];

// авторизація
app.post('/users/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Всі поля повинні бути заповнені!' });
    }

    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(400).json({ message: 'Користувача з таким email не знайдено!' });
    }

    console.log(`Користувач з email: ${email} намагається увійти`);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Невірний пароль!' });
    }

    const token = jwt.sign(
        { userId: user.email },
        JWT_SECRET,
        { expiresIn: '1h' }
    );

    console.log(`Токен для користувача ${email}: ${token}`);

    res.json({
        message: 'Вітаємо, ви успішно увійшли!',
        token,
        user: {
            username: user.username,
            email: user.email
        }
    });
});


// реєстрація
app.post('/users/signup', async (req, res) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ message: 'Всі поля повинні бути заповнені!' });
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'Користувач з таким email вже існує!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { username, password: hashedPassword, email };
    users.push(newUser);

    res.status(201).json({
        message: 'Користувача успішно зареєстровано!',
        user: { username, email },
    });
});

// токен
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Токен не знайдений' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Невірний токен' });
        }
        req.user = user;
        next();
    });
};

// вийти
app.post('/users/logout', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
});



app.get('/api/products', (req, res) => {
    const { search, sort, color, size } = req.query;

    let filteredProducts = products;

    if (search) {
        const withoudProbiliv = search.trim().toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(withoudProbiliv)
        );
    }

    if (color) {
        filteredProducts = filteredProducts.filter(product =>
            product.color.toLowerCase() === color.toLowerCase()
        );
    }

    if (size) {
        filteredProducts = filteredProducts.filter(product =>
            product.size === size
        );
    }

    if (sort === 'asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    res.json(filteredProducts);
});

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ message: 'no product' });
    }

    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.get('/users/me', authenticateToken, (req, res) => {
    const userEmail = req.user.userId;
    const user = users.find(u => u.email === userEmail);

    if (!user) {
        return res.status(404).json({ message: 'Користувача не знайдено' });
    }

    res.json({
        username: user.username,
        email: user.email,
    });
});