import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import UserSignupForm from '../../Components/UserSignupForm/UserSignupForm';

const UserSignup = () => {
  return (
    <>
      <Navbar />
      <UserSignupForm />
      <Footer />
    </>
  );
}

export default UserSignup;