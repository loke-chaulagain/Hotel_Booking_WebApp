import React from 'react'
import "./mail.scss"

function Mail() {
    return (
        <div className='mail'>
            <div className="mailWrapper">
                <span className="mailTitle">Save time, save money!</span>
                <span className="mailSubTitle">Sign up and we'll send the best deals to you</span>
                <div className="emailAndSubscribe">
                    <input type="text" className="mailInput" placeholder='Your email' />
                    <div className="subscribeCon">Subscribe</div>
                </div>
                <div className="checkBoxAndTxt">
                    <input type="checkbox" className="checkBox" />
                    <span className="checkboxTxt">Send me a link to get the FREE Booking.com app!</span>
                </div>

            </div>

        </div>
    )
}

export default Mail