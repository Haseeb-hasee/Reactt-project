// src/pages/CheckoutPage.jsx

// Practice...

// import React, { useState } from 'react';
// import { useCart } from '../context/CartContext';
// import { useNavigate } from 'react-router-dom';

// const CheckoutPage = () => {
//     const { cartItems, totalPrice, clearCart } = useCart();
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         address: '',
//         city: '',
//         city: '',
//         state: '',
//         zip: '', 
//         cardName: '',
//         cardNumber: '',
//         expDate: '',
//         cvv:'',

//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     }; 

//     const handleSubmit= (e) => {
//         e.preventDefault();
//         console.log('order Submitted:',{
//             customerInfo: formData,
//             orderItems: cartItems,
//             total: totalPrice,

//         });

//         clearCart();
//         navigate('/confirmation');

//     };

//     if (cartItems.length === 0) {
//         return (
//             <div className="container mx-auto px-6 py-12 text-center">
//                 <h2 className='text-2xl font-bold text-gray-800'>Your cart is empty.</h2>
//                 <p className='text-gray-600 mt-2'>There is nothing to check out</p>
//             </div>
//         );
//     }

//     return (
//         <div className='container mx-auto px-6 py-8'>
//             <h1 className='text-3xl font-col lg:flex-row gap-12'>

//                 <div className='lg:w-2/3'>
//                 <form id="checkout-form" onSubmit={handleSubmit}>
//                     <div className='bg-white p-6 rounded-lg shadow-md mb-8'>
//                         <h2 className='text-xl font-semibold mb-4'>Shipping Information</h2>
//                         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//                             <div>
//                                 <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Full Name</label>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//                 </div>
//             </h1>
//         </div>
//     )
// }

// src/pages/CheckoutPage.jsx

// import React, { useState } from 'react';
// import { useCart } from '../context/CartContext';
// import { useNavigate } from 'react-router-dom';

// const CheckoutPage = () => { // The component is defined here
//     const { cartItems, totalPrice, clearCart } = useCart();
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         address: '',
//         city: '',
//         state: '',
//         zip: '',
//         cardName: '',
//         cardNumber: '',
//         // expDate: '',
//         // cvv: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Order Submitted:', {
//             customerInfo: formData,
//             orderItems: cartItems,
//             total: totalPrice,
//         });
//         clearCart();
//         navigate('/confirmation');
//     };

//     if (cartItems.length === 0) {
//         return (
//             <div className="container mx-auto px-6 py-12 text-center">
//                 <h2 className="text-2xl font-bold text-gray-800">Your cart is empty.</h2>
//                 <p className="text-gray-600 mt-2">There is nothing to check out.</p>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto px-6 py-8">
//             <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
//             <div className="flex flex-col lg:flex-row gap-12">

//                 {/* Checkout Form */}
//                 <div className="lg:w-2/3">
//                     <form id="checkout-form" onSubmit={handleSubmit}>
//                         {/* Shipping Information */}
//                         <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//                             <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//                                     <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//                                     <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300
//                                     shadow-sm
//                                     focus:border-indigo-500 focus:ring-indigo-500" required />
//                                 </div>
//                                 <div className="md:col-span-2">
//                                     <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
//                                     <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
//                                     <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
//                                     <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP / Postal Code</label>
//                                     <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Payment Details */}
//                         <div className="bg-white p-6 rounded-lg shadow-md">
//                             <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div className="md:col-span-2">
//                                     <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Name on Card</label>
//                                     <input type="text" id="cardName" name="cardName" value={formData.cardName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
//                                 </div>
//                                 <div className="md:col-span-2">
//                                     <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
//                                     <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="0000 0000 0000 0000" required />
//                                 </div>
//                                 {/* <div>
//                                     <label htmlFor="expDate" className="block text-sm font-medium text-gray-700">Expiration Date</label>
//                                     <input type="text" id="expDate" name="expDate" value={formData.expDate} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="MM/YY" required />
//                                 </div> */}
//                                 {/* <div>
//                                     <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
//                                     <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
//                                 </div> */}
//                             </div>
//                         </div>
//                     </form>
//                 </div>

//                 {/* Order Summary */}
//                 <div className="lg:w-1/3">
//                     <div className="bg-white p-6 rounded-lg shadow-md sticky top-28">
//                         <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//                         <div className="space-y-4">
//                             {cartItems.map(item => (
//                                 <div key={item.id} className="flex justify-between items-center">
//                                     <div>
//                                         <p className="font-medium text-gray-800">{item.name}</p>
//                                         <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
//                                     </div>
//                                     <p className="text-gray-700">${(item.price *item.quantity).toFixed(2)}</p>
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="border-t my-4"></div>
//                         <div className="flex justify-between font-bold text-lg">

//                             <span>Total</span>
//                             <span>${totalPrice.toFixed(2)}</span>
//                         </div>
//                         <button
//                             type="submit"
//                             form="checkout-form"
//                             className="w-full mt-6 bg-pink-400 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors text-lg font-semibold"
//                         >
//                             Place Order
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default CheckoutPage;


import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const { cartItems, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardName: '',
        cardNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order Submitted:', {
            customerInfo: formData,
            orderItems: cartItems,
            total: totalPrice,
        });
        clearCart();
        navigate('/confirmation');
    };

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-2xl font-bold text-gray-800">Your cart is empty.</h2>
                <p className="text-gray-600 mt-2">There is nothing to check out.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-8">
            {/* Responsive heading size */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Checkout</h1>

            {/* RESPONSIVE MAIN LAYOUT:
                flex-col on mobile (form stacked on top of summary).
                lg:flex-row on large screens and up (two-column layout).
                gap-8 provides space between elements, increasing to lg:gap-12 on large screens. */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                {/* Checkout Form (takes 2/3 of the width on large screens) */}
                <div className="lg:w-2/3">
                    <form id="checkout-form" onSubmit={handleSubmit}>
                        {/* Shipping Information */}
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                            {/* RESPONSIVE FORM GRID:
                                1 column on mobile, switching to 2 columns on medium screens (md). */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
                                </div>
                                {/* md:col-span-2 makes this field span both columns on medium screens and up. */}
                                <div className="md:col-span-2">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
                                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
                                </div>

                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                    <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
                                </div>
                                <div>
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                                    <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
                                </div>
                                <div>
                                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP / Postal Code</label>
                                    <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
                                </div>
                            </div>
                        </div>

                        {/* Payment Details */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Name on Card</label>
                                    <input type="text" id="cardName" name="cardName" value={formData.cardName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                                    <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="0000 0000 0000 0000" required />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="lg:w-1/3">
                    <div className="bg-white p-6 rounded-lg shadow-md sticky top-28">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <div className="space-y-4">
                            {cartItems.map(item => (

                                <div key={item.id} className="flex justify-between items-start">
                                    <div className='flex-1 pr-4'>
                                        <p className="font-medium text-gray-800">{item.name}</p>
                                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                    </div>
                                    <p className="text-gray-700 font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="border-t my-4"></div>
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <button
                            type="submt"
                            form="checkout-form"
                            className="w-full mt-6 bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors text-lg font-semibold"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;