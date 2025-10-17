import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomePage from "../HomePage/HomePage";
import AllApps from "../AllApps/AllApps";

export const router=createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                index:true,
                loader:()=>fetch('TrendingApps.json'),
                Component:HomePage
            },
            {path:'/apps',
                 loader:()=>fetch('AllApps.json'),
               Component:AllApps 
            }
        ]
    }
]);