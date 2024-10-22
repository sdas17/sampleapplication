// src/components/Avatar.js
import React from 'react';
import './Avatar.css'; // Optional: For styling

const Avatar = ({ src, alt, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`avatar ${className}`}
        />
    );
};

export default Avatar;
