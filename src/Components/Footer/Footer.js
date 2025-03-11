import React from 'react'
import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div className={classes.footer_content_wrapper}>
        <p>
          All-rights reserved @2025 <strong>Maryam Abiola</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;