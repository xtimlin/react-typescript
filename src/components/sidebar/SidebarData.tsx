import React from 'react';
import * as FaIcons from 'react-icons/fa'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'ImageSearch',
        path: '/imageSearch',
        icon: <FaIcons.FaUsers />
    },
    {
        title: 'Todo',
        path: '/todo',
        icon: <FaIcons.FaTasks />
    }
]