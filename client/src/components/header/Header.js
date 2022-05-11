import React, { useState } from 'react'
import "./header.scss"
import BedIcon from '@mui/icons-material/Bed';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import CarRentalOutlinedIcon from '@mui/icons-material/CarRentalOutlined';
import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import { BedOutlined } from '@mui/icons-material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';




function Header({ type }) {

    //Calender will be open only on click
    const [openCalender, setOpenCalender] = useState(false);   //initiallly it will be false

    //Calender state
    const [date, setDate] = useState([
        {
            startDate: new Date(),    //by default it will be current date
            endDate: new Date(),     //by default it will be current date
            key: 'selection'
            //type of these dates is Javascript date so we need to change it to human readable date with help of date-fns
        }
    ]);





    //To open Option field
    const [openOptions, setOpenOptions] = useState(false);

    //Option field ko initial values
    const [options, setOptions] = useState({
        adult: 1,        //initial value
        children: 0,     //initial value
        room: 1          //initial value
    })





    //Options increase decrease counter button
    const handleIncDec = (name, operation) => {
        setOptions(prev => {   //mathi ko initial state set garey ko
            return {
                ...prev,     //prev is initial state adult:1, children:0, room:1
                [name]: operation === 'inc' ? options[name] + 1 : options[name] - 1 //name means adult, children, room
            }
        })
    }





    //Search button click garda next page ma pani jawos ra with all data 
    const [destination, setDestination] = useState('');
    const navigate = useNavigate()  //to redirect user to any component and pages

    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, options } })
        //sending all this information to hotel page
    }




    
    return (
        <div className="header">
            < div className="headerWrapper" >
                <div className="headerItemRow">
                    <div className="headerItemCon  active">
                        <BedIcon />
                        <span>Stays</span>
                    </div>

                    <div className="headerItemCon flightCon">
                        <AirplanemodeActiveIcon />
                        <span>Flights</span>
                    </div>

                    <div className="headerItemCon carRentCon">
                        <CarRentalOutlinedIcon />
                        <span>Car rentals</span>
                    </div>

                    <div className="headerItemCon attractionCon">
                        <AttractionsOutlinedIcon />
                        <span>Attractions</span>
                    </div>

                    <div className="headerItemCon taxisCon">
                        <LocalTaxiOutlinedIcon />
                        <span>Airport taxis</span>
                    </div>
                </div>

                <span className="headerTxtBig">A lifetime of discounts? It's Genius. </span>
                <span className="TxtSmall">Get rewarded for your travels unlock instant savings of 10% or more with a free <br />  Booking.com account</span>
                <button className="loginRegisterButton">Sign in / Register</button>

                {/* Header Search Bar ------------------------------------------*/}
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <BedOutlined className='headerSearchIcon' />
                        <input type="text" className='headerSearchInput' placeholder='Where are you going' onChange={e => setDestination(e.target.value)} />
                    </div>


                    {/* whenever i click on this div calender will appear condition */}
                    <div className="headerSearchItem " >
                        <CalendarMonthOutlinedIcon className='headerSearchIcon' onClick={() => setOpenCalender(!openCalender)} />


                        {/* changing Javascript date into human readable using format function date-fns */}
                        <span onClick={() => setOpenCalender(!openCalender)} className='headerSearchInputTxt'>{`${format(date[0].startDate, " MM/dd/yyyy ")}  to  ${format(date[0].endDate, " MM/dd/yyyy")}`}</span >

                        {/* calender -------------------------->*/}
                        {openCalender && <DateRange  //when openCalender state is true then only show calender.state will be true when i click on above span
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="dateSelectCalender"
                        />}

                    </div>

                    <div className="headerSearchItem">
                        <PersonIcon className='headerSearchIcon' onClick={() => setOpenOptions(!openOptions)} />
                        <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchInputTxt'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}  </span>



                        {/* Option field Container (children adult room) ===============================================================>*/}
                        {openOptions && <div className="optionsCon"> {/* when openOptions is true then only show this div now it is false it will be true when we click on above span */}
                            <div className="optionItems">
                                <span className="optionTxt">Adult</span>
                                <button className="optionCounterButton" onClick={() => handleIncDec("adult", "dec")} disabled={options.adult <= 1} >-</button>
                                <span className="counterNumber">{options.adult}</span>
                                <button className="optionCounterButton" onClick={() => handleIncDec("adult", "inc")}>+</button>
                            </div>

                            <div className="optionItems">
                                <span className="optionTxt ">Children</span>
                                <button className="optionCounterButton optionCounterButton1" onClick={() => handleIncDec("children", "dec")} disabled={options.children <= 0}>-</button>
                                <span className="counterNumber">{options.children}</span>
                                <button className="optionCounterButton optionCounterButton2" onClick={() => handleIncDec("children", "inc")}>+</button>
                            </div>

                            <div className="optionItems">
                                <span className="optionTxt">Room</span>
                                <button className="optionCounterButton" onClick={() => handleIncDec("room", "dec")} disabled={options.room <= 1}   >-</button>
                                <span className="counterNumber">{options.room}</span>
                                <button className="optionCounterButton" onClick={() => handleIncDec("room", "inc")}>+</button>
                            </div>
                        </div>}


                    </div>
                    {/* On Button click next page ma jawoa with all the data input here by the user*/}
                    <button className=' headerSearchButton' onClick={handleSearch} >Search</button>
                </div>
            </div >
        </div >
    )
}

export default Header