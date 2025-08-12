// // src/App.jsx
// import React, { useState } from 'react';
// import Header from './components/Header';
// import ProductList from './components/ProductList';
// import Footer from './components/Footer';

// function App() {
//   const [cartCount, setCartCount] = useState(0);
//   const handleAddToCart = (product) => {
//     console.log(`Added ${product.name} to cart.`);
//     setCartCount(prevCount => prevCount + 1);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen font-sans">
//       <Header cartCount={cartCount} />
//       <main>
//         <ProductList onAddToCart={handleAddToCart} />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import CartPage from './pages/CartPage';
// import ConfirmationPage from './pages/ConfirmationPage';

// // Layout component to wrap pages with Header and Footer
// const AppLayout = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <Header />
//       <main className="flex-grow">
//         <Outlet /> {/* Child routes will render here */}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<AppLayout />}>
//           <Route index element={<HomePage />} />
//           <Route path="cart" element={<CartPage />} />
//           <Route path="confirmation" element={<ConfirmationPage />} />
//           {/* You can add more routes here, e.g., for individual product pages */}
//           {/* <Route path="product/:id" element={<ProductDetailPage />} /> */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import CartPage from './pages/CartPage';
// import ConfirmationPage from './pages/ConfirmationPage';
// import CheckoutPage from './pages/CheckoutPage'; // 1. Import the new page

// // Layout component to wrap pages with Header and Footer
// const AppLayout = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <Header />
//       <main className="flex-grow">
//         <Outlet /> {/* Child routes will render here */}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<AppLayout />}>
//           <Route index element={<HomePage />} />
//           <Route path="cart" element={<CartPage />} />
//           <Route path="checkout" element={<CheckoutPage />} /> {/* 2. Add the route */}
//           <Route path="confirmation" element={<ConfirmationPage />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;





// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ConfirmationPage from './pages/ConfirmationPage';
import CheckoutPage from './pages/CheckoutPage'; // 1. IMPORT THE NEW PAGE

// Layout component to wrap pages with Header and Footer
const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* Child routes will render here */}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} /> {/* 2. ADD THE ROUTE HERE */}
          <Route path="confirmation" element={<ConfirmationPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;