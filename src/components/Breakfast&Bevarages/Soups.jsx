import React from "react";

const Soups = () => {
  return (
    <>
      {/* Breakfast & Beverages */}
      <div className="menu-section">
        <h2 className="menu-heading">SOUPS</h2>
        <ul className="menu-list">
          <li>
            <span className="item-name">Tomato Soup</span>
            <span className="item-price">₹90</span>
          </li>
          <li>
            <span className="item-name">Sweetcorn Soup</span>
            <span className="item-price">₹90</span>
          </li>
          <li>
            <span className="item-name">Hot & Sour Soup</span>
            <span className="item-price">₹90</span>
          </li>
          <li>
            <span className="item-name">Mix Veggies Soup</span>
            <span className="item-price">₹90</span>
          </li>
          <li>
            <span className="item-name">Veg Manchow Soup</span>
            <span className="item-price">₹90</span>
          </li>
          <li>
            <span className="item-name">Lemon Coriander Soup</span>
            <span className="item-price">₹90</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Soups;
