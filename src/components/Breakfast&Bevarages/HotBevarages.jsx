import React from 'react'

const HotBevarages = () => {
  return (
   <>
    {/* Breakfast & Beverages */}
      <div className="menu-section">
        <h2 className="menu-heading">HOT BEVERAGES</h2>
        <ul className="menu-list">
          <li>
            <img
              src="/Tea.jpg"
              alt="Tea / Black Tea"
              className="menu-item-img"
            />
            <span className="item-name">Tea / Black Tea</span>
            <span className="item-price">₹20</span>
          </li>

          <li>
            <img
              src="/KT.webp"
              alt="Special KT"
              className="menu-item-img"
            />
            <span className="item-name">Special KT</span>
            <span className="item-price">₹25</span>
          </li>

          <li>
            <img src="/milk.jpg" alt="Milk" className="menu-item-img" />
            <span className="item-name">Milk</span>
            <span className="item-price">₹20</span>
          </li>

          <li>
            <img
              src="coffe.webp"
              alt="Coffee"
              className="menu-item-img"
            />
            <span className="item-name">Coffee</span>
            <span className="item-price">₹25</span>
          </li>

          <li>
            <img
              src="badam.jpg"
              alt="Kashayam / Badam Milk"
              className="menu-item-img"
            />
            <span className="item-name">Kashayam / Badam Milk</span>
            <span className="item-price">₹30</span>
          </li>

          <li>
            <img
              src="/lemon.jpg"
              alt="Lemon Tea"
              className="menu-item-img"
            />
            <span className="item-name">Lemon Tea</span>
            <span className="item-price">₹25</span>
          </li>

          <li>
            <img
              src="/Horlicks.jpg"
              alt="Horlicks / Bournvita"
              className="menu-item-img"
            />
            <span className="item-name">Horlicks / Bournvita</span>
            <span className="item-price">₹35</span>
          </li>
        </ul>
      </div>
   </>
  )
}

export default HotBevarages
