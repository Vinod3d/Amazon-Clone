import React from "react";
import "./buynow.css";
import { Divider } from "@mui/material";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";

const Buynow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className="leftbuyprice">Price</span>
          <Divider />
          <div className="item_container">
            <img
              src="https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70"
              alt=""
            />
            <div className="item_details">
              <h3>Molife Sense 500 Smartwatch  (Black Strap, Freesize)</h3>
              <h3>Smart Watches</h3>
              <h3 className="diffrentprice">₹4049</h3>
              <p className="unusuall">Usually dispatched in 8 days.</p>
              <p>Eligible for FREE Shipping</p>
              <img
                src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                alt="logo"
              />
              <Option/>
            </div>
            <h4 className="item_price">Rs. 4049</h4>
          </div>
          <Divider/>
          <Subtotal/>
        </div>
          <Right/>
      </div>
    </div>
  );
};

export default Buynow;
