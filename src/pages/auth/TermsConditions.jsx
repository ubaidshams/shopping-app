import React from 'react'
import  ReactDOM  from 'react-dom'
import style from "./TermsCondtions.module.css"
import { Card } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
const TermsConditions = ({ condition, modelCondition }) => {
  return ReactDOM.createPortal(
    <div className={style.mainContainer}>
      <section className={style.cardForTermsConditions}>
        <Card elevation={5}>
          <article className={style.TitleCard}>
            <h1>Terms and conditions</h1>
          </article>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            recusandae quisquam alias! Velit error tempora mollitia aspernatur
            id ab architecto quaerat nostrum commodi quis facilis atque, ipsum
            recusandae totam non. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Beatae officia eveniet dolores assumenda dolore.
            Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
            molestias at veritatis, illo eligendi, soluta alias. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Architecto recusandae
            quisquam alias! Velit error tempora mollitia aspernatur id ab
            architecto quaerat nostrum commodi quis facilis atque, ipsum
            recusandae totam non. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Beatae officia eveniet dolores assumenda dolore.
          </li>
          <li>
            Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
            molestias at veritatis, illo eligendi, soluta alias. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Architecto recusandae
            quisquam alias! Velit error tempora mollitia aspernatur id ab
            architecto quaerat nostrum commodi quis facilis atque, ipsum
            recusandae totam non. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Beatae officia eveniet dolores assumenda dolore.
            Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
            molestias at veritatis, illo eligendi, soluta alias.
          </li>
          <li>
            Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
            molestias at veritatis, illo eligendi, soluta alias. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Architecto recusandae
            quisquam alias! Velit error tempora mollitia aspernatur id ab
            architecto quaerat nostrum commodi quis facilis atque, ipsum
            recusandae totam non. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Beatae officia eveniet dolores assumenda dolore.
            Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
            molestias at veritatis, illo eligendi, soluta alias.
          </li>
          <li>
            Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
            molestias at veritatis, illo eligendi, soluta alias. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Architecto recusandae
            quisquam alias! Velit error tempora mollitia aspernatur id ab
            architecto quaerat nostrum commodi quis facilis atque, ipsum
            recusandae totam non. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Beatae officia eveniet dolores assumenda dolore.
            Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
            molestias at veritatis, illo eligendi, soluta alias.
          </li>
          <li>
            Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
            molestias at veritatis, illo eligendi, soluta alias. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Architecto recusandae
            quisquam alias! Velit error tempora mollitia aspernatur id ab
            architecto quaerat nostrum commodi quis facilis atque, ipsum
            recusandae totam non. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Beatae officia eveniet dolores assumenda dolore.
            Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
            molestias at veritatis, illo eligendi, soluta alias.
          </li>
          <footer>
            <Checkbox
              type="checkbox"
              className={style.checkbox}
              onChange={() => condition(false)}
              required
              lable="I,Accept"
            ></Checkbox>
            "I,Accept"
            <button className={style.btn} onClick={() => modelCondition()}>
              close
            </button>
          </footer>
        </Card>
      </section>
    </div>,
    document.getElementById("portal-root")
  );
};

export default TermsConditions