import React, { useContext, useState } from 'react';
import { ItemsContext } from '/Users/viktoriaartemiak/WebstormProjects/lab7/src/context/itemcontext.js';
import ViewMoreButton from '../viewButton/viewButton';
import CatalogItem from '/Users/viktoriaartemiak/WebstormProjects/lab7/src/components/catalog/ catalogItem/catalogItem.js';
import '../tshirts/tshirts.css';
import '/Users/viktoriaartemiak/WebstormProjects/lab7/src/components/catalog/ catalogItem/catalogitem.css';

const Tshirts = () => {
    const { items } = useContext(ItemsContext);
    const [visibleItems, setVisibleItems] = useState(8);

    const handleViewMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 6);
    };

    return (
        <section className="catalog">
            <h2 className="catalog_header">Catalog</h2>
            <div className="catalog_items">
                {items.slice(0, visibleItems).map((tshirt) => (
                    <CatalogItem
                        key={tshirt.id}
                        id={tshirt.id}
                        title={tshirt.title}
                        price={tshirt.price}
                        description={tshirt.description}
                        imageUrl={tshirt.imageUrl}
                        size={tshirt.size}
                    />
                ))}
            </div>
            {visibleItems < items.length && (
                <ViewMoreButton onClick={handleViewMore} />
            )}
        </section>
    );
};

export default Tshirts;
