// // src/components/ProductList.jsx

// import React from 'react';
// import ProductCard from './ProductCard';
// import { products } from '../data/products';

// const ProductList = ({ onAddToCart }) => {
//     return (
//         <div className='container mx-auto px-6 py-8'>
//             <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>Our Hottest Tech</h2>
//             <div className='grid grid-cols-1 sm-grid-cols-2 lg:grid-cols-3 gap-8'>
//                 {products.map((product) => (
//                     <ProductCard key = {product.id} product={product}
//                     onAddToCart={onAddToCart}/>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default ProductList;



// src/components/ProductList.jsx

import React from "react";
import ProductCard from "./ProductCard";
import { products } from '../data/products';

const ProductList = () => {
    return (
        <div className="container mx-auto px-6 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Hottest Tech</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;