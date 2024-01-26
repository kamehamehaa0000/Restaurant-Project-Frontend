import React from 'react'
import './navbar.css'
import { MdRestaurantMenu } from 'react-icons/md'
import { MdOutlineContacts } from 'react-icons/md'
import { GrContact } from 'react-icons/gr'
import { GrRestaurant } from 'react-icons/gr'
import { GiChopsticks } from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo-container">
        <img src="../public/logo.JPG" alt="" />
      </div>
      <div className="nav-link-container">
        <a href="#home">
          <span>
            <GrRestaurant />
            Home
          </span>
        </a>
        <a href="#menu">
          <span>
            <MdRestaurantMenu /> Menu
          </span>
        </a>
        <a href="">
          <span>
            <GrContact />
            About
          </span>
        </a>
        <a href="">
          <span>
            <MdOutlineContacts />
            Contact
          </span>
        </a>
      </div>
      <div className="nav-reservation">
        <a href="">
          <span>
            <GiChopsticks />
            Reservation
          </span>
        </a>
      </div>
    </div>
  )
}

export default Navbar
