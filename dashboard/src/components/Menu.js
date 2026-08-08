import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileNavOpen(false);
  };

  const handleProfileClick = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const handleLogout = async () => {
    try {
      await fetch("https://zerodha-clone-backend-uc3s.onrender.com/logout", { credentials: "include" });
    } catch (_) { }
    // Go back to frontend landing page
    window.location.href = "https://zerodha-clone-frontend-8wvz-phi.vercel.app/";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <div className="menu-brand">
        <img src="logo.png" style={{ width: "40px" }} alt="logo" />
      </div>

      {/* Hamburger icon for mobile view */}
      <button
        className="mobile-hamburger-btn"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        aria-label="Toggle navigation menu"
        id="mobile-nav-toggle"
      >
        {isMobileNavOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div className={`menus ${isMobileNavOpen ? "mobile-active" : ""}`}>
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(6)}>
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr className="nav-divider" />
        <div className="profile" style={{ position: "relative" }} onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">Account</p>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <hr className="profile-dropdown-divider" />
              <button className="profile-logout-btn" onClick={handleLogout}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
