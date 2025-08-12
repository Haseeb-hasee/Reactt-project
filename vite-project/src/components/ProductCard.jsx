// // src/components/ProductCard.jsx
// import React from 'react';

// const ProductCard = ({ product, onAddToCart }) => {
//     return (
//         <div className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300'>
//             <img className='w-full h-56 object-cover object-center' src={product.imageUrl} alt={product.name} />
//             <div className="p-4">
//                 <h3 className="text-sm text-gray-500">{product.category}</h3>
//                 <h2 className="text-lg font-semibold text-gray-800 mt-1 truncate">{product.name}</h2>

//                 <div className='flex items-center mt-2'>
//                     <div className="flex items-center">
//                         {[...Array(5)].map((_, i) => (
//                             <svg key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
//                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                             </svg>
//                         ))}
//                     </div>
//                     <span className="txt-gray-600 text-sm ml-2">{product.reviews} reviews</span>
//                 </div>

//                 <div className="flex items-center justify-between mt-4">
//                     <span className="text-xl font-bold text-gray-900">${product.price}</span>
//                     <button
//                         onClick={() => onAddToCart(product)}
//                         className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors"
//                     >
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;


// // src/components/ProductCard.jsx
// import React from 'react';
// import { useCart } from '../context/CartContext';

// const ProductCard = ({ product }) => {
//     const { addToCart } = useCart();

//     return (
//         <div className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-400 flex flex-col'>
//             <img className='w-full h-56 object-cover object-center' src={product.imageUrl} alt={product.name} />
//             <div className="p-4 flex flex-col flex-grow">
//                 <h3 className="text-sm text-gray-500">{product.category}</h3>
//                 <h2 className="text-lg font-semibold text-gray-800 mt-1 truncate">{product.name}</h2>

//                 <div className='flex items-center mt-2'>
//                     <div className="flex items-center">
//                         {[...Array(5)].map((_, i) => (
//                             <svg key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
//                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                             </svg>
//                         ))}
//                     </div>
//                     <span className="text-gray-600 text-sm ml-2">{product.reviews} reviews</span>
//                 </div>

//                 <div className="flex items-center justify-between mt-auto pt-4">
//                     <span className="text-xl font-bold text-gray-900">${product.price}</span>
//                     <button
//                         onClick={() => addToCart(product)}
//                         className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors"
//                     >
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;

import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (

        <div className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col'>
            <img className='w-full h-56 object-cover object-center' src={product.imageUrl} alt={product.name} />

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-sm text-gray-500">{product.category}</h3>

                <h2 className="text-base md:text-lg font-semibold text-gray-800 mt-1 truncate">{product.name}</h2>

                <div className='flex items-center mt-2'>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">{product.reviews} reviews</span>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4">

                    <span className="text-lg md:text-xl font-bold text-gray-900">${product.price}</span>
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;