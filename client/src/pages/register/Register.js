import "./register.scss"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { Link } from 'react-router-dom'



function Register() {
    return (
        <div className='registerPage'>
            <div className="rp-Wrapper">
                <div className="rp-Left">
                    <div className="rp-LeftRow1">
                        <img className='rp-logo' src="assets/logo.svg" alt="" />
                    </div>

                    <form className="rp-loginContainer">
                        <img className='rp-logoIcon' src="assets/logo-icon.svg" alt="" />
                        <span className='rp-welcomeTxt'>Welcome</span>
                        <span className='rp-newHere'><span className='newHereSpan'>New here !</span> Create an account</span>
                        <span className="rp-loginDesc">Lorffem ipsumfffdd dolors sit amet constetur aipisicing elits. Consatur, svvxi plavvvvt lab rerum quae fugiat nihil.
                        </span>

                        <div className="rp-loginInputCon">
                            <div className="rp-inputIconCon">
                                <PersonOutlinedIcon className='rp-Input-icon' />
                            </div>
                            <input className="rp-Input" type="text" required placeholder='Username' />
                        </div>

                        <div className="rp-loginInputCon">
                            <div className="rp-inputIconCon">
                                <MailOutlinedIcon className='rp-Input-icon' />
                            </div>
                            <input className="rp-Input" type="email" required placeholder='Email' />
                        </div>

                        <div className="rp-loginInputCon">
                            <div className="rp-inputIconCon">
                                <BadgeOutlinedIcon className='rp-Input-icon' />
                            </div>
                            <input className="rp-Input" type="text" required placeholder='Full name' />
                        </div>


                        <div className="rp-loginInputCon">
                            <div className="rp-inputIconCon">
                                <KeyOutlinedIcon className='rp-Input-icon' />
                            </div>
                            <input className="rp-Input" type="password" required placeholder="Password" />
                        </div>

                        <div className="rp-loginInputCon">
                            <div className="rp-inputIconCon">
                                <KeyOutlinedIcon className='rp-Input-icon' />
                            </div>
                            <input className="rp-Input" type="password" placeholder="Confirm password" />
                        </div>

                        <button className='rp-loginBut' type='submit'  >Register</button>

                        <span className='rp-alreadyAcc'>Already have an account ?</span>

                        <Link to="/login" className="link">
                            <button className='rp-loginBut'>Log into your account</button>
                        </Link>
                    </form>
                </div>
                <div className="lpRight">right</div>
            </div>
        </div>
    )
}

export default Register