import React,{useContext, useState} from "react";
import styles from "./navbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import FeaturedProducts from "../featured products/FeaturedProducts";
import { MyContext } from "../../apis/MyContext";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  let { search, setsearch } = useContext(MyContext);
  let[csearch,setcsearch]=useState("")

  let navigate = useNavigate();
  
  let handlesubmit = () => {
setsearch(csearch);
    navigate("/search");
    

    
    


  }
  
  console.log(search)
  return (
    <div className={styles.searchBlock}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="Search for products brands and more"
          value={csearch}
          onChange={e => setcsearch(e.target.value)}
        />

        <AiOutlineSearch onClick={handlesubmit} />
      </div>
    </div>
  );
};

export default Menu;
