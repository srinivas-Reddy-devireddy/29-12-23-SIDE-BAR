import React from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { MdBusiness, MdOutlineLocalOffer } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
          <ul>
            <li>
              <HiOutlineHome className="icon" /> Dashboard
            </li>
            <li>
            <MdBusiness className="icon" /> Front desk
            </li>
            <li>
              <BiTask className="icon" />  Guest
                
            </li>
            <li>
            
              <CiBookmark className="icon" /> Rooms
            </li>
            <li>
             
              <MdOutlineLocalOffer className="icon" /> Deals
            </li>
            <li>
             
              <AiOutlineDollarCircle className="icon" /> Rate
            </li>
          </ul>
        </div>
      );
    };

export default Sidebar