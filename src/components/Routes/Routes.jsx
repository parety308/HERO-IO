import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomePage from "../HomePage/HomePage";

export const router=createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                index:true,
                Component:HomePage
            },
            {
                
            }
        ]
    }
]);