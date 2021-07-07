import React from 'react';
import * as AiIcons from 'react-icons/ai';
import {MdBusiness} from 'react-icons/md';
import {BiExit,BiSpreadsheet,BiNews} from 'react-icons/bi'
import {TiUserDeleteOutline} from 'react-icons/ti'
import {ImProfile} from 'react-icons/im'





export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard/employer',
    icon: <AiIcons.AiFillDashboard />,
    cName: 'sidebarnav-text'
  },
  {
    title: 'Profili Düzenle',
    path: '/dashboard/employer/update/1',
    icon: <ImProfile />,
    cName: 'sidebarnav-text'
  },
  {
    title: 'Şirket Sayfası',
    path: '/profile/employer/1',
    icon: <MdBusiness />,
    cName: 'sidebarnav-text'
  },
  {
    title: 'İlanlarım',
    path: '/myjobpostings',
    icon: <BiSpreadsheet />,
    cName: 'sidebarnav-text'
  },
  {
    title: 'Yeni İş İlanı Yayınla',
    path: '/jobposting/add',
    icon: <BiNews />,
    cName: 'sidebarnav-text'
  },
  {
    title: 'Profili Sil',
    path: '/delete/employer',
    icon: <TiUserDeleteOutline />,
    cName: 'sidebarnav-text'
  },
  {
    title: 'Çıkış Yap',
    path: '/',
    icon: <BiExit />,
    cName: 'sidebarnav-text'
  }
];