import React from 'react'

const Meals = () => {
  return (
    <>
    <div className="menu-section">
       <h2 className="menu-heading">MEALS</h2>
       <ul className="menu-list">
  <li>
    <span className="item-name">Chapathi Kurma</span>
    <span className="item-price">₹60</span>
  </li>
  <li>
    <span className="item-name">Parota Kurma</span>
    <span className="item-price">₹70</span>
  </li>
  <li>
    <span className="item-name">South Mini Meals</span>
    <span className="item-price">₹80</span>
  </li>
  <li>
    <span className="item-name">South Indian Thali</span>
    <span className="item-price">₹100</span>
  </li>
  <li>
    <span className="item-name">North Indian Thali</span>
    <span className="item-price">₹150</span>
  </li>
</ul>

     </div>
   </>
  )
}

export default Meals