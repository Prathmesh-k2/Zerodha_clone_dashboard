import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="funds-page">
      {/* Top Action Bar */}
      <div className="funds-topbar">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <div className="funds-actions">
          <Link to="/" className="btn btn-green">
            Add funds
          </Link>
          <Link to="/" className="btn btn-blue">
            Withdraw
          </Link>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="funds-row">
        {/* Left — Equity */}
        <div className="funds-col">
          <h4 className="funds-col-title">Equity</h4>

          <div className="funds-table">
            {/* Summary rows */}
            <div className="funds-data funds-highlight">
              <span>Available margin</span>
              <span className="funds-blue">₹4,043.10</span>
            </div>
            <div className="funds-data funds-highlight">
              <span>Used margin</span>
              <span>₹3,757.30</span>
            </div>
            <div className="funds-data funds-highlight">
              <span>Available cash</span>
              <span>₹4,043.10</span>
            </div>

            <hr className="funds-hr" />

            {/* Detail rows */}
            <div className="funds-data">
              <span>Opening Balance</span>
              <span>4,043.10</span>
            </div>
            <div className="funds-data">
              <span>Live Balance</span>
              <span>3,736.40</span>
            </div>
            <div className="funds-data">
              <span>Payin</span>
              <span>4,064.00</span>
            </div>
            <div className="funds-data">
              <span>SPAN</span>
              <span>0.00</span>
            </div>
            <div className="funds-data">
              <span>Delivery margin</span>
              <span>0.00</span>
            </div>
            <div className="funds-data">
              <span>Exposure</span>
              <span>0.00</span>
            </div>
            <div className="funds-data">
              <span>Options premium</span>
              <span>0.00</span>
            </div>

            <hr className="funds-hr" />

            <div className="funds-data">
              <span>Collateral (Liquid funds)</span>
              <span>0.00</span>
            </div>
            <div className="funds-data">
              <span>Collateral (Equity)</span>
              <span>0.00</span>
            </div>
            <div className="funds-data">
              <span>Total Collateral</span>
              <span>0.00</span>
            </div>
          </div>
        </div>

        {/* Right — Commodity */}
        <div className="funds-col">
          <h4 className="funds-col-title">Commodity</h4>
          <div className="funds-commodity">
            <p>You don't have a commodity account</p>
            <Link to="/" className="btn btn-blue">
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;