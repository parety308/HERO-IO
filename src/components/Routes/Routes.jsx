import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomePage from "../HomePage/HomePage";
import AllApps from "../AllApps/AllApps";
import ErrorPage from "../ErrorPage/ErrorPage";
import AppDetails from "../AppDetails/AppDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('TrendingApps.json'),
                Component: HomePage
            },
            {
                path: '/apps',
                loader: () => fetch('AllApps.json'),
                Component: AllApps
            },
            {
                path: '/appDetails/:appId',
                loader: () => fetch('AllApps.json'),
                Component: AppDetails
            }
        ]
    }
]);