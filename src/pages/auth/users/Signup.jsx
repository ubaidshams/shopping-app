import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, TextField, makeStyles, Checkbox } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import style from "./signup.module.css";
import { motion } from "framer-motion";
import Axios from "../../../apis/Axios";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import "animate.css";
import clsx from "clsx";
import TermsConditions from "../TermsConditions";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";
import {toast} from "react-toastify"
import {useDispatch} from "react-redux"
import { OpenLogin } from "../../../features/Login/LoginSlice";
import { Country, State, City } from "country-state-city";

// import { motion, Variants } from "framer-motion";
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    width: 50,
  },
  formTextFieldName: {
    width: 200,
    // paddingLeft: 15,
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

const Signup = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("nopassword");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("male");
  const [payload, setPayload] = useState({});
  const [btnCondition, setBtnCondition] = useState(false);
  const [model, setModel] = useState(false);
  const [number1, setNumber1] = useState();
  const [address, setAddress] = useState(
    {
      house_no: "",
      street: "",
      landmark: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
    },
  );
  const [allCountries, setAllCountries] = useState([]);
  const [countryCode, setCountryCode] = useState('IN');
  const [allStates, setAllStates] = useState([]);
  const [allCity, setAllcity] = useState([])
  // const navigate = useNavigate()


   useEffect(() => {
     let allCountriesData = Country.getAllCountries().map(countryData => {
       return countryData.name;
     });
     setAllCountries(allCountriesData)
   }, []);
  
  
  function enableStateDropDown(countryCode1) {
    let allStatesData = State.getStatesOfCountry(`${countryCode1}`);
    setAllStates(allStatesData);
  }

  function enableCityDropDown(stateCode1) {
    let allCityData = City.getCitiesOfState(countryCode, stateCode1);
    setAllcity(allCityData);
  }
  

  const handleSubmit = e => {
    e.preventDefault();
    let currPayload = {
      firstName: fname,
      lastName: lname,
      email,
      password,
      gender,
      Phno: number1,
      address_list: [address],
    };
console.log("dskfjsdkj")
    setPayload(currPayload);
    console.log(payload);

    fetchData(currPayload);
    navigate("/")
  };

  const fetchData = async currPayload => {
    try {
      await axios.post("http://localhost:3001/user/signUp", currPayload);
      toast.success("successfully registered")
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <br />
      <motion.div className={clsx(style.formCard)}>
        <h1>Create Your Profile</h1>
        <section>
          One profile ID is all you need to access all KART services. You
          already have a profile?{" "}
          <a
            onClick={() => {
              dispatch(OpenLogin());
              navigate("/");
            }}
          >
            Find it here{" "}
          </a>
        </section>
        <form onSubmit={handleSubmit}>
          <Card
            style={{ backgroundColor: "transparent" }}
            elevation={0}
            className={style.formCardContainer}
          >
            <TextField
              className={classes.formTextFieldName}
              size="small"
              label="First Name"
              id="outlined-size-small"
              variant="outlined"
              required
              value={fname}
              onChange={e => {
                setFname(e.target.value);
              }}
            ></TextField>
            <TextField
              className={classes.formTextFieldName}
              size="small"
              label="Last Name"
              id="outlined-size-small"
              variant="outlined"
              required
              value={lname}
              onChange={e => {
                setLname(e.target.value);
              }}
            ></TextField>
          </Card>
          <Card
            elevation={0}
            style={{ backgroundColor: "transparent" }}
            className={style.formCardContainer}
          >
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={gender}
              onChange={e => setGender(e.target.value)}
            >
              <section
                style={{
                  display: "flex",
                  // alignItems: "baseline",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <FormLabel component="legend">Gender</FormLabel>
                <FormControlLabel
                  className={style.radioGroup}
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  className={style.radioGroup}
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  className={style.radioGroup}
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </section>
            </RadioGroup>
          </Card>
          {/* phone number1 mandatory */}
          <Card
            elevation={0}
            style={{ backgroundColor: "transparent" }}
            className={style.formCardContainer}
          >
            <TextField
              className={classes.formTextFieldOther}
              size="small"
              label="Phone Number"
              required
              placeholder="9856412537"
              id="outlined-size-small"
              variant="outlined"
              value={number1}
              onChange={e => setNumber1(e.target.value)}
            ></TextField>
          </Card>
          {/* number2 optional */}
          
          {/* address 1 is mandatory */}
          <Card
            elevation={0}
            style={{ backgroundColor: "transparent" }}
            className={style.formCardContainer}
          >
            <TextField
              className={classes.formTextFieldOther}
              size="small"
              id="outlined-size-small"
              label="House/Office-Number"
              placeholder="eg-142/87"
              variant="outlined"
              value={address.houseNo}
              required
              onChange={e => {
                setAddress({ ...address, houseNo: e.target.value });
              }}
            ></TextField>
          </Card>
          <Card
            elevation={0}
            style={{ backgroundColor: "transparent" }}
            className={style.formCardContainer}
          >
            <TextField
              className={classes.formTextFieldOther}
              size="small"
              id="outlined-size-small"
              label="Street"
              placeholder="eg-4th Street"
              variant="outlined"
              value={address.street}
              required
              onChange={e => {
                setAddress({ ...address, street: e.target.value });
              }}
            ></TextField>
          </Card>
          <Card
            elevation={0}
            style={{ backgroundColor: "transparent" }}
            className={style.formCardContainer}
          >
            <TextField
              className={classes.formTextFieldOther}
              size="small"
              id="outlined-size-small"
              variant="outlined"
              value={address.landmark}
              label="Landmark"
              required
              placeholder="eg-near This and That"
              onChange={e => {
                setAddress({ ...address, landmark: e.target.value });
              }}
            ></TextField>
          </Card>
          <Card
            elevation={0}
            style={{ backgroundColor: "transparent" }}
            className={style.formCardContainer}
          >
            {/* country */}
            <FormControl className={classes.formControl}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Country
              </InputLabel>
              {/* select country code */}
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={address.country}
                required
                onChange={e => {
                  setAddress({ ...address, country: e.target.value });
                  // set country code
                  let countryCode1 = "";
                  Country.getAllCountries().map(countryData => {
                    if (countryData.name == e.target.value) {
                      setCountryCode(countryData.isoCode);
                      countryCode1 = countryData.isoCode;
                    }
                  });

                  enableStateDropDown(countryCode1);
                }}
                displayEmpty
                className={classes.selectEmpty}
              >
                <MenuItem value=""></MenuItem>
                {allCountries.map((countryName, i) => {
                  return (
                    <MenuItem value={`${countryName}`} key={`${i}`}>
                      {`${countryName}`}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText>Select your Country</FormHelperText>
            </FormControl>

            {/* state */}
            <FormControl className={classes.formControl}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                State
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={address.state}
                required
                onChange={e => {
                  setAddress({ ...address, state: e.target.value });
                  // set state code
                  let stateCode1 = "";
                  State.getStatesOfCountry(`${countryCode}`).map(stateData => {
                    if (stateData.name == e.target.value) {
                      stateCode1 = stateData.isoCode;
                    }
                  });

                  enableCityDropDown(stateCode1);
                }}
                displayEmpty
                className={classes.selectEmpty}
              >
                <MenuItem value=""></MenuItem>
                {allStates.map((stateName, j) => {
                  return (
                    <MenuItem
                      value={`${stateName.name}`}
                      key={`${j}`}
                    >{`${stateName.name}`}</MenuItem>
                  );
                })}
              </Select>
              <FormHelperText>Select your State</FormHelperText>
            </FormControl>
            {/* cities */}
            <FormControl className={classes.formControl}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                city
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={address.city}
                required
                onChange={e => {
                  setAddress({ ...address, city: e.target.value });
                }}
                displayEmpty
                className={classes.selectEmpty}
              >
                <MenuItem value=""></MenuItem>
                {allCity.map((cityName, k) => {
                  return (
                    <MenuItem
                      value={`${cityName.name}`}
                      key={`${k}`}
                    >{`${cityName.name}`}</MenuItem>
                  );
                })}
              </Select>
              <FormHelperText>Select your city</FormHelperText>
            </FormControl>
          </Card>
          <Card
            elevation={0}
            style={{ backgroundColor: "transparent" }}
            className={style.formCardContainer}
          >
            <TextField
              className={classes.formTextFieldOther}
              size="small"
              variant="outlined"
              placeholder="eg-895641"
              label="Pincode"
              required
              value={address.pincode}
              onChange={e => {
                setAddress({ ...address, pincode: e.target.value });
              }}
            ></TextField>
          </Card>

          <Card
            elevation={0}
            style={{ backgroundColor: "transparent" }}
            className={style.formCardContainer}
          >
            <TextField
              className={classes.formTextFieldOther}
              size="small"
              label="Email Address"
              id="outlined-size-small email"
              variant="outlined"
              placeholder="exmaple@company.com"
              required
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            ></TextField>
          </Card>
          <Card
            elevation={0}
            style={{ backgroundColor: "transparent" , display:"none"}}
            className={style.formCardContainer}
          >
            <TextField
              className={classes.formTextFieldOther}
              size="small"
              label="Password"
              id="outlined-size-small password"
              variant="outlined"
              required
              value={password}
              type="password"
              onChange={e => {
                setPassword(e.target.value);
              }}
            ></TextField>
          </Card>
          <Card
            elevation={0}
            style={{ backgroundColor: "transparent" }}
            className={style.formCardContainer}
          >
            <TextField
              className={classes.formTextFieldOther}
              size="small"
              label="Role"
              id="outlined-size-small role"
              variant="outlined"
              required
              value={role}
              onChange={e => {
                setRole(e.target.value);
              }}
            ></TextField>
          </Card>
          <Card
            className={clsx(style.formCardContainer, style.Checkbox)}
            elevation={0}
            style={{ backgroundColor: "transparent" }}
          >
            <span
              style={{ marginLeft: "300px" }}
              onClick={() => {
                setModel(!model);
              }}
            >
              <FormControlLabel
                // className={style.radioGroup}
                style={{ width: "350px" }}
                value="other"
                checked={btnCondition}
                onClick={()=> setModel()}
                control={<Checkbox />}
                label="I agree to the Terms Conditions*"
              />
            </span>
          </Card>
          <Card style={{ marginLeft: "300px" }}>
            {model && (
              <TermsConditions
                modelCondition={setModel}
                condition={setBtnCondition}
              />
            )}
          </Card>

          <Card
            elevation={0}
            style={{ backgroundColor: "transparent" }}
            className={style.formCardContainer}
          >
            <button className={style.bn5} >
              Let's Shop
            </button>
          </Card>
        </form>
      </motion.div>
      <br />
    </>
  );
};

export default Signup;
