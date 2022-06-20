import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cataxios from "../../apis/Cataxios";

const Kids = () => {
  let [data, setdata] = useState();
  const fetchdata = async () => {
    let { data } = await Cataxios.get("/products");
    setdata(data);
    console.log(data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <div>
        <h1>Kids Category</h1>
        <div>
          <img src="" alt="" />
          <h1></h1>
          <p></p>
          <p></p>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Kids;
