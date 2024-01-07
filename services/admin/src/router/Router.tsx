import {createBrowserRouter} from "react-router-dom";
import App from "@/components/App";
import {Suspense} from "react";
import {LazyAbout} from "@/page/about/About.lazy";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'Loading...'}><LazyAbout/></Suspense>
            },
        ]
    }
];
export const router = createBrowserRouter(routes);
export default routes;