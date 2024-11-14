const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5005;


app.use(cors());
app.use(express.json());
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))


let products = [
    {
        id: 1,
        title: 'Midnight flame',
        price: 20,
        imageUrl: '/img/Midnight_flame.png',
        color: 'white',
        size: 'M',
    },
    {
        id: 2,
        title: 'Silver drops',
        price: 25,
        imageUrl: '/img/Silver_drops.png',
        color: 'white',
        size: 'L'
    },
    {
        id: 3,
        title: 'Magnetic',
        price: 25,
        imageUrl: '/img/Magnetic.png',
        color: 'black',
        size: 'L'
    },

    {
        id: 4,
        title: 'Paper house',
        price: 30,
        imageUrl: '/img/Paper house.png',
        color: 'white',
        size: 'M'
    },

    {
        id: 5,
        title: 'Malicious',
        price: 18,
        imageUrl: '/img/Malicious.png',
        color: 'beige',
        size: 'S'
    },

    {
        id: 6,
        title: 'Disco',
        price: 40,
        imageUrl: '/img/Disco.png',
        color: 'black',
        size: 'XS'
    },

    {
        id: 7,
        title: "I'm Everething",
        price: 22,
        imageUrl: '/img/Everething.png',
        color: 'pink',
        size: 'M'
    },

    {
        id: 8,
        title: 'Starboy',
        price: 45,
        imageUrl: '/img/Starboy.png',
        color: 'black',
        size: 'XL'
    },

    {
        id: 9,
        title: 'Stargirl',
        price: 45,
        imageUrl: '/img/Stargirl.png',
        color: 'black',
        size: 'XS'
    },

    {
        id: 10,
        title: 'Spiderman',
        price: 22,
        imageUrl: '/img/Spiderman.png',
        color: 'red',
        size: 'XS'
    },

    {
        id: 11,
        title: 'France',
        price: 22,
        imageUrl: '/img/France.png',
        color: 'white',
        size: 'XL'
    },

    {
        id: 12,
        title: 'Marshmellow',
        price: 18,
        imageUrl: '/img/Marshmellow.png',
        color: 'pink',
        size: 'M'
    },

    {
        id: 13,
        title: 'Women',
        price: 33,
        imageUrl: '/img/Women.png',
        color: 'black',
        size: 'S'
    },


    {
        id: 14,
        title: 'Suzuki',
        price: 45,
        imageUrl: '/img/Suzuki.png',
        color: 'beige',
        size: 'XS'
    },


    {
        id: 15,
        title: 'NY',
        price: 60,
        imageUrl: '/img/NY.png',
        color: 'blue',
        size: 'L'
    },

    {
        id: 16,
        title: 'NY girl',
        price: 12,
        imageUrl: '/img/NY girl.png',
        color: 'black',
        size: 'XL'
    },

    {
        id: 17,
        title: 'Fix him',
        price: 34,
        imageUrl: '/img/Fix him.png',
        color: 'green',
        size: 'M'
    },

    {
        id: 18,
        title: 'Cherry bomb',
        price: 25,
        imageUrl: '/img/Fix him-1.png',
        color: 'white',
        size: 'XS'
    },

    {
        id: 19,
        title: 'Blue flower',
        price: 35,
        imageUrl: '/img/Flower.png',
        color: 'blue',
        size: 'L'
    },

    {
        id: 20,
        title: 'Hysteric',
        price: 26,
        imageUrl: '/img/Hysteric.png',
        color: 'gray',
        size: 'S'
    }
];

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
