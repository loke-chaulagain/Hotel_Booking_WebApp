import React from 'react'
import "./navbar.scss"
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <div className='navBar'>
      <div className="navBarWrapper">
        <span className="logoTxt">Booking.com</span>
        <div className="navbarRightCon">
          <span className="npr">NPR</span>
          <div className="roundFlagCon">
            <img className="roundFlagImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/209px-Flag_of_Nepal.svg.png" alt="" />
          </div>

          <div className="helpIconCon">
            <HelpOutlineRoundedIcon className="helpIcon" />
          </div>

          <button className="listYourProperty">List your property</button>

          <Link to="/register">
            <button className="register">Register</button>
          </Link>

          <Link to="/login">
            <button className="register">Sign in</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar