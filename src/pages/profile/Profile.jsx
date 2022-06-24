import React, { useState } from "react";
import Avatar from "./profile.module.css";
import Locations from './Locations';

const Profile = () => {
  let [gender, setGender] = useState(false);
  let [manage, setManage] = useState("personal");
  let [addAddress, setaddAddress] = useState([]);
  let [locations, setLocations] = useState(false);
  let [display, setDisplay] = useState({
    street: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    
    })
   

  let changeOption = e => {
    setGender(e.target.value);
  };

  let changeAddress = () => {
    setManage("address");
    };
    
    let displayAddress = () => {
        setDisplay(setaddAddress)
    }
    let changeLocations = () => {
        setLocations(true)
    }

  return (
    <section className={Avatar.section}>
      <h1>My Account</h1>
      <article>
        <form className={Avatar.form} onSubmit={ (e)=>e.preventDefault()}>
          <div className={Avatar.card}>
            {gender === "male" ? (
              <img
                className={Avatar.img}
                src="https://www.kindpng.com/picc/m/668-6689202_avatar-profile-hd-png-download.png"
                alt="username"
              />
            ) : (
              <img
                className={Avatar.img}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIeNZ-NOv0PRSi8eRp5eeBsJKTpr5AMatrg&usqp=CAU"
                alt=""
              />
            )}
            <h1>User Name</h1>

            <div className={Avatar.info}>
              <li onClick={() => setManage("personal")}>Profile Information</li>
              <li onClick={() => setManage("address")}>Manage Address</li>
              <li>My Order</li>
            </div>
          </div>

          <div className={Avatar.details}>
            {manage === "personal" ? (
              <>
                <div>
                  <lable>First Name:</lable>
                  <input type="text" />
                  <a href="">Edit</a>
                </div>
                <div>
                  <lable>Last Name:</lable>
                  <input type="text" />
                  <a href="">Edit</a>
                </div>

                <section className={Avatar.gender}>
                  <lable>Gender:</lable>

                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onClick={changeOption}
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    id="female"
                    type="radio"
                    name="gender"
                    value="female"
                    onClick={changeOption}
                  />
                  <label htmlFor="female">Female</label>
                  <input
                    id="others"
                    type="radio"
                    name="gender"
                    value="others"
                    onClick={changeOption}
                  />
                  <label htmlFor="others">Others</label>
                </section>

                <div>
                  <lable>Email:</lable>
                  <input type="text" />
                  <a href="">Edit</a>
                </div>
                <div>
                  <lable>Mobile:</lable>
                  <input type="text" />
                  <a href="">Edit</a>
                </div>
              </>
            ) : (
              <>
                <h1>Manage Address</h1>
                <section>
                  <div className={Avatar.addAddress} onClick={changeLocations}>
                    + ADD A NEW ADDRESS
                  </div>

                    <div>{locations === false ? null : <Locations
                      addAddress={addAddress} display={display} setaddAddress={setaddAddress} setDisplay={setDisplay} setLocations={setLocations} />}</div>
                    <div>
                      {addAddress.map((datas)=>{
                        return (
                          <div className={Avatar.cardDetails} >
                           
                               <p>Street : {datas.street}</p>
                            <p>Landmark :  {datas.landmark}</p>
                          

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
        </form>
      </article>
    </section>
  );
};

export default Profile;