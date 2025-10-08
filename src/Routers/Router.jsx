import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Components/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx'
import Home from '../pages/Home/Home.jsx';
import Apps from '../pages/App/Apps.jsx';
import Installation from '../pages/Installation/Installation.jsx'
import AppDetails from '../pages/AppDetails/AppDetails.jsx';






export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('/data.json'),
                path: '/',
                Component: Home
            },
            {
                path: '/apps',
                loader: () => fetch('/data.json'),
                Component: Apps
            },
            {
                path: '/installation',
                loader: () => fetch('/data.json'),
                element: <Installation></Installation>
            },
            {
                path: '/appDetails/:appId',
                loader: () => fetch('/data.json'),
                Component: AppDetails
            }
        ]
    }
])
