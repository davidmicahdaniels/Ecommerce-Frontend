import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import UserLogin from "./Pages/UserLogin/UserLogin";
import UserSignup from "./Pages/UserSignup/UserSignup";
import Login from "./Components/Vendor/Login/Login";
import Signup from "./Components/Vendor/Signup/Signup";


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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
