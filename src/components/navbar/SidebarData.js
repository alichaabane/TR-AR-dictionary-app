import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from "react-icons/all";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Quiz',
        path: '/quiz',
        icon: <FaIcons.MdQuiz/>,
        cName: 'nav-text'
    }
];
