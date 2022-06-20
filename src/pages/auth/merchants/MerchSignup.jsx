import React, { useState } from "react";
import style from "./merch.module.css";

const MerchSignup = () => {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [licenceNo, setLicenceNo] = useState();
  let [gstNo, setGstNo] = useState();
  let [stockDetails, setStockDetails] = useState();
  let [contact, setContact] = useState();
  let [address, setAddress] = useState();

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, licenceNo, gstNo, stockDetails, contact, address);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className={style.mainblock}>
        <h1>Merchant Registration Form</h1>
        <div>
          <label htmlFor="">Merchant Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">E-Mail :</label>
          <input
            type="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Bussiness Licence No.:</label>
          <input
            type="number"
            value={licenceNo}
            onChange={(e) => setLicenceNo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">GST No.:</label>
          <input
            type="number"
            value={gstNo}
            onChange={(e) => setGstNo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Stock Details :</label>
          <input
            type="file"
            value={stockDetails}
            onChange={(e) => setStockDetails(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Contact :</label>
          <input
            type="tel"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Address :</label>
          <textarea
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <button className={style.btn}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MerchSignup;
