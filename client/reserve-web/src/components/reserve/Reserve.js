import React from 'react'
import './Reserve.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar"

const Reserve = ({setOpen}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if(true) {
         navigate("/checkout");
       }
     };

     //const isAvailable logic is here
  return (
    <>
    <Navbar />
    <div>
        <div className="reserve">
            <div className="rContainer">
                <span>Select your rooms:</span>
                {/* {data.map((item) => pass rItem)*/}
                <div className="rItem"> 
                    <div className="rItemInfo">
                        <div className="rTitle">Our Rooms</div> {/* item.title*/}
                        <div className="rDesc">Description</div> {/* item.desc*/}
                        <div className="rMax">
                        Max people: <b>2</b> {/* item.maxPeople*/}
                        </div>
                        <div className="rPrice">ETB 130</div> {/* item.price*/}
                    </div>
                    <div className="rSelectRooms">
                        {/* item.roomNumbers.map((roomNumber) => pass room */}
                        <div className="room">
                            <label>Room Number:</label> {/* roomNumber.number*/}
                                <input
                                    type="checkbox"
                                    //value=roomNumber._id
                                    //onChange={handleSelect}
                                    //disabled={!isAvailable(roomNumber)}
                                />
                        </div>
                    </div>
                </div>
                <button onClick={handleClick} className="rButton">
                    Reserve Now!
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Reserve;