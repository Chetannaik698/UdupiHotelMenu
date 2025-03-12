import React from "react";

const DosaZone = () => {
  return (
    <>
      {/* Breakfast & Beverages */}
      <div className="menu-section">
        <h2 className="menu-heading">DOSA ZONE</h2>
        <ul className="menu-list">
          <li>
            <img
              src="/plain_dosa.jpg"
              alt="Plain Dosa"
              className="menu-item-img"
            />
            <span className="item-name">Plain Dosa</span>
            <span className="item-price">₹60</span>
          </li>

          <li>
            <img
              src="/khali_dosa.webp"
              alt="Masala Dosa"
              className="menu-item-img"
            />
            <span className="item-name">Khali Dosa(2)</span>
            <span className="item-price">₹65</span>
          </li>

          <li>
            <img
              src="/masala_dosa.jpg"
              alt="Butter Dosa"
              className="menu-item-img"
            />
            <span className="item-name">Masala Dosa</span>
            <span className="item-price">₹65</span>
          </li>

          <li>
            <img src="/set_dosa.jpg" alt="Set Dosa" className="menu-item-img" />
            <span className="item-name">Set Dosa</span>
            <span className="item-price">₹65</span>
          </li>

          <li>
            <img
              src="/mysore_masala_dosa.webp"
              alt="Benne Dosa"
              className="menu-item-img"
            />
            <span className="item-name">Mysore Masala Dosa</span>
            <span className="item-price">₹85</span>
          </li>

          <li>
            <img
              src="/onion-uthappam.jpg"
              alt="Neer Dosa"
              className="menu-item-img"
            />
            <span className="item-name">Onion Uttappa</span>
            <span className="item-price">₹85</span>
          </li>

          <li>
            <img
              src="/benne_masala_dosa.webp"
              alt="Ragi Dosa"
              className="menu-item-img"
            />
            <span className="item-name">Benne Masala Dosa</span>
            <span className="item-price">₹90</span>
          </li>

          <li>
            <img
              src="/onion_dosa.jpg"
              alt="Onion Dosa"
              className="menu-item-img"
            />
            <span className="item-name">Onion Dosa</span>
            <span className="item-price">₹80</span>
          </li>

          <li>
            <img
              src="/plain_ghee_roast.webp"
              alt="Mysore Masala Dosa"
              className="menu-item-img"
            />
            <span className="item-name">Plain Ghee Roast</span>
            <span className="item-price">₹80</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DosaZone;
