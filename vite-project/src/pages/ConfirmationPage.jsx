// src/pages/ConfirmationPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
    return (
        <div className="container mx-auto px-6 py-20 text-center">
            <div className="bg-white p-12 rounded-lg shadow-xl max-w-2xl mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-4xl font-semibold text-blue-600 hover:text-blue-800">Thank you for your order!</h2>
                <p className="text-gray-600 mt-4 text-lg">
                    Your order has been placed successfully. We've sent a confirmation email to you with the order details.
                </p>
                <Link to="/" className="mt-10 inline-block bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors text-lg font-semibold">
                    Return to Homepage
                </Link>
            </div>
        </div>
    );
};

export default ConfirmationPage;