import React from 'react';

const ProductList = () => {
    const products= [
        {id: 1, name: 'Midnight flame', color: 'Red', size: 'M', price: 20, image: require('./img/Midnight_flame.png')},
        {id: 2, name: 'Silver drops', color: 'Blue', size: 'L', price: 25, image: require('./img/Silver_drops.png')},
        {id: 3, name: 'Magnetic', color: 'Green', size: 'L', price: 25, image: require('./img/Magnetic.png')},
        {id: 4, name: 'Paper house', color: 'Yellow', size: 'M', price: 30, image: require('./img/Paper house.png')},
        {id: 5, name: 'Malicious', color: 'Red', size: 'XL', price: 18, image: require('./img/Malicious.png')},
        {id: 6, name: 'Energy', color: 'Blue', size: 'L', price: 22, image: require('./img/Energy.png')}
    ];

    return(
        <section className={'catalog'}>
            <h1 className="catalog_header">Choose your dream T-shirt</h1>
            <div className={'catalog_items'}>
                {products.map(product => (
                    <div key={product.id} className={'item'}>
                        <img src={product.image} alt={product.name} style={{width: '260px', height: '240px'}}
                             className={'item_image'}/>
                        <h3 className={'product_name'}>{product.name}</h3>
                        <p className={'product_price'}>${product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );

};


export default ProductList;
