import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SmallHeader from '../../components/smallHeader/SmallHeader'
import "./singleHotel.scss"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Mail from '../../components/mail/Mail';
import Footer from '../../components/footer/Footer';



function SingleHotel() {
  return (
    <div className='singleHotelPage'>
      <Navbar />
      <SmallHeader />
      <div className="shContainer">
        <div className="shWrapper">
          <div className="shRow1">
            <span className="shTitle">Tower Street Apartments</span>
            <button className="shButton">Reserve or Book Now</button>
          </div>

          <div className="shAddress">
            <LocationOnIcon className="shIcon" />
            <span className="shAddressText">Tikapur kailali 23 block 4</span>
          </div>

          <span className="shHotelDistance">Excellent Location -500 meter away </span>
          <span className="shHotelOfferHighlight">Book or stay over $115 and get a free taxi ride </span>

          <div className="hotelImageGallery">
            <img src="https://images.unsplash.com/photo-1652067904796-9f5af0490643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="shImage" />
            <img src="https://images.unsplash.com/photo-1652067904796-9f5af0490643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="shImage" />
            <img src="https://images.unsplash.com/photo-1652067904796-9f5af0490643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="shImage" />
            <img src="https://images.unsplash.com/photo-1652067904796-9f5af0490643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="shImage" />
            <img src="https://images.unsplash.com/photo-1652067904796-9f5af0490643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="shImage" />
            <img src="https://images.unsplash.com/photo-1652067904796-9f5af0490643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="shImage" />
          </div>

          <div className="shDetailAndPriceRow">
            <div className="shDetail">
              <span className="shDetailTitle">Stay in the Heart of Karkov</span>
              <span className="shDetailText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus voluptas asperiores reiciendis debitis vero alias deleniti sunt placeat eum neque vitae laboriosam error perferendis, recusandae libero animi nobis? Nam, voluptas officia provident maxime odit dolores expedita consequuntur repellat reprehenderit iure eveniet in, eius, dicta alias dolorum! Aliquam doloremque sed impedit commodi inventore quaerat temporibus et iure, qui cupiditate ex eius earum dicta deserunt vero exercitationem mollitia ducimus. Excepturi nobis sapiente tempora eum hic molestiae dolor odio nisi, libero id.</span>
            </div>

            <div className="shPriceCon">
              <span className="shPriceTitle">Perfect for 9 nights stay!</span>
              <span className="shPriceDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, nihil unde, laboriosam reprehenderit eius ab velit ipsam ratione fuga placeat repudiandae voluptatum nostrum nam, doloremque facilis fugit quae aut amet?</span>
              <div className="shPriceAndNight">
                <span className="shPrice">$115</span>
                <span className="shNight">(9 nights)</span>
              </div>

              <button className="shButton">Reserve or Book Now</button>
            </div>
          </div>


        </div>
      </div>
      <Mail/>
      <Footer/>
    </div>
  )
}

export default SingleHotel