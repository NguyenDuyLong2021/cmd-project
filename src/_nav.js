import React from 'react'
import CIcon from '@coreui/icons-react'
import {
    cilAlarm,
    cilCircle,
    cilDevices,
    cilList,
    cilPeople,
    cilShareBoxed,
    cilSpeedometer,
    cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
    {
        component: CNavItem,
        name: 'Bảng tin',
        to: '/posts',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Nhắc việc',
        to: '/alarm-list',
        icon: <CIcon icon={cilAlarm} customClassName="nav-icon" />,
    },
    {
        component: CNavGroup,
        name: 'Công việc',
        to: '/todo-list',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Tất cả công việc',
                to: '/todo-list',
                icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
            },
            {
                component: CNavItem,
                name: 'Công việc của tôi',
                to: '/todo-list/assigned-to-me',
                icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
            },
        ]
    },
    {
        component: CNavGroup,
        name: 'Đề xuất',
        to: '/requests',
        icon: <CIcon icon={cilShareBoxed} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Tất cả',
                to: '/requests',
                icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
            },
            {
                component: CNavItem,
                name: 'Đề xuất của tôi',
                to: '/requests/created-by-me',
                icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
            },
            {
                component: CNavItem,
                name: 'Đề xuất tôi duyệt',
                to: '/requests/approve-by-me',
                icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
            },
        ]
    },
    {
        component: CNavItem,
        name: 'Thiết bị',
        to: '/devices',
        icon: <CIcon icon={cilDevices} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Nhân viên',
        to: '/employees',
        icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
        badge: {
            color: 'info',
            text: 'NEW',
        },
    },
    {
        component: CNavGroup,
        name: 'Pages',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Login',
                to: '/login',
                icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
            },
            {
                component: CNavItem,
                name: 'Register',
                to: '/register',
                icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
            },
            {
                component: CNavItem,
                name: 'Error 404',
                to: '/404',
                icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
            },
            {
                component: CNavItem,
                name: 'Error 500',
                to: '/500',
                icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
            },
        ],
    },
]

export default _nav
