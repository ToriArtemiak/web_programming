import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([
        {
            id: 1,
            title: 'Midnight flame',
            price: 20,
            imageUrl: require('../components/img/Midnight_flame.png'),
            color: 'white',
            size: 'M',
        },
        {
            id: 2,
            title: 'Silver drops',
            price: 25,
            imageUrl: require('../components/img/Silver_drops.png'),
            color: 'white',
            size: 'L'
        },
        {
            id: 3,
            title: 'Magnetic',
            price: 25,
            imageUrl: require('../components/img/Magnetic.png'),
            color: 'black',
            size: 'L'
        },

        {
            id: 4,
            title: 'Paper house',
            price: 30,
            imageUrl: require('../components/img/Paper house.png'),
            color: 'white',
            size: 'M'
        },

        {
            id: 5,
            title: 'Malicious',
            price: 18,
            imageUrl: require('../components/img/Malicious.png'),
            color: 'beige',
            size: 'S'
        },

        {
            id: 6,
            title: 'Disco',
            price: 40,
            imageUrl: require('../components/img/Disco.png'),
            color: 'black',
            size: 'XS'
        },

        {
            id: 7,
            title: "I'm Everething",
            price: 22,
            imageUrl: require('../components/img/Everething.png'),
            color: 'pink',
            size: 'M'
        },

        {
            id: 8,
            title: 'Starboy',
            price: 45,
            imageUrl: require('../components/img/Starboy.png'),
            color: 'black',
            size: 'XL'
        },

        {
            id: 9,
            title: 'Stargirl',
            price: 45,
            imageUrl: require('../components/img/Stargirl.png'),
            color: 'black',
            size: 'XS'
        },

        {
            id: 10,
            title: 'Spiderman',
            price: 22,
            imageUrl: require('../components/img/Spiderman.png'),
            color: 'red',
            size: 'XS'
        },

        {
            id: 11,
            title: 'France',
            price: 22,
            imageUrl: require('../components/img/France.png'),
            color: 'white',
            size: 'XL'
        },

        {
            id: 12,
            title: 'Marshmellow',
            price: 18,
            imageUrl: require('../components/img/Marshmellow.png'),
            color: 'pink',
            size: 'M'
        },

        {
            id: 13,
            title: 'Women',
            price: 33,
            imageUrl: require('../components/img/Women.png'),
            color: 'black',
            size: 'S'
        },


        {
            id: 14,
            title: 'Suzuki',
            price: 45,
            imageUrl: require('../components/img/Suzuki.png'),
            color: 'beige',
            size: 'XS'
        },


        {
            id: 15,
            title: 'NY',
            price: 60,
            imageUrl: require('../components/img/NY.png'),
            color: 'blue',
            size: 'L'
        },

        {
            id: 16,
            title: 'NY girl',
            price: 12,
            imageUrl: require('../components/img/NY girl.png'),
            color: 'black',
            size: 'XL'
        },

        {
            id: 17,
            title: 'Fix him',
            price: 34,
            imageUrl: require('../components/img/Fix him.png'),
            color: 'green',
            size: 'M'
        },

        {
            id: 18,
            title: 'Cherry bomb',
            price: 25,
            imageUrl: require('../components/img/Fix him-1.png'),
            color: 'white',
            size: 'XS'
        },

        {
            id: 19,
            title: 'Blue flower',
            price: 35,
            imageUrl: require('../components/img/Flower.png'),
            color: 'blue',
            size: 'L'
        },

        {
            id: 20,
            title: 'Hysteric',
            price: 26,
            imageUrl: require('../components/img/Hysteric.png'),
            color: 'gray',
            size: 'S'
        },

        /*{
            id: 21,
            title: 'Marshmellow',
            price: 13,
            imageUrl: require('../components/img/'),
            color: 'pink',
            size: 'M'
        },*/
    ]);

    return (
        <ItemsContext.Provider value={{ items, setItems }}>
            {children}
        </ItemsContext.Provider>
    );
};