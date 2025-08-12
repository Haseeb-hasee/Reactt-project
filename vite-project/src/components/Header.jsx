// // src/components/Header.jsx
// import React from 'react';

// const Header = ({ cartCount }) => {
//     return (
//         <header className='bg-white shadow-md sticky top-0 z-10'>
//             <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
//                 {/* Logo */}
//                 <div className='flex items-center space-x-2'>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                     </svg>
//                     <h1 className='text-2xl font-bold text-gray'>TechTrove</h1>
//                 </div>

//                 {/* Cart Icon */}
//                 <div className="relative">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                     </svg>
//                     {cartCount > 0 && (
//                         <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>{cartCount}
//                         </span>

//                     )}
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;


// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
    const { cartCount } = useCart();

    return (
        <header className='bg-white shadow-md sticky top-0 z-10'>
            <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
                {/* Logo */}
                <Link to="/" className='flex items-center space-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h1 className='text-2xl font-bold text-gray-800'>TechTrove</h1>
                </Link>

                {/* Cart Icon */}
                <Link to="/cart" className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600 hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {cartCount > 0 && (
                        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                            {cartCount}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    );
};

export default Header;