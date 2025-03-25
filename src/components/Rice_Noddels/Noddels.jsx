import React from "react";

const Noddels = () => {
  return (
    <>
      {/* Breakfast & Beverages */}
      <div className="menu-section">
        <h2 className="menu-heading">NOODLES</h2>
        <ul className="menu-list">
          <li>
            <span className="item-name">Veg Noodles</span>
            <span className="item-price">₹140</span>
          </li>
          <li>
            <span className="item-name">Schezwan Noodles</span>
            <span className="item-price">₹150</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Noddels;