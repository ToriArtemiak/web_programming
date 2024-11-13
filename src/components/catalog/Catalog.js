import React from 'react';
import {useContext} from "react";
import {useState} from "react";
/*
import Productlist from "../home/productlist/Productlist";
*/
import { ItemsContext } from '/Users/viktoriaartemiak/WebstormProjects/lab7/src/context/itemcontext.js';
import CatalogItem from '/Users/viktoriaartemiak/WebstormProjects/lab7/src/components/catalog/ catalogItem/catalogItem.js';
import InputComponent from '/Users/viktoriaartemiak/WebstormProjects/lab7/src/components/catalog/inputComponents/inputcomponent.js';
import SelectComponent from './selectComponent/selectComponent';
import SortButton from './sortButton/sortButton';
import '/Users/viktoriaartemiak/WebstormProjects/lab7/src/components/catalog/catalog.css';

const Catalog = () => {
    const { items } = useContext(ItemsContext);
    const [sortOrder, setSortOrder] = useState('desc');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    const filteredItems = items.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase().trim());
        const matchesColor = selectedColor ? item.color === selectedColor : true;
        const matchesSize = selectedSize ? item.size === selectedSize : true;
        return matchesSearch && matchesColor && matchesSize;
    });

    const sortedItems = filteredItems.sort((a, b) => {
        return sortOrder === 'desc' ? b.price - a.price : a.price - b.price;
    });

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const handleColorChange = (e) => setSelectedColor(e.target.value);
    const handleSizeChange = (e) => setSelectedSize(e.target.value);
    const toggleSortOrder = () => setSortOrder(prevOrder => (prevOrder === 'desc' ? 'asc' : 'desc'));

    return (
        <div className="catalog">
            <div className="filters">
                <InputComponent
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by name..."
                    className="search-bar"
                />
                <SelectComponent
                    value={selectedColor}
                    onChange={handleColorChange}
                    className="filter-select"
                    options={[
                        { value: '', label: 'All Colors' },
                        { value: 'black', label: 'Black' },
                        { value: 'red', label: 'Red' },
                        { value: 'beige', label: 'Beige' },
                        { value: 'pink', label: 'Pink' },
                        { value: 'blue', label: 'Blue' },
                        { value: 'green', label: 'Green' },
                        { value: 'gray', label: 'Gray' }
                    ]}
                />
                <SelectComponent
                    value={selectedSize}
                    onChange={handleSizeChange}
                    className="filter-select"
                    options={[
                        { value: '', label: 'All Sizes' },
                        { value: 'XS', label: 'XS' },
                        { value: 'S', label: 'S' },
                        { value: 'M', label: 'M' },
                        { value: 'L', label: 'L' },
                        { value: 'XL', label: 'XL' }
                    ]}
                />


                <SortButton sortOrder={sortOrder} toggleSortOrder={toggleSortOrder} />
            </div>
            <div className="catalog-items">
                {sortedItems.length > 0 ? (
                    sortedItems.map((item, index) => (
                        <CatalogItem
                            key={index}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            size={item.size}
                            imageUrl={item.imageUrl}
                        />
                    ))
                ) : (
                    <p>No items match your search</p>
                )}
            </div>
        </div>
    );
};





    /*
    const Catalog = () => {
        return (
            <div id="catalog" className="catalog">
                <Productlist/>
            </div>
        );
    };
    */

export default Catalog;
