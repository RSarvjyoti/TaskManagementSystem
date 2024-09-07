import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

const navLink = [
  {
    to: "/",
    text: "Home"
  },
  {
    to: "/task",
    text: "Tasks"
  },
  {
    to: "/signup",
    text: "Signup"
  },
  {
    to: "/login",
    text: "Login"
  },
]

function Navbar() {
  return (
    <div className="nav">
      <h4>TaskSync</h4>
      <ul>
        <li><Link to={navLink[0].to}>{navLink[0].text}</Link></li>
        <li><Link to={navLink[1].to}>{navLink[1].text}</Link></li>
      </ul>
      <div>
      <button><Link to={navLink[2].to}>{navLink[2].text}</Link></button>
      <button><Link to={navLink[3].to}>{navLink[3].text}</Link></button>
      </div>
    </div>
  )
}

export default Navbar
