import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {router} from "@/router/Router";

const root = document.getElementById('root')

if(!root) {
    throw  new Error('root not found')
}

const container = createRoot(root);

container.render(
    <RouterProvider router={router}/>
);