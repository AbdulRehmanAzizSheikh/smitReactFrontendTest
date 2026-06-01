import React from 'react';

// Props destructured: id, title, description, image, aur buttonText
function Card({ title, description, image, buttonText = "View Details" }) {
  return (
    <div className="bg-white block max-w-sm p-6 border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
      {/* Image Section */}
      <div className="overflow-hidden rounded-xl">
        <img 
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
          src={image} 
          alt={title} 
        />
      </div>

      {/* Content Section */}
      <div className="mt-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-1">
          {title}
        </h5>
        <p className="mb-6 text-sm text-gray-600 line-clamp-3 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;