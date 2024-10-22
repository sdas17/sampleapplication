// src/components/Input.js
import React from 'react';
import './Input.css'; // Optional: For styling

const Input = ({ type = 'text', value, onChange, placeholder, className }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`input ${className}`}
        />
    );
};

export default Input;
