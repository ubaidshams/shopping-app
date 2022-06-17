import React, { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import styles from "../cart.module.css"

function Item(props) {
    console.log(props);
  let data = props;
  console.log(props.index)
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
          <motion.div className={styles.avatar} layout >{ props.index}</motion.div>
      <AnimatePresence>{isOpen && <Content data={data} />}</AnimatePresence>
    </motion.li>
  );
}
function Content(props) {
  console.log("data from Contet comp", props.data);
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.row}></div>
      <div className={styles.row} />
      <div className={styles.row} />
    </motion.div>
  );
}



const Cart = () => {
    
    const [dummy,setDummy] = useState([])
    useEffect(async () => {
        let { products } = await (await fetch("https://dummyjson.com/products")).json();
        console.log(products);
      setDummy(products)
      
    },[])
    return (
    
      <AnimateSharedLayout>
      
          <motion.ul layout initial={{ borderRadius: 25 }}>
            {dummy.map((item,index) => (
              <Item key={item} index={index} />
            ))}
          </motion.ul>
        </AnimateSharedLayout>
      
    );
};

export default Cart;
