import React from 'react';

const SelectComponent = ({ value, onChange, options, className }) => {
    return (
        <select value={value} onChange={onChange} className={className}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SelectComponent;