import "./smallHeader.scss"
import BedIcon from '@mui/icons-material/Bed';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import CarRentalOutlinedIcon from '@mui/icons-material/CarRentalOutlined';
import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';



function SmallHeader() {
    return (
        <div className='smallHeader'>
            < div className="shWrapper" >
                <div className="shItemRow">
                    <div className="shItemCon  active">
                        <BedIcon />
                        <span>Stays</span>
                    </div>

                    <div className="shItemCon flightCon">
                        <AirplanemodeActiveIcon />
                        <span>Flights</span>
                    </div>

                    <div className="shItemCon carRentCon">
                        <CarRentalOutlinedIcon />
                        <span>Car rentals</span>
                    </div>

                    <div className="shItemCon attractionCon">
                        <AttractionsOutlinedIcon />
                        <span>Attractions</span>
                    </div>

                    <div className="shItemCon taxisCon">
                        <LocalTaxiOutlinedIcon />
                        <span>Airport taxis</span>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default SmallHeader