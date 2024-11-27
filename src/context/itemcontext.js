import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([
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
    ]);

    return (
        <ItemsContext.Provider value={{ items, setItems }}>
            {children}
        </ItemsContext.Provider>
    );
};