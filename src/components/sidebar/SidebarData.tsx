import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaIcons.FaHome />,
  },
  {
    title: 'ImageSearch',
    path: '/ImageSearch',
    icon: <FaIcons.FaImage />,
  },
  {
    title: 'LocationSearch',
    path: '/LocationSearch',
    icon: <FaIcons.FaLocationArrow />,
  },
  {
    title: 'Todo',
    path: '/Todo',
    icon: <FaIcons.FaTasks />,
  },
];
