import React from "react";
import { useSelector } from "react-redux";
import style from "./selectaddress.module.css";
import { Link } from "react-router-dom";


const SelectAddress = () => {
  let currUser = useSelector(state => state.user.currentUser);
  console.log(currUser);
  let { firstName, lastName, gender, email, phone, addressList, id } = currUser;

  return (
    <div className={style.addresscont}>
      <h3 style={{ marginBottom: "30px", textAlign: "center" }}>
        Select Address
      </h3>

      <div className={style.df}>
        <p style={{ color: "black", fontWeight: "bold" }}>Deliver to:</p>
        <Link to="/addressform">
          {" "}
          <button>Add New Address</button>
        </Link>
      </div>
      <div className="adcon">
        <h3>
          {firstName} <span>{lastName}</span>
        </h3>
        <p style={{ fontWeight: "lighter" }}>{phone}</p>

        {addressList.map((item, index) => {
          return (
            <div style={{display: "flex"}}>
              <input type="radio" name="address" />
              <div className={style.addname}>
                <h4>{`Address ${index + 1}`}</h4> : 
                <p>
                  {item.houseNo} , {item.landMark},{item.street}, {item.city} -
                  {item.pincode}{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectAddress;