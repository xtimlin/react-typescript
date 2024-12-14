import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaIcons.FaHome />,
  },
  {
    title: 'Image Search',
    path: '/ImageSearch',
    icon: <FaIcons.FaImage />,
  },
  {
    title: 'Location Search',
    path: '/LocationSearch',
    icon: <FaIcons.FaLocationArrow />,
  },
  {
    title: 'Todo',
    path: '/Todo',
    icon: <FaIcons.FaTasks />,
  },
  {
    title: 'Mini Market',
    path: '/MiniMarket',
    icon: <FaIcons.FaShoppingCart />,
  },
  {
    title: 'Persons',
    path: '/Persons',
    icon: <FaIcons.FaAddressBook />,
  },
  {
    title: 'Copy',
    path: '/Copy',
    icon: <FaIcons.FaCopy  />,
  },
];
