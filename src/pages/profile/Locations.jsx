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
import { Card, TextField, makeStyles, Checkbox } from "@material-ui/core";
import clsx from "clsx";
import { motion } from "framer-motion";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    width: 50,
  },
  formTextFieldName: {
    width: 200,
    spacing: 5,
    marginTop: 3,
  },
  formTextFieldOther: {
    spacing: 5,
    marginTop: 3,
    width: 420,
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  passwordField: {
    width: 420,
    height: 40,
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Locations = ({
  addAddress,
  setaddAddress,
  setDisplay,
  display,
  setLocations,
}) => {
  const classes = useStyles();

  let handleSubmit = e => {
    e.preventDefault();
    setaddAddress([...addAddress, display]);
    setLocations(false);
  };

  let handleChange = (e, props) => {
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
          <motion.div className={clsx(Location.formCard)}>
            <form style={{marginTop: "30px"}}>
              <Card
                elevation={0}
                style={{ backgroundColor: "transparent" }}
                className={Location.formCardContainer}
              >
                <TextField
                  className={classes.formTextFieldOther}
                  size="small"
                  id="outlined-size-small"
                  label="Street"
                  placeholder="eg-4th Street"
                  variant="outlined"
                  value={street}
                  required
                  onChange={e => handleChange(e, "street")}
                ></TextField>
              </Card>
              <Card
                elevation={0}
                style={{ backgroundColor: "transparent" }}
                className={Location.formCardContainer}
              >
                <TextField
                  className={classes.formTextFieldOther}
                  size="small"
                  id="outlined-size-small"
                  label="landMark"
                  placeholder="eg-near to church"
                  variant="outlined"
                  value={landMark}
                  required
                  onChange={e => handleChange(e, "landMark")}
                ></TextField>
              </Card>
              <Card
                elevation={0}
                style={{ backgroundColor: "transparent" }}
                className={Location.formCardContainer}
              >
                <TextField
                  className={classes.formTextFieldOther}
                  size="small"
                  id="outlined-size-small"
                  label="city"
                  placeholder="eg-Bangalore"
                  variant="outlined"
                  value={city}
                  required
                  onChange={e => handleChange(e, "city")}
                ></TextField>
              </Card>
              <Card
                elevation={0}
                style={{ backgroundColor: "transparent" }}
                className={Location.formCardContainer}
              >
                <TextField
                  className={classes.formTextFieldOther}
                  size="small"
                  id="outlined-size-small"
                  label="state"
                  placeholder="eg-Karnataka"
                  variant="outlined"
                  value={state}
                  required
                  onChange={e => handleChange(e, "state")}
                ></TextField>
              </Card>
              <Card
                elevation={0}
                style={{ backgroundColor: "transparent" }}
                className={Location.formCardContainer}
              >
                <TextField
                  className={classes.formTextFieldOther}
                  size="small"
                  id="outlined-size-small"
                  label="pincode"
                  placeholder="eg-654987"
                  variant="outlined"
                  value={pincode}
                  required
                  onChange={e => handleChange(e, "pincode")}
                ></TextField>
              </Card>
              <Card
                elevation={0}
                style={{ backgroundColor: "transparent" }}
                className={Location.formCardContainer}
              >
                <TextField
                  className={classes.formTextFieldOther}
                  size="small"
                  id="outlined-size-small"
                  label="country"
                  placeholder="eg-India"
                  variant="outlined"
                  value={country}
                  required
                  onChange={e => handleChange(e, "country")}
                ></TextField>
              </Card>
            </form>
            <button className={Location.btn} onClick={handleSubmit}>
              SUMBIT
            </button>
          </motion.div>
        </article>
      </section>
    </>
  );
};

export default Locations;
