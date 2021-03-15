import React from 'react';
import * as VsIcon from 'react-icons/vsc';
import * as GrIcon from 'react-icons/gr';
import * as MdIcon from 'react-icons/md';
import * as BiIcon from 'react-icons/bi';

const reportData = [
    {
        id: "01",
        title: "Account and phising",
        icon: <VsIcon.VscAccount/>,
        description: "Identify, correct and report experiences",
        url: "https://www.cpomagazine.com/wp-content/uploads/2020/06/google-branded-phishing-attacks-account-for-65-of-threats-facing-remote-workers_1500.jpg"
    },
    {
        id: "02",
        title: "Returns and refunds",
        icon: <GrIcon.GrMoney/>,
        description: "Return or change products treatment",
        url: "https://www.l3home.com.au/assets/images/Return_Refund_L3_1.jpg"
    },
    {
        id: "03",
        title: "Discounts and offers",
        icon: <MdIcon.MdLocalOffer/>,
        description: "Check the discounts and offers experiences",
        url: "https://www.theindianwire.com/wp-content/uploads/2018/05/coupons.jpg"
    },
    {
        id: "04",
        title: "About customer support",
        icon: <BiIcon.BiSupport/>,
        description: "Read about others dealings",
        url: "https://www.cloudtalk.io/files/resize-image/576/1200/cloudtalk-phone-etiquette-for-customer-support-teams.jpg"
    }
]

export default reportData;