import React from "react";
import foot from "./footer.module.css";
import { IoMdBriefcase, IoIosHelpCircle } from "react-icons/io";
import { MdStars } from "react-icons/md";
import { FaGift } from "react-icons/fa";

const Footer = () => {
  return (
    <section className={foot.footer_Section}>
      <div className={foot.footer_Upperhalf}>
        <div className={foot.footer_Links}>
          <div className={foot.footer_about}>
            <div className={foot.link}>
              <a href="#">ABOUT</a>
            </div>
            {/* <div className={foot.link}>
              <a href="#">About Us</a>
            </div> */}
            <div className={foot.link}>
              <a href="#">Contact Us</a>
            </div>
            <div className={foot.link}>
              <a href="#">Careers</a>
            </div>
            <div className={foot.link}>
              <a href="#">ShoppingKart Stories</a>
            </div>
            <div className={foot.link}>
              <a href="#">Press</a>
            </div>
            <div className={foot.link}>
              <a href="#">ShoppingKart Wholesale</a>
            </div>
            <div className={foot.link}>
              <a href="#">Corporate Information</a>
            </div>
          </div>
          <div className={foot.footer_help}>
            <div className={foot.link}>
              <a href="#">HELP</a>
            </div>
            <div className={foot.link}>
              <a href="#">Payments</a>
            </div>
            <div className={foot.link}>
              <a href="#">Shipping</a>
            </div>
            <div className={foot.link}>
              <a href="#">Cancellation & Returns</a>
            </div>
            <div className={foot.link}>
              <a href="#">FAQ</a>
            </div>
            <div className={foot.link}>
              <a href="#">Report Infringement</a>
            </div>
          </div>
          <div className={foot.footer_policy}>
            <div className={foot.link}>
              <a href="#">POLICY</a>
            </div>
            <div className={foot.link}>
              <a href="#">Return Policy</a>
            </div>
            <div className={foot.link}>
              <a href="#">Terms Of Use</a>
            </div>
            <div className={foot.link}>
              <a href="#">Security</a>
            </div>
            <div className={foot.link}>
              <a href="#">Privacy</a>
            </div>
            <div className={foot.link}>
              <a href="#">Sitemap</a>
            </div>
            <div className={foot.link}>
              <a href="#">EPR Compliance</a>
            </div>
          </div>
          
        </div>
        <div className={foot.sideBorder}></div>
        <div className={foot.footer_EmailContact}>
          <div>
            <div>Mail Us:</div>
            <div>
              ShoppingKart Private Limited, #88 3rd floor, Brigade
              Chambers,Gandhi Bazar Main Road, Basavanagudi Bengaluru, 560004,
              Karnataka, India
            </div>
          </div>
          <div>
            <div>Registered Office Address:</div>
            <div style={{textAlign:"start"}}>
              ShoppingKart Private Limited, #88 3rd floor, Brigade
              Chambers,Gandhi Bazar Main Road, Basavanagudi Bengaluru, 560004,
              Karnataka,  Telephone:{" "}
              <span>080-41204235</span>
            </div>
          </div>
        </div>
      </div>
      <div className={foot.bottomBorder}></div>
      <div className={foot.footer_Lowerhalf}>
        <div className={foot.Seller}>
          <span>
            <IoMdBriefcase />
          </span>
          <span> Seller</span>
        </div>
        <div className={foot.Advertise}>
          <span>
            <MdStars />
          </span>
          <span>Advertise</span>
        </div>
        <div className={foot.gift}>
          <span>
            <FaGift />
          </span>
          <span>Gift Cards</span>
        </div>
        <div className={foot.helpCenter}>
          <span>
            <IoIosHelpCircle />
          </span>
          <span>Help Center</span>
        </div>
        <div className={foot.tradeMark}>© 2007-2022 ShoppingKart.com</div>
        <div className={foot.payments}>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
            alt="payments"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
