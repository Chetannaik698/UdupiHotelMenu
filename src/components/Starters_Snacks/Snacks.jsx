import React from 'react'

const Snacks = () => {
  return (
    <>
    <div className="menu-section">
      <h2 className="menu-heading">SNACKS</h2>
      <ul className="menu-list">
        <li>
          <img
            src="/roasted_papad.jpg"
            alt="Roasted Papad"
            className="menu-item-img"
          />
          <span className="item-name">Roasted Papad</span>
          <span className="item-price">₹20</span>
        </li>
        <li>
          <img
            src="/masala_papad.jpg"
            alt="Masala Papad"
            className="menu-item-img"
          />
          <span className="item-name">Masala Papad</span>
          <span className="item-price">₹50</span>
        </li>
        <li>
          <img
            src="/onion_pakoda.jpg"
            alt="Onion Pakoda"
            className="menu-item-img"
          />
          <span className="item-name">Onion Pakoda</span>
          <span className="item-price">₹40</span>
        </li>
        <li>
          <img
            src="/mirchi_bajje.jpg"
            alt="Mirchi Baje (2pcs)"
            className="menu-item-img"
          />
          <span className="item-name">Mirchi Baje (2pcs)</span>
          <span className="item-price">₹50</span>
        </li>
        <li>
          <img
            src="/mirchi_bajje.jpg"
            alt="Mirchi Baje (4pcs)"
            className="menu-item-img"
          />
          <span className="item-name">Mirchi Baje (4pcs)</span>
          <span className="item-price">₹80</span>
        </li>
      </ul>
    </div>
  </>
  )
}

export default Snacks
