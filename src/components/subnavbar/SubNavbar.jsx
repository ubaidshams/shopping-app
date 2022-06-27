import React from "react";
import Menu from "./Menu";
import styles from "./menu.module.css";

const SubNavbar = () => {
  return (
    <div className={styles.catMenu}>
      <Menu />
    </div>
  );
};

export default SubNavbar;
