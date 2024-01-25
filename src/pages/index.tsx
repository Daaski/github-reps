import React from "react";

import {createBrowserRouter} from "react-router-dom";

import {Main} from "pages/Home/components/Main";
import ErrorPage from "components/ErrorPage/error-page";
import {RepositoryPage} from "pages/RepositoryPage/components/RepositoryPage";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/repositories/:id',
        element: <RepositoryPage />,
        errorElement: <ErrorPage />,
    }
]);