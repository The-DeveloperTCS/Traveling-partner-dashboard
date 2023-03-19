/* eslint-disable prettier/prettier */
import * as React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { DashboardLayout } from '../layouts/Dashboard/DashboardLayout'
import Dashboard from '../pages/Dashboard/Dashboard/Dashboard'
import Profile from '../pages/Dashboard/Profile/Profile'
import UserManagement from '../pages/Dashboard/User'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'

import PrivateRoute from './PrivateRoute'

export default function Routes(): ReactNode {
    return useRoutes([
        {
            path: '/dashboard',
            element: <PrivateRoute navLink="/" component={DashboardLayout} />,
            children: [
                {
                    path: 'dashboard',
                    element: <Dashboard />,
                },
                {
                    path: 'user-management',
                    element: <UserManagement />,
                },
                {
                    path: 'profile',
                    element: <Profile />,
                },
            ],
        },
        { path: '404', element: <NotFound /> },
        {
            path: '/',
            element: <Login />,
        },
        {
            path: '*',
            element: <Navigate to="/404" />,
        },
    ])
}
