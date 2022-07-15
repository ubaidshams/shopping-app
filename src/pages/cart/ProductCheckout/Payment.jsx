import React,{useState} from "react";
import style from "./payment.module.css";
import { FaAmazonPay } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { BsCashStack } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"


const Payment = () => {
    let [use, setuse] = useState(false);
    let navigate = useNavigate();


    


    let handlesubmit = () => {
        if (use === true) {

            // alert(`You have Opted for payment method`);
            toast.success("Order Placed Successfully to this Address");

            navigate("/place-order")
        } else {
            alert("Please Select paymentmethod")
}


        


    }


  return (
    <div className={style.paymentsec}>
      <div className={style.paycard}>
        <h3 style={{ textAlign: "center" }}>Select Payment Method</h3>
        <div style={{ display: "flex" }}>
          <input type="radio" name="payment" onClick={() => setuse(!use)} />
          <div className={style.option}>
            Pay with Paytm
            <FaAmazonPay />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <input type="radio" name="payment" onClick={() => setuse(!use)} />
          <div className={style.option}>
            Pay with creditcard
            <SiVisa />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <input type="radio" name="payment" onClick={() => setuse(!use)} />
          <div className={style.option}>
            Cash On Delivery
            <BsCashStack />
          </div>
        </div>

        <button onClick={handlesubmit} className={style.ebtn}>
          Proceed next
        </button>
      </div>
    </div>
  );
};

export default Payment;
