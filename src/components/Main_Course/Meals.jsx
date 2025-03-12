import React from 'react'

const Meals = () => {
  return (
    <>
    <div className="menu-section">
       <h2 className="menu-heading">MEALS</h2>
       <ul className="menu-list">
  <li>
    <img src="/chapati_kurma.jpg" alt="Chapathi Kurma" className="menu-item-img" />
    <span className="item-name">Chapathi Kurma</span>
    <span className="item-price">₹60</span>
  </li>
  <li>
    <img src="/parota_kurma.jpg" alt="Parota Kurma" className="menu-item-img" />
    <span className="item-name">Parota Kurma</span>
    <span className="item-price">₹70</span>
  </li>
  <li>
    <img src="/SouthIndian-Lunch.jpg" alt="South Mini Meals" className="menu-item-img" />
    <span className="item-name">South Mini Meals</span>
    <span className="item-price">₹80</span>
  </li>
  <li>
    <img src="/south_indian_thali.jpg" alt="South Indian Thali" className="menu-item-img" />
    <span className="item-name">South Indian Thali</span>
    <span className="item-price">₹100</span>
  </li>
  <li>
    <img src="/North_Indian.jpg" alt="North Indian Thali" className="menu-item-img" />
    <span className="item-name">North Indian Thali</span>
    <span className="item-price">₹150</span>
  </li>
</ul>


     </div>
   </>
  )
}

export default Meals
