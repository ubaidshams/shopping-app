import React, { useState } from "react";
import Avatar from "./profile.module.css";
import Locations from "./Locations";
import Order from "./Order";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { useDispatch } from "react-redux";
import MEN from "../../menprofile.png";
import Axios from "../../apis/Axios";
import { createCurrentUser } from "../../features/User/userSlice";
const Profile = () => {
  let currUser = useSelector(state => state.user.currentUser);
  let { firstName, lastName, gender, email, phone } = currUser;
  let [UserGender, setGender] = useState("male");
  let [manage, setManage] = useState("personal");
  let [addAddress, setaddAddress] = useState([]);
  let [locations, setLocations] = useState(false);
  let [order, setOrder] = useState(false);
  let [edit, setEdit] = useState("");
  let [display, setDisplay] = useState({
    street: "",
    landMark: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });
  let navigate = useNavigate();
  const dispatch = useDispatch();

  let changeOption = e => {
    setGender(e.target.value);
  };

  let changeAddress = () => {
    setManage("address");
  };

  let displayAddress = () => {
    setDisplay(setaddAddress);
  };

  let changeLocations = () => {
    setLocations(true);
  };
  const handleLogOut = async () => {
    try {
      await Axios.get("/user/logout", { withCredentials: true });
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(createCurrentUser({ token: "", currentUser: {} }));
    }
  };

  return (
    //   <section className={Avatar.section}>
    //     <h1>My Account</h1>
    //     <article>
    //       <form className={Avatar.form} onSubmit={e => e.preventDefault()}>
    //         <div className={Avatar.card}>
    //           {gender === "male" ? (
    //             <img
    //               className={Avatar.img}
    //               src="https://www.kindpng.com/picc/m/668-6689202_avatar-profile-hd-png-download.png"
    //               alt="username"
    //             />
    //           ) : (
    //             <img
    //               className={Avatar.img}
    //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIeNZ-NOv0PRSi8eRp5eeBsJKTpr5AMatrg&usqp=CAU"
    //               alt="username"
    //             />
    //           )}
    //           <h1>{`${firstName}`}</h1>

    //           <div className={Avatar.info}>
    //             <li onClick={() => setManage("personal")}>Profile Information</li>
    //             <li onClick={() => setManage("address")}>Manage Address</li>
    //             <li>My Order</li>
    //           </div>
    //         </div>

    //         <div className={Avatar.details}>
    //           {manage === "personal" ? (
    //             <>
    //               <div style={{ paddingTop: "10px" }}>
    //                 <lable>First Name:</lable>
    //                 <input
    //                   type="text"
    //                   value={currUser && firstName}
    //                   disabled={edit !== "firstName"}
    //                 />
    //                 <a onClick={() => setEdit("firstName")}>Edit</a>
    //               </div>
    //               <div>
    //                 <lable>Last Name:</lable>
    //                 <input
    //                   type="text"
    //                   value={currUser && lastName}
    //                   disabled={edit !== "lastName"}
    //                 />
    //                 <a onClick={() => setEdit("lastName")}>Edit</a>
    //               </div>

    //               <section className={Avatar.gender}>
    //                 <lable>Gender:</lable>

    //                 <input
    //                   type="radio"
    //                   id="male"
    //                   name="gender"
    //                   value="male"
    //                   onClick={changeOption}
    //                   checked={"male" == gender}
    //                   disabled={true}
    //                 />
    //                 <label htmlFor="male">Male</label>
    //                 <input
    //                   id="female"
    //                   type="radio"
    //                   name="gender"
    //                   value="female"
    //                   onClick={changeOption}
    //                   checked={"Female" == gender}
    //                   disabled={true}
    //                 />
    //                 <label htmlFor="female">Female</label>
    //                 <input
    //                   id="others"
    //                   type="radio"
    //                   name="gender"
    //                   value="others"
    //                   onClick={changeOption}
    //                   checked={"Others" == gender}
    //                   disabled={true}
    //                 />
    //                 <label htmlFor="others">Others</label>
    //               </section>

    //               <div>
    //                 <lable>Email:</lable>
    //                 <input
    //                   type="text"
    //                   value={currUser && email}
    //                   disabled={edit !== "email"}
    //                 />
    //                 <a onClick={() => setEdit("email")}>Edit</a>
    //               </div>
    //               <div>
    //                 <lable>Mobile:</lable>
    //                 <input
    //                   type="text"
    //                   value={currUser && phone}
    //                   disabled={edit !== "mobile"}
    //                 />
    //                 <a onClick={() => setEdit("mobile")}>Edit</a>
    //               </div>
    //             </>
    //           ) : (
    //             <>
    //               <h1>Manage Address</h1>
    //               <section>
    //                 <div style={{display: "flex", justifyContent: "center"}}>
    //                   <div
    //                     className={Avatar.addAddress}
    //                     onClick={changeLocations}
    //                   >
    //                     + ADD A NEW ADDRESS
    //                   </div>
    //                 </div>

    //                 <div>
    //                   {locations === false ? null : (
    //                     <Locations
    //                       addAddress={addAddress}
    //                       display={display}
    //                       setaddAddress={setaddAddress}
    //                       setDisplay={setDisplay}
    //                       setLocations={setLocations}
    //                     />
    //                   )}
    //                 </div>
    //                 <div>
    //                   {addAddress.map(datas => {
    //                     return (
    //                       <div className={Avatar.cardDetails}>
    //                         <p>Street : {datas.street}</p>
    //                         <p>landMark : {datas.landMark}</p>
    //                         <p>City : {datas.city}</p>
    //                         <p>State : {datas.state}</p>
    //                         <p>Pincode : {datas.pincode}</p>
    //                         <p>Country : {datas.country}</p>
    //                       </div>
    //                     );
    //                   })}
    //                 </div>
    //               </section>
    //             </>
    //           )}
    //         </div>
    //       </form>
    //     </article>
    //   </section>
    // );

    <section className="sec1">
      <form className="mai1" onSubmit={e => e.preventDefault()}>
        <div className="left">
          <div className="top">
            <div className="tlef">
              {gender === "male" ? (
                <img
                  className={Avatar.img}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWMo8Vg0nfDaKEIZMjVlKvNP_fiPqOygAwA&usqp=CAU"
                  alt="username"
                />
              ) : (
                <img
                  className={Avatar.img}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIeNZ-NOv0PRSi8eRp5eeBsJKTpr5AMatrg&usqp=CAU"
                  alt="username"
                />
              )}
            </div>
            <div className="trig">
              <ul>
                <li>
                  <h1>{`${firstName}`}</h1>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom">
            <div className={Avatar.info}>
              <li onClick={() => setManage("personal")}>Profile Information</li>
              <li onClick={() => setManage("address")}>Manage Address</li>
              <li style={{ textDecoration: "none" }}>
                {" "}
                <Link to="/My-orders" style={{ color: "#0066b2" }}>
                  {" "}
                  My Order{" "}
                </Link>{" "}
              </li>
              <li>
                <button onClick={handleLogOut}>LogOut</button>
              </li>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="rtop">
            <h1>{`My  Profile`}</h1>
          </div>
          <div className="rmid">
            <div className="rmidl">
              <div className="formy">
                {manage === "personal" ? (
                  <>
                    <div>
                      <lable>First Name:</lable>
                      <input
                        type="text"
                        value={currUser && firstName}
                        disabled={edit !== "firstName"}
                      />
                      {/* <a onClick={() => setEdit("firstName")}>Edit</a> */}
                    </div>
                    <div>
                      <lable>Last Name:</lable>
                      <input
                        type="text"
                        value={currUser && lastName}
                        disabled={edit !== "lastName"}
                      />
                      {/* <a onClick={() => setEdit("lastName")}>Edit</a> */}
                    </div>

                    {/* <section className={Avatar.gender}>
                    <lable>Gender:</lable>

                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      onClick={changeOption}
                      checked={"male" == gender}
                      disabled={true}
                    />
                    <label htmlFor="male">Male</label>
                    <input
                      id="female"
                      type="radio"
                      name="gender"
                      value="female"
                      onClick={changeOption}
                      checked={"Female" == gender}
                      disabled={true}
                    />
                    <label htmlFor="female">Female</label>
                    <input
                      id="others"
                      type="radio"
                      name="gender"
                      value="others"
                      onClick={changeOption}
                      checked={"Others" == gender}
                      disabled={true}
                    />
                    <label htmlFor="others">Others</label>
                  </section> */}

                    <div>
                      <lable>Email:</lable>
                      <input
                        type="text"
                        value={currUser && email}
                        disabled={edit !== "email"}
                      />
                      {/* <a onClick={() => setEdit("email")}>Edit</a> */}
                    </div>
                    <div>
                      <lable>Mobile:</lable>
                      <input
                        type="text"
                        value={currUser && phone}
                        disabled={edit !== "mobile"}
                      />
                      {/* <a onClick={() => setEdit("mobile")}>Edit</a> */}
                    </div>
                  </>
                ) : (
                  <>
                    <h1>Manage Address</h1>
                    <section>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div
                          className={Avatar.addAddress}
                          onClick={changeLocations}
                        >
                          + ADD A NEW ADDRESS
                        </div>
                      </div>

                      <div>
                        {locations === false ? null : (
                          <Locations
                            addAddress={addAddress}
                            display={display}
                            setaddAddress={setaddAddress}
                            setDisplay={setDisplay}
                            setLocations={setLocations}
                          />
                        )}
                      </div>
                      <div>
                        {addAddress.map(datas => {
                          return (
                            <div className={Avatar.cardDetails}>
                              <p>Street : {datas.street}</p>
                              <p>landMark : {datas.landMark}</p>
                              <p>City : {datas.city}</p>
                              <p>State : {datas.state}</p>
                              <p>Pincode : {datas.pincode}</p>
                              <p>Country : {datas.country}</p>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  </>
                )}
              </div>
            </div>
            <div className="rmidr">
              <h6>Profile Image</h6>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWMo8Vg0nfDaKEIZMjVlKvNP_fiPqOygAwA&usqp=CAU"
                alt=""
              />
              <br />
              <button>Upload Image</button>
            </div>
          </div>
          <div className="rbottom">
            <button>Edit Profile</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Profile;
