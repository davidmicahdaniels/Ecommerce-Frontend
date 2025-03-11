import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import UserSignupForm from '../../Components/UserSignupForm/UserSignupForm';
import UserLoginForm from '../../Components/UserLoginForm/UserLoginForm';

const UserLogin = () => {
  return (
    <>
      <Navbar />
      <UserLoginForm />
      <Footer />
    </>
  );
};

export default UserLogin;