import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';
import * as GoIcons from 'react-icons/go';

export const SupportData = [
    {
        title : 'Problems with delivery',
        icon :  <FaIcons.FaTruck />,
        cName : 'supportIcon',
        description : <ul>
                        <li>Check if you have entered the numbers correctly</li>
                        <li>¿Where is my code?</li>
                        <li>Other</li>
                      </ul>
    },
    {
        title : 'Im not on time',
        icon :  <IoIcons.IoAlarmSharp />,
        cName : 'supportIcon',
        description : <ul>
                        <li>You have entered the address correctly ?</li>
                        <li>Check shipping code</li>
                        <li>Other</li>
                      </ul>
    },
    {
        title : 'Problems with the seller',
        icon :  <GoIcons.GoPerson />,
        cName : 'supportIcon',
        description : <ul>
                        <li>Not what you expected</li>
                        <li>Purchase by mistake</li>
                        <li>Other</li>
                      </ul>
    },
    {
        title : 'Payment with your purchase',
        icon :  <FaIcons.FaBox />,
        cName : 'supportIcon',
        description : <ul>
                        <li>Arrived in poor condition ?</li>
                        <li>Used or the defectuous ? </li>
                        <li>Other</li>
                      </ul>
    },
    {
        title : 'Payment method problems',
        icon :  <FaIcons.FaPaypal />,
        cName : 'supportIcon',
        description : <ul>
                        <li>Problems with payment</li>
                        <li>Other payment methods </li>
                        <li>Other</li>
                      </ul>
    },
    {
        title : 'Other problems',
        icon :  <IoIcons.IoChatboxEllipses />,
        cName : 'supportIcon',
        description : <ul>
                        <li>You are not happy with the service </li>
                        <li>Error when making a purchase</li>
                        <li>Account error ? </li>
                      </ul>
    },
]