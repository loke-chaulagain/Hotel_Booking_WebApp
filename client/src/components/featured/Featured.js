import React from 'react'
import "./featured.scss"



function Featured() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <img src="assets/hotel/1.webp" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <span className="featuredPlaceName">Dublin</span>
                    <span className="propertiesNum">206</span>
                </div>
            </div>

            <div className="featuredItem">
                <img src="assets/hotel/2.webp" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <span className="featuredPlaceName">Dublin</span>
                    <span className="propertiesNum">206</span>
                </div>
            </div>

            <div className="featuredItem">
                <img src="assets/hotel/3.webp" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <span className="featuredPlaceName">California</span>
                    <span className="propertiesNum">684</span>
                </div>
            </div>

            <div className="featuredItem">
                <img src="assets/hotel/4.webp" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <span className="featuredPlaceName">Ohayo</span>
                    <span className="propertiesNum">402</span>
                </div>
            </div>

            <div className="featuredItem">
                <img src="assets/hotel/5.webp" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <span className="featuredPlaceName">Chennai</span>
                    <span className="propertiesNum">160</span>
                </div>
            </div>

        </div>
    )
}

export default Featured