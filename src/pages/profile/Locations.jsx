// import React from 'react'
// import Location from "./location.module.css"
// import ClearIcon from "@mui/icons-material/Clear";

// const Locations = ({ addAddress, setaddAddress, setDisplay, display,setLocations }) => {
  
//   let handleSubmit = (e) => {
    
//     e.preventDefault();
//     console.log("hi")
//     setaddAddress([...addAddress, display])
//     setLocations(false)
//   }

//   let handleChange = (e, props) => {
//     console.log(props)
//     setDisplay({...display,[props]:e.target.value})
//   }

//   let { street, landMark, city, state, pincode, country } = display;
//   return (
//     <>
//       <section className={Location.blur}></section>
//       <section className={Location.section}>
//         <div className={Location.icon}>
//           <ClearIcon onClick={() => setLocations(false)} />
//         </div>
//         <article className={Location.article}>
//           <h1>Address Details</h1>

//           <form>
//             <div className={Location.div}>
//               <div>
//                 <label htmlFor="">Street:</label>
//                 <input
//                   type="text"
//                   value={street}
//                   onChange={e => handleChange(e, "street")}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="">landMark:</label>
//                 <input
//                   type="text"
//                   value={landMark}
//                   onChange={e => handleChange(e, "landMark")}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="">City:</label>
//                 <input
//                   type="text"
//                   value={city}
//                   onChange={e => handleChange(e, "city")}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="">State:</label>
//                 <input
//                   type="text"
//                   value={state}
//                   onChange={e => handleChange(e, "state")}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="">Pincode:</label>
//                 <input
//                   type="text"
//                   value={pincode}
//                   onChange={e => handleChange(e, "pincode")}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="">Country:</label>
//                 <input
//                   type="text"
//                   value={country}
//                   onChange={e => handleChange(e, "country")}
//                 />
//               </div>
//             </div>
//           </form>
//           <button className={Location.btn} onClick={handleSubmit}>
//             SUMBIT
//           </button>
//         </article>
//       </section>
//     </>
//   );
// }

// export default Locations





import React from "react";
import Location from "./location.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import { Card, makeStyles, Checkbox } from "@material-ui/core";
import clsx from "clsx";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});


const Locations = ({
  addAddress,
  setaddAddress,
  setDisplay,
  display,
  setLocations,
}) => {

  let handleSubmit = e => {
    e.preventDefault();
    console.log("hi");
    setaddAddress([...addAddress, display]);
    setLocations(false);
  };

  let handleChange = (e, props) => {
    console.log(props);
    setDisplay({ ...display, [props]: e.target.value });
  };

  let { street, landMark, city, state, pincode, country } = display;
  return (
    <>
      <section className={Location.blur}></section>
      <section className={Location.section}>
        <div className={Location.icon}>
          <ClearIcon onClick={() => setLocations(false)} />
        </div>
        <article className={Location.article}>
          <h1>Address Details</h1>
          <form>
            <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
            
          </form>

          <button className={Location.btn} onClick={handleSubmit}>
            SUMBIT
          </button>
        </article>
      </section>
    </>
  );
};

export default Locations;
