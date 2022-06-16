import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Logo = () => {
  return (
    <div className={styles.logoBlock}>
      <Link to="/">
        <h1>ShoppingKart</h1>
        <img
          src="https://ouch-cdn2.icons8.com/7wVlzGFS36SxALSNFoZ6g606zRFhVZqIsWKumR90-HU/rs:fit:256:361/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTY2/LzlmZTNlMDRhLWMz/MDYtNGJmYi04YTNh/LWJiMjllYmY5OTE4/Mi5wbmc.png"
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
