import React, { useState } from 'react'
import "./hotelsList.scss"
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchResultHotel from '../../components/searchResultHotel/SearchResultHotel'
import SmallHeader from '../../components/smallHeader/SmallHeader'
import Mail from '../../components/mail/Mail'
import Footer from '../../components/footer/Footer'



function HotelsList() {

  //Getting date,destination and option
  const location = useLocation()
  console.log(location)





  //Lets use that data 
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)





  //To open calender on click
  const [openCalender1, setOpenCalender1] = useState(false)





  return (
    <div className='hotelList'>
      <Navbar />
      <SmallHeader />
      <div className="hotelListContainer">
        <div className="hotelListContainerWrapper">

          {/* search container ===============================>*/}
          <div className="hotelListSearchContainer">
            <div className="hotelListSearchContainerWrapper">
              <span className="hotelListSearchTitle">Search</span>


              <div className="listSearchItem">
                <span className='destinationAndDate'>Destination</span>
                <input className='searchDest' type="text" placeholder={destination} />
              </div>

              <div className="listSearchItem" >
                <label className='destinationAndDate' htmlFor="">Check-in-date</label>
                <span onClick={() => setOpenCalender1(!openCalender1)} className='checkindate'>{`${format(date[0].startDate, " MM/dd/yyyy ")}  to  ${format(date[0].endDate, " MM/dd/yyyy")}`}</span>
                {openCalender1 && <DateRange   //to open calender when openCalender is true .now it is false
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="dateSelectCalender"
                />}
              </div>


              {/* Search Container options section=============== */}
              <div className="searchItemListConWrapper">
                <span className="optionsTxt" >options</span>

                <div className="optionList">
                  <span className=' optionsListTxt'>Min price (per night)</span>
                  <input className='optionListInput' type="number" min={1} />
                </div>

                <div className="optionList">
                  <span className=' optionsListTxt'>Min price  (per night)</span>
                  <input className='optionListInput' type="number" min={1} />
                </div>

                <div className="optionList">
                  <span className=' optionsListTxt'>Adult</span>
                  <input className='optionListInput' type="number" min={1} placeholder={options.adult} />
                </div>

                <div className="optionList">
                  <span className=' optionsListTxt'>Children</span>
                  <input className='optionListInput' type="number" min={0} placeholder={options.children} />
                </div>

                <div className="optionList">
                  <span className=' optionsListTxt'>Room</span>
                  <input className='optionListInput' type="number" min={1} placeholder={options.room} />
                </div>

                <button className='optionListBut'>Search</button>
              </div>
            </div>
          </div>

          <div className="hotelListResultContainer">
            <SearchResultHotel />
            <SearchResultHotel />
            <SearchResultHotel />
            <SearchResultHotel />
            <SearchResultHotel />
            <SearchResultHotel />
          </div>
        </div>
      </div>
      <Mail/>
      <Footer/>
    </div>
  )
}

export default HotelsList