import React from 'react';

const Snacks = () => {
  return (
    <>
      <div className="menu-section">
        <h2 className="menu-heading">SNACKS</h2>
        <ul className="menu-list">
          <li>
            <span className="item-name">Roasted Papad</span>
            <span className="item-price">₹20</span>
          </li>
          <li>
            <span className="item-name">Masala Papad</span>
            <span className="item-price">₹50</span>
          </li>
          <li>
            <span className="item-name">Onion Pakoda</span>
            <span className="item-price">₹40</span>
          </li>
          <li>
            <span className="item-name">Mirchi Baje (2pcs)</span>
            <span className="item-price">₹50</span>
          </li>
          <li>
            <span className="item-name">Mirchi Baje (4pcs)</span>
            <span className="item-price">₹80</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Snacks;
