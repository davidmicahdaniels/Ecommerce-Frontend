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


function App() {
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
          <Route exact path="/ProductDetails" element={<ProductDetails />} />
          <Route exact path="/VendorDashboard" element={<VendorDashboard />} />
          <Route exact path="/VendorFeedbacks" element={<VendoFeedbackRoute />} />
          <Route exact path="/VendorProfile" element={<VendorProfileRoute />} />
          <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
