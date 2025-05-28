import React from 'react'
import DashboardNavbar from '../../Components/DashboardNavbar/DashboardNavbar';
import CheckoutHero from '../../Components/CheckoutHero/CheckoutHero';
import Footer from '../../Components/Footer/Footer';
import CheckoutBody from '../../Components/CheckoutBody/CheckoutBody';

const OrderCheckout = () => {
  return (
    <div>
      <DashboardNavbar />
      <CheckoutHero />
      <CheckoutBody />
      <Footer />
    </div>
  )
}

export default OrderCheckout;