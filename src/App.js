import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import UserLogin from "./Pages/UserLogin/UserLogin";
import UserSignup from "./Pages/UserSignup/UserSignup";
import Login from "./Components/Vendor/Login/Login";
import Signup from "./Components/Vendor/Signup/Signup";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import VendorDashboard from "./VendorsDashboard/VendorDashboard";
import VendoFeedbackRoute from "./VendorsDashboard/Routes/VendoFeedbackRoute";
import VendorProfileRoute from "./VendorsDashboard/Routes/VendorProfileRoute";
import ManageProductRoute from "./VendorsDashboard/Routes/ManageProductRoute";
import OrderCheckout from "./Pages/OrderCheckout/OrderCheckout";
import { useEffect, useState } from "react";


export function useCartCount() {
  const [cartCount, setCartCount] = useState(() => {
    const items = JSON.parse(localStorage.getItem('cartProducts') || '[]');
    return items.length;
  });

  useEffect(() => {
    const checkCart = () => {
      const items = JSON.parse(localStorage.getItem('cartProducts') || '[]');
      setCartCount(items.length);
    };

    // Update regularly in same tab
    const interval = setInterval(checkCart, 300);

    // Optional: respond to cross-tab storage events
    window.addEventListener('storage', checkCart);

    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', checkCart);
    };
  }, []);

  return cartCount;
}


export function getAppLocalStorage() {
  return {
    isUserLoggedIn: localStorage.getItem('isUserLoggedIn') === 'true',
    currentProductCategory: localStorage.getItem('currentProductCategory'),
    selectedProductDetails: JSON.parse(localStorage.getItem('selectedProductDetails') || '{}'),
    cartProducts: JSON.parse(localStorage.getItem('cartProducts') || '[]')
  };
}

function App() {
  useEffect(() => {
    // Set default values if they are not already in localStorage
    if (localStorage.getItem('isUserLoggedIn') === null) {
      localStorage.setItem('isUserLoggedIn', 'false');
    }

    if (localStorage.getItem('currentProductCategory') === null) {
      localStorage.setItem('currentProductCategory', 'food'); 
    }

    if (localStorage.getItem('selectedProductDetails') === null) {
      localStorage.setItem('selectedProductDetails', JSON.stringify({}));
    }

    if (localStorage.getItem('cartProducts') === null) {
      localStorage.setItem('cartProducts', JSON.stringify([]));
    }
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/usersignup" element={<UserSignup />} />
          <Route exact path="/userlogin" element={<UserLogin />} />
          <Route exact path="/vendorlogin" element={<Login />} />
          <Route exact path="/vendorsignup" element={<Signup />} />
          <Route exact path="/shop" element={<UserDashboard />} />
          <Route exact path="/OrderCheckout" element={<OrderCheckout />} />
          <Route exact path="/ProductDetails" element={<ProductDetails />} />
          <Route exact path="/VendorDashboard" element={<VendorDashboard />} />
          <Route exact path="/VendorReviews" element={<VendoFeedbackRoute />} />
          <Route exact path="/VendorProfile" element={<VendorProfileRoute />} />
          <Route exact path="/ManageProductRoute" element={<ManageProductRoute />} />
          <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
