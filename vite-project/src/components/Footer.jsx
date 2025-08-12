// // src/components/Footer.jsx

// import React from 'react';

// const Footer = () => {
//     return (
//     <footer className='bg-gray-800 text-white mt-12'>
//         <div className='container mx-auto px-6 py-4 text-center'>
//             <p>© {new Date().getFullYear()} TechTrove. All rights reserved.</p>
//             <p className='text-sm text-gray-400 mt-1'>Your one-stop shop for the latest tech.</p>
//         </div>
//     </footer>
//     );
// };

// export default Footer;


// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white mt-auto'>
            <div className='container mx-auto px-6 py-4 text-center'>
                <p>© {new Date().getFullYear()} TechTrove. All rights reserved.</p>
                <p className='text-sm text-gray-400 mt-1'>Your one-stop shop for the latest tech.</p>
            </div>
        </footer>
    );
};

export default Footer;