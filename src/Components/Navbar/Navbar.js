import React from 'react'
import classes from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav>
      <h1>Logo</h1>

      <ul class="nav_links_wrapper">
        <li>Home</li>
        <li>Category</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

      <div class="searchbar_wrapper">
        icon
        <input type="text" />
      </div>

      <div class="nav_buttons_wrapper">
        <button>Sign up</button>
        <button>Sign in</button>
      </div>
    </nav>
  );
}

export default Navbar;