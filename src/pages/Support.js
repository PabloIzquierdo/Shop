import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';
import * as GoIcons from 'react-icons/go';

function Support(){
    return(
        <div className="support">
            <div className="support__container">
                <h1 className="support__container-title">What is the problem?</h1>
                <div className="support__items">
                    <ul>
                        <li className="support__items--link">
                            <FaIcons.FaTruck className="support__items--link-icon"/>
                            <p className="support__items--link-text">Problems with <br/> delivery</p>
                        </li>
                        <li className="support__items--link">
                            <IoIcons.IoAlarmSharp className="support__items--link-icon"/>
                            <p className="support__items--link-text">Im not on time</p>
                        </li>
                        <li className="support__items--link">
                            <GoIcons.GoPerson className="support__items--link-icon"/>
                            <p className="support__items--link-text">Problems with <br/>the seller</p>
                        </li>
                        <li className="support__items--link">
                            <FaIcons.FaBox className="support__items--link-icon"/>
                            <p className="support__items--link-text">Problems with <br/>your purchase </p>
                        </li>
                        <li className="support__items--link">
                            <FaIcons.FaPaypal className="support__items--link-icon"/>
                            <p className="support__items--link-text">Payment method <br/>problems</p>
                        </li>
                        <li className="support__items--link">
                            <IoIcons.IoChatboxEllipses className="support__items--link-icon"/>
                            <p className="support__items--link-text">Other problems</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Support;