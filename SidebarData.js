import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as SlIcons from "react-icons/sl";

export const SidebarData = [
    {
        title: 'DASHBOARD',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'IP ASSETS',
        path: '/ipassets',
        icon: <SlIcons.SlBulb />,
        cName: 'nav-text'
    },
    {
        title: 'PUBLICATIONS',
        path: '/publications',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'SETTINGS',
        path: '/settings',
        icon: <IoIcons.IoIosSettings />,
        cName: 'nav-text'
    },
    {
        title: 'LOGOUT',
        path: '/logout',
        icon: <IoIcons.IoIosLogOut />,
        cName: 'nav-text'
    },
    {
        title: 'SUPPORTS',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },

]




