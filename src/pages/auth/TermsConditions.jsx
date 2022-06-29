// import React from 'react'
// import  ReactDOM  from 'react-dom'
// import style from "./TermsCondtions.module.css"
// import { Card } from "@material-ui/core";
// import Checkbox from "@mui/material/Checkbox";

// const TermsConditions = ({ condition, modelCondition }) => {
//   return ReactDOM.createPortal(
//     <div className={style.mainContainer}>
//       <section className={style.cardForTermsConditions}>
//         <Card elevation={5}>
//           <article className={style.TitleCard}>
//             <h1>Terms and conditions</h1>
//           </article>
//           <li>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
//             recusandae quisquam alias! Velit error tempora mollitia aspernatur
//             id ab architecto quaerat nostrum commodi quis facilis atque, ipsum
//             recusandae totam non. Lorem ipsum dolor, sit amet consectetur
//             adipisicing elit. Beatae officia eveniet dolores assumenda dolore.
//             Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
//             molestias at veritatis, illo eligendi, soluta alias. Lorem, ipsum
//             dolor sit amet consectetur adipisicing elit. Architecto recusandae
//             quisquam alias! Velit error tempora mollitia aspernatur id ab
//             architecto quaerat nostrum commodi quis facilis atque, ipsum
//             recusandae totam non. Lorem ipsum dolor, sit amet consectetur
//             adipisicing elit. Beatae officia eveniet dolores assumenda dolore.
//           </li>
//           <li>
//             Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
//             molestias at veritatis, illo eligendi, soluta alias. Lorem, ipsum
//             dolor sit amet consectetur adipisicing elit. Architecto recusandae
//             quisquam alias! Velit error tempora mollitia aspernatur id ab
//             architecto quaerat nostrum commodi quis facilis atque, ipsum
//             recusandae totam non. Lorem ipsum dolor, sit amet consectetur
//             adipisicing elit. Beatae officia eveniet dolores assumenda dolore.
//             Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
//             molestias at veritatis, illo eligendi, soluta alias.
//           </li>
//           <li>
//             Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
//             molestias at veritatis, illo eligendi, soluta alias. Lorem, ipsum
//             dolor sit amet consectetur adipisicing elit. Architecto recusandae
//             quisquam alias! Velit error tempora mollitia aspernatur id ab
//             architecto quaerat nostrum commodi quis facilis atque, ipsum
//             recusandae totam non. Lorem ipsum dolor, sit amet consectetur
//             adipisicing elit. Beatae officia eveniet dolores assumenda dolore.
//             Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
//             molestias at veritatis, illo eligendi, soluta alias.
//           </li>
//           <li>
//             Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
//             molestias at veritatis, illo eligendi, soluta alias. Lorem, ipsum
//             dolor sit amet consectetur adipisicing elit. Architecto recusandae
//             quisquam alias! Velit error tempora mollitia aspernatur id ab
//             architecto quaerat nostrum commodi quis facilis atque, ipsum
//             recusandae totam non. Lorem ipsum dolor, sit amet consectetur
//             adipisicing elit. Beatae officia eveniet dolores assumenda dolore.
//             Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
//             molestias at veritatis, illo eligendi, soluta alias.
//           </li>
//           <li>
//             Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
//             molestias at veritatis, illo eligendi, soluta alias. Lorem, ipsum
//             dolor sit amet consectetur adipisicing elit. Architecto recusandae
//             quisquam alias! Velit error tempora mollitia aspernatur id ab
//             architecto quaerat nostrum commodi quis facilis atque, ipsum
//             recusandae totam non. Lorem ipsum dolor, sit amet consectetur
//             adipisicing elit. Beatae officia eveniet dolores assumenda dolore.
//             Nobis aliquam mollitia et minima illum maiores nesciunt deserunt,
//             molestias at veritatis, illo eligendi, soluta alias.
//           </li>
//           <footer>
//             <Checkbox
//               type="checkbox"
//               className={style.checkbox}
//               onChange={() => condition(false)}
//               required
//               lable="I,Accept"
//             ></Checkbox>
//             "I,Accept"
//             <button className={style.btn} onClick={() => modelCondition()}>
//               close
//             </button>
//           </footer>
//         </Card>
//       </section>
//     </div>,
//     document.getElementById("portal-root")
//   );
// };

// export default TermsConditions

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function TermsConditions({ condition, modelCondition }) {
  const [open, setOpen] = React.useState(true);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
    modelCondition(false);
    condition(false)
  };

  const handleAgree = () => {
    setOpen(false);
    modelCondition(false);
    condition(true)
  }

  React.useEffect(() => {
    handleClickOpen("paper");
  },[])

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      {/* <Button onClick={handleClickOpen("paper")}>scroll=paper</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Terms Conditions</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAgree}>I Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
