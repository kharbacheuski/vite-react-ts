import { Navigate, useRoutes } from "react-router-dom";
import { FC } from "react";
import Page from "./components/pages";

export const ProtectedRoute = ({ isAuth, children }) => {
    if (!isAuth) {
        return <Navigate to="/sign-in" />;
    }

    return children;
};

export const Element: FC<{isAuth: boolean}> = ({isAuth}) => {
    const routes = useRoutes([
        {path: '/', element: <ProtectedRoute isAuth={isAuth} children={<Page />} />},
    ])

    return routes
}