import React from "react";

const Chats = () => {
  return (
    <>
      {/* Breakfast & Beverages */}
      <div className="menu-section">
        <h2 className="menu-heading">CHATS</h2>
        <ul className="menu-list">
          <li>
            <img
              src="/pani_puri.jpg"
              alt="Pani Puri"
              className="menu-item-img"
            />
            <span className="item-name">Pani Puri</span>
            <span className="item-price">₹45</span>
          </li>
          <li>
            <img
              src="/bhel_puri.jpg"
              alt="Bhel Puri"
              className="menu-item-img"
            />
            <span className="item-name">Bhel Puri</span>
            <span className="item-price">₹60</span>
          </li>
          <li>
            <img
              src="/masala_puri.jpg"
              alt="Bhel Puri"
              className="menu-item-img"
            />
            <span className="item-name">Masala Puri</span>
            <span className="item-price">₹55</span>
          </li>
          <li>
            <img src="/sev_puri.jpg" alt="Sev Puri" className="menu-item-img" />
            <span className="item-name">Sev Puri</span>
            <span className="item-price">₹55</span>
          </li>
          <li>
            <img
              src="/dahi_puri.jpg"
              alt="Dahi Puri"
              className="menu-item-img"
            />
            <span className="item-name">Dahi Puri</span>
            <span className="item-price">₹60</span>
          </li>
          <li>
            <img
              src="/phav_baji.jpg"
              alt="Pav Bhaji"
              className="menu-item-img"
            />
            <span className="item-name">Pav Bhaji</span>
            <span className="item-price">₹80</span>
          </li>
          <li>
            <img
              src="/vada_pav.webp"
              alt="Vada Pav"
              className="menu-item-img"
            />
            <span className="item-name">Vada Pav</span>
            <span className="item-price">₹25</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Chats;
