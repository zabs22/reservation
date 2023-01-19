import React from 'react'
import './sectionCard.css';
import BedIcon from "@mui/icons-material/Bed"
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";

const SectionCard = () => {
  return (
    <div>
        <div className="FourthSection-div">
            <div className="Cities">
                <div className="cityBox">
                    <img src='https://www.roadaffair.com/wp-content/uploads/2019/10/meyazia-27-square-addis-ababa-ethiopia-shutterstock_187152050.jpg' alt="addis"/>
                    <span className="cityName">Addis Ababa</span>
                    <p className="cityHotels">120 Hotels</p>
                </div>
                <div className="cityBox">
                    <span className="cityName">Bahir Dar</span>
                    <p className="cityHotels">27 Hotels</p>
                    <img src="https://images.unsplash.com/photo-1625141440931-984750bf960a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="bahirdar"/>
                </div>

            </div>

            <div className="citythree">
                <div className="cityBox">
                    <img src="https://brilliant-ethiopia.imgix.net/lake-awasa-2.jpg?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=1200&h=0&q=30" alt="hawassa"/>
                    <span className="cityName">Hawassa</span>
                    <p className="cityHotels">41 Hotels</p>
                </div>
                <div className="cityBox">
                    <img src="https://images.unsplash.com/photo-1608634193723-1865aa4416ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="gondar"/>
                    <span className="cityName">Gondar</span>
                    <p className="cityHotels">18 Hotels</p>
                </div>
                <div className="cityBox">
                    <img src="https://cdn.britannica.com/70/142570-050-2DC9EEC3/Railway-station-Dire-Dawa-Eth.jpg" alt="diredawa"/>
                    <span className="cityName">Dire Dawa</span>
                    <p className="cityHotels">4 Hotels</p>
                </div>
            </div>

        </div>
         <div className="FourthSection">
            <h3>We've got you covered</h3>
            <div className="outerFlex">
                <div className="innerFlex">
                    <div>
                        <BedIcon className="sectionIcon" />
                    </div>
                    <div>
                        <h5>Explore top Hotels in Ethiopia</h5>
                        <div>Experience the best of your destination, with the best hospitality</div>
                    </div>
                </div>

                <div className="innerFlex">
                    <div>
                        <CalendarMonthRoundedIcon className="sectionIcon" />
                    </div>
                    <div>
                        <h5>Fast and flexible</h5>
                        <div>Book Hotel Rooms online in minutes, with many options</div>
                    </div>
                </div>

                <div className="innerFlex">
                    <div>
                        <PeopleOutlineRoundedIcon className="sectionIcon" />
                    </div>
                    <div>
                        <h5>Support when you need it</h5>
                        <div>Our Customer Service team is here to help 24/7</div>
                    </div>
                 </div>
            </div>

        </div>
    </div>
  )
}

export default SectionCard