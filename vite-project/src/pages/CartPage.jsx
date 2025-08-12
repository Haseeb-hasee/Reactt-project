// // src/pages/CartPage.jsx
// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { Link, useNavigate } from 'react-router-dom';

// const CartPage = () => {
//     const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
//     const navigate = useNavigate();

//     const handleCheckout = () => {
//         // In a real app, this would involve payment processing
//         console.log('Proceeding to checkout with total:', totalPrice);
//         clearCart();
//         navigate('/confirmation');
//     };

//     if (cartItems.length === 0) {
//         return (
//             <div className="container mx-auto px-6 py-12 text-center">
//                 <h2 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h2>
//                 <p className="text-gray-600 mt-4">Looks like you haven't added anything to your cart yet.</p>
//                 <Link to="/" className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
//                     Continue Shopping
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto px-6 py-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-8">Your Shopping Cart</h2>
//             <div className="bg-white shadow-md rounded-lg p-6">
//                 {cartItems.map(item => (
//                     <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between py-4 border-b last:border-b-0">
//                         <div className="flex items-center mb-4 sm:mb-0">
//                             <img src={item.imageUrl} alt={item.name} className="h-20 w-20 object-cover rounded mr-4" />
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                                 <p className="text-gray-500">${item.price.toFixed(2)}</p>
//                             </div>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                             <div className="flex items-center border rounded">
//                                 <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-lg">-</button>
//                                 <span className="px-3 py-1">{item.quantity}</span>
//                                 <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-lg">+</button>
//                             </div>
//                             <span className="font-semibold w-24 text-right">${(item.price * item.quantity).toFixed(2)}</span>
//                             <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//                 <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
//                     <div className="text-2xl font-bold mb-4 sm:mb-0">
//                         Total: <span className="text-indigo-600">${totalPrice.toFixed(2)}</span>
//                     </div>
//                     <button
//                         onClick={handleCheckout}
//                         className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors text-lg font-semibold"
//                     >
//                         Proceed to Checkout
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CartPage;


// // src/pages/CartPage.jsx
// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { Link } from 'react-router-dom'; // No longer need useNavigate

// const CartPage = () => {
//     // Removed useNavigate and handleCheckout function
//     const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

//     if (cartItems.length === 0) {
//         return (
//             <div className="container mx-auto px-6 py-12 text-center">
//                 <h2 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h2>
//                 <p className="text-gray-600 mt-4">Looks like you haven't added anything to your cart yet.</p>
//                 <Link to="/" className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
//                     Continue Shopping
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto px-6 py-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-8">Your Shopping Cart</h2>
//             <div className="bg-white shadow-md rounded-lg p-6">
//                 {cartItems.map(item => (
//                     <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between py-4 border-b last:border-b-0">
//                         {/* ... (rest of the item mapping is unchanged) ... */}
//                         <div className="flex items-center mb-4 sm:mb-0">
//                             <img src={item.imageUrl} alt={item.name} className="h-20 w-20 object-cover rounded mr-4" />
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                                 <p className="text-gray-500">${item.price.toFixed(2)}</p>
//                             </div>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                             <div className="flex items-center border rounded">
//                                 <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-lg">-</button>
//                                 <span className="px-3 py-1">{item.quantity}</span>
//                                 <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-lg">+</button>
//                             </div>
//                             <span className="font-semibold w-24 text-right">${(item.price * item.quantity).toFixed(2)}</span>
//                             <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//                 <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
//                     <div className="text-2xl font-bold mb-4 sm:mb-0">
//                         Total: <span className="text-indigo-600">${totalPrice.toFixed(2)}</span>
//                     </div>
//                     {/* MODIFICATION: Changed button to a Link */}
//                     <Link
//                         to="/checkout"
//                         className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors text-lg font-semibold text-center"
//                     >
//                         Proceed to Checkout
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CartPage;

import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h2>
                <p className="text-gray-600 mt-4">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/" className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">Your Shopping Cart</h2>
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
                {/* Cart Item Loop */}
                {cartItems.map(item => (
                    // RESPONSIVE ITEM LAYOUT:
                    // flex-col on mobile (stacked) and sm:flex-row on small screens and up (side-by-side).
                    // items-center aligns items vertically.
                    // justify-between spreads the product info and controls apart on wider screens.
                    <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between py-4 border-b last:border-b-0">

                        {/* Product Info (Image & Name) */}
                        <div className="flex items-center mb-4 sm:mb-0 w-full sm:w-auto">
                            <img src={item.imageUrl} alt={item.name} className="h-20 w-20 object-cover rounded mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-gray-500">${item.price.toFixed(2)}</p>
                            </div>
                        </div>

                        {/* Controls (Quantity, Price, Remove) */}
                        {/* RESPONSIVE CONTROLS LAYOUT: */}
                        {/* On mobile: w-full (takes full width), justify-between (spreads out controls). */}
                        {/* On sm screens: w-auto (takes content width), space-x-4 (adds horizontal space). */}
                        <div className="flex items-center justify-between w-full sm:w-auto sm:justify-start sm:space-x-4 mt-4 sm:mt-0">
                            <div className="flex items-center border rounded">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-lg">-</button>
                                <span className="px-3 py-1">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-lg">+</button>
                            </div>
                            <span className="font-semibold w-24 text-right">${(item.price * item.quantity).toFixed(2)}</span>
                            <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 pl-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}

                {/* Cart Total & Checkout Button */}
                {/* RESPONSIVE FOOTER LAYOUT: */}
                {/* flex-col on mobile (total stacked on top of button). */}
                {/* sm:flex-row on small screens and up (side-by-side). */}
                {/* justify-between spreads them apart. */}
                <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
                    <div className="text-2xl font-bold mb-4 sm:mb-0">
                        Total: <span className="text-indigo-600">${totalPrice.toFixed(2)}</span>
                    </div>
                    <Link
                        to="/checkout"
                        className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors text-lg font-semibold text-center"
                    >
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;