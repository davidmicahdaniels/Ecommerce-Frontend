import React from 'react'
import classes from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.nav_content_wrapper}>
        <h1>Logo</h1>

        <ul className={classes.nav_links_wrapper}>
          <li>Home</li>
          <li>Category</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

        <div className={classes.searchbar_wrapper}>
          icon
          <input type="text" />
        </div>

        <div className={classes.nav_buttons_wrapper}>
          <button>Sign up</button>
          <button>Sign in</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;