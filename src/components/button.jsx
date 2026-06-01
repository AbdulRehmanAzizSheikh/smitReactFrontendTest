import React from 'react';

function Button({ children, onClick, type = "button", variant = "primary", className = "" }) {
    const baseStyle = "px-4 py-2.5 rounded-xl font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-4 transition-all";

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-200",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-100",
        danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-200"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;