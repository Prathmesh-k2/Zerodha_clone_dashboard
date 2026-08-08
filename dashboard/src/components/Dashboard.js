import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import { GeneralContextProvider } from "./GeneralContext";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

const Dashboard = () => {
  const [activeMobileTab, setActiveMobileTab] = useState("watchlist");

  return (
    <GeneralContextProvider>
      {/* Mobile Tab Switcher */}
      <div className="mobile-view-switcher">
        <button
          id="mobile-tab-watchlist"
          className={`mobile-tab-btn ${activeMobileTab === "watchlist" ? "active" : ""}`}
          onClick={() => setActiveMobileTab("watchlist")}
        >
          Watchlist
        </button>
        <button
          id="mobile-tab-content"
          className={`mobile-tab-btn ${activeMobileTab === "content" ? "active" : ""}`}
          onClick={() => setActiveMobileTab("content")}
        >
          Dashboard Main
        </button>
      </div>

      <div className={`dashboard-container mobile-show-${activeMobileTab}`}>
        <div className="watchlist-wrapper">
          <WatchList />
        </div>

        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </GeneralContextProvider>
  );
};

export default Dashboard;