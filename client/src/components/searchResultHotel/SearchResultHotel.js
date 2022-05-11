import React from 'react'
import "./searchResultHotel.scss"



function SearchResultHotel() {
    return (
        <div className='searchResultHotel' >
            <div className="searchResultHotelWrapper">
                <img className='SRImg' src="/assets/property/3.jpg" alt="" />
                <div className="searchHotelRight">
                    <div className="row1">
                        <span className='SRAppartmentName' >Tower Street Apartment</span>
                        <span className='SRRatingTxt'>Excellent</span>
                        <span className='SRRate' >8.9</span>
                    </div>

                    <span className='SRdistance'>500 meter from center</span>
                    <span className='SRfreeTaxi'>Free airport taxi</span>
                    <span className='SRfacility'>Studio Apartment with Air Condtitioning</span>

                    <div className="Row2">
                        <span className='Row2ko1'>Entire studio</span>
                        <span className='Row2ko2'> $145</span>
                    </div>


                    <div className="Row3">
                        <span className="Row3ko1">Fee Cancellation</span>
                        <span className="Row3ko2">Includes taxes and fees</span>
                    </div>



                    <div className="Row4">
                        <span className="Row4ko1">You can cancell later, so lock in the great price today</span>
                        <button className="Row4ko2">See availability</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SearchResultHotel