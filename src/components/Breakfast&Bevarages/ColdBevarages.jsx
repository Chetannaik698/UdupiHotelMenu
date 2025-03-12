import React from "react";

const ColdBevarages = () => {
  return (
    <>
      {/* Breakfast & Beverages */}
      <div className="menu-section">
        <h2 className="menu-heading">COLD BEVERAGES</h2>
        <ul className="menu-list">
          <li>
            <img
              src="/lemonJuce.webp"
              alt="Lemon Juice"
              className="menu-item-img"
            />
            <span className="item-name">Lemon Juice</span>
            <span className="item-price">₹35</span>
          </li>

          <li>
            <img
              src="/lemonSoda.jpg"
              alt="Lemon Soda"
              className="menu-item-img"
            />
            <span className="item-name">Lemon Soda</span>
            <span className="item-price">₹40</span>
          </li>

          <li>
            <img
              src="/butter_milk.jpg"
              alt="Butter Milk"
              className="menu-item-img"
            />
            <span className="item-name">Butter Milk</span>
            <span className="item-price">₹40</span>
          </li>

          <li>
            <img
              src="/yellu_juice.jpg"
              alt="Yellu Juice"
              className="menu-item-img"
            />
            <span className="item-name">Yellu Juice</span>
            <span className="item-price">₹45</span>
          </li>

          <li>
            <img
              src="ragi_juice.jpg"
              alt="Ragi Juice"
              className="menu-item-img"
            />
            <span className="item-name">Ragi Juice</span>
            <span className="item-price">₹45</span>
          </li>

          <li>
            <img
              src="/fruit_juices.jpg"
              alt="Fruit Juices"
              className="menu-item-img"
            />
            <span className="item-name">Fruit Juices</span>
            <span className="item-price">₹60</span>
          </li>

          <li>
            <img
              src="/cold_coffe.jpg"
              alt="Cold Coffee"
              className="menu-item-img"
            />
            <span className="item-name">Cold Coffee</span>
            <span className="item-price">₹80</span>
          </li>

          <li>
            <img
              src="/sweet_lasi.jpg"
              alt="Sweet Lassi"
              className="menu-item-img"
            />
            <span className="item-name">Sweet Lassi</span>
            <span className="item-price">₹80</span>
          </li>

          <li>
            <img
              src="/milk_shakes.jpg"
              alt="Milkshakes"
              className="menu-item-img"
            />
            <span className="item-name">Milkshakes</span>
            <span className="item-price">₹90</span>
          </li>

          <li>
            <img
              src="/seasonal_juice.jpg"
              alt="Fruit Juice (Seasonal)"
              className="menu-item-img"
            />
            <span className="item-name">Fruit Juice (Seasonal)</span>
            <span className="item-price">₹80</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ColdBevarages;
