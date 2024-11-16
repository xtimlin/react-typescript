import React from 'react';

const ProductCard: React.FC = () => {
  const item = {
    name: 'apple',
    price: 6.99,
    image:
      'https://hips.hearstapps.com/hmg-prod/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=1.00xw:0.631xh;0.00160xw,0.206xh&resize=1200:*',
    description: 'apple a day keeps the doctor away',
  };

  return (
    <div>
      {/*<img src={item.image} alt={item.name} />*/}
      {/*<h1>{item.name} {item.price}</h1>*/}

      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl shadow-lg max-w-xs mx-auto">
        {/* Gift Card Image */}
        <div
          className="w-full h-48 bg-cover bg-center rounded-lg overflow-hidden mb-4"
          // style={{ backgroundImage: 'url(\'https://via.placeholder.com/150\')' }}>
          style={{ backgroundImage: `url(${item.image})` }}
        >
          {/* Placeholder image URL, replace with actual image URL */}
        </div>

        {/* Card Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {item.name}
        </h3>

        {/* Price Range */}
        <p className="text-gray-600 mb-4">${item.price}</p>

        {/* Buy Now Button */}
        <button className="bg-purple-700 text-white py-2 px-6 rounded-lg hover:bg-purple-800 transition duration-200">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
