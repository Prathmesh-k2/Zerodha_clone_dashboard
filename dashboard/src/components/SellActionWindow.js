import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [orderType, setOrderType] = useState("market");

  const handleSellClick = () => {
    axios
      .post("https://zerodha-clone-backend-uc3s.onrender.com/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      })
      .then(() => {
        generalContext.closeSellWindow();
      })
      .catch((err) => {
        console.error("Sell order failed:", err);
      });
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      {/* Header */}
      <div className="header sell-header">
        <h3>
          {uid} <span>NSE</span>
        </h3>
        <div className="market-options">
          <label>
            <input
              type="radio"
              name="order-type-sell"
              value="market"
              checked={orderType === "market"}
              onChange={() => setOrderType("market")}
            />
            Market
          </label>
          <label>
            <input
              type="radio"
              name="order-type-sell"
              value="limit"
              checked={orderType === "limit"}
              onChange={() => setOrderType("limit")}
            />
            Limit
          </label>
          <label>
            <input
              type="radio"
              name="order-type-sell"
              value="sl"
              checked={orderType === "sl"}
              onChange={() => setOrderType("sl")}
            />
            SL
          </label>
          <label>
            <input
              type="radio"
              name="order-type-sell"
              value="sl-m"
              checked={orderType === "sl-m"}
              onChange={() => setOrderType("sl-m")}
            />
            SL-M
          </label>
        </div>
      </div>

      {/* Tabs */}
      <div className="tab">
        <button>Regular</button>
        <button>Cover</button>
        <button>AMO</button>
      </div>

      {/* Order Inputs */}
      <div className="regular-order">
        <div className="order-validity">
          <label>
            <input type="radio" name="validity-sell" defaultChecked /> Day
            <span> (Validity)</span>
          </label>
          <label>
            <input type="radio" name="validity-sell" /> IOC
          </label>
        </div>

        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty-sell"
              id="qty-sell"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price (optional)</legend>
            <input
              type="number"
              name="price-sell"
              id="price-sell"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              disabled={orderType === "market"}
            />
          </fieldset>
          <fieldset>
            <legend>Trigger Price</legend>
            <input
              type="number"
              name="trigger-sell"
              id="trigger-sell"
              step="0.05"
              defaultValue={0.0}
              disabled={orderType !== "sl" && orderType !== "sl-m"}
            />
          </fieldset>
        </div>

        <div className="options">
          <span>BO</span>
          <span>Intraday</span>
          <span>Margin</span>
          <span style={{ color: "#888", fontSize: "0.75rem" }}>
            View margin required
          </span>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="buttons">
        <span>Margin available ₹0.00</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
