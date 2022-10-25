import React from "react";
import "./header.css";
import {  FaRegSun, FaRegBell } from "react-icons/fa";
import Img from '../../../imgs/profile.png'

export const Header = ({ children }) => {
    return (

        <div className="icons">
            <div className="image">
                <a href="/profile">
                    <img src={Img} alt="profile" />
                </a>
            </div>

            <FaRegSun />
            <FaRegBell />
            {children}
        </div>

    );




};
export default Header;