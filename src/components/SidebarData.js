import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
    {
        title : 'Home',
        path : '/',
        icon : <AiIcons.AiFillHome />
    },
    {
        title : 'Reports',
        path : '/reports',
        icon : <IoIcons.IoIosPaper />
    },
    {
        title : 'Products',
        path : '/products',
        icon : <FaIcons.FaCartPlus />
    },
    {
        title : 'Team',
        path : '/team',
        icon : <IoIcons.IoMdPeople />
    },
    {
        title : 'Messages',
        path : '/messages',
        icon : <FaIcons.FaEnvelopeOpenText/>
    },
    {
        title : 'Support',
        path : '/support',
        icon : <IoIcons.IoMdHelpCircle />
    },
    {
        title : 'Profile',
        path : '/profile',
        icon : <CgIcons.CgProfile />
    }
]