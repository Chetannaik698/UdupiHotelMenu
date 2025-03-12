import React from "react";

const Noddels = () => {
  return (
    <>
      {/* Breakfast & Beverages */}
      <div className="menu-section">
        <h2 className="menu-heading">NOODLES</h2>
        <ul className="menu-list">
          <li>
            <img
              src="/veg_noodels.jpg"
              alt="Veg Noodles"
              className="menu-item-img"
            />
            <span className="item-name">Veg Noodles</span>
            <span className="item-price">₹140</span>
          </li>
          <li>
            <img
              src="/schezwan_noddels.jpg"
              alt="Schezwan Noodles"
              className="menu-item-img"
            />
            <span className="item-name">Schezwan Noodles</span>
            <span className="item-price">₹150</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Noddels;
