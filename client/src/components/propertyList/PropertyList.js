import React from 'react'
import "./propertyList.scss"

function PropertyList() {
    return (
        <div className='propertyList'>
            <div className="propertyListItem">
                <img src="assets/property/1.webp" alt="" className="propertyListItemImg" />
                <span className="propertyTitle">Hotels</span>
                <span className="totalPropertyNum">855,633 hotels</span>
            </div>

            <div className="propertyListItem">
                <img src="assets/property/1.webp" alt="" className="propertyListItemImg" />
                <span className="propertyTitle">Apartments</span>
                <span className="totalPropertyNum">801,286 apartments</span>
            </div>


            <div className="propertyListItem">
                <img src="assets/property/1.webp" alt="" className="propertyListItemImg" />
                <span className="propertyTitle">Resorts</span>
                <span className="totalPropertyNum">720 resorts</span>
            </div>

            <div className="propertyListItem">
                <img src="assets/property/1.webp" alt="" className="propertyListItemImg" />
                <span className="propertyTitle">Villas</span>
                <span className="totalPropertyNum">420,635 villas</span>
            </div>

            <div className="propertyListItem">
                <img src="assets/property/1.webp" alt="" className="propertyListItemImg" />
                <span className="propertyTitle">Villas</span>
                <span className="totalPropertyNum">420,635 villas</span>
            </div>

        </div>
    )
}

export default PropertyList