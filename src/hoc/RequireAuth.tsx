import React from "react";
import { useAuthPersistStore } from "@/store";
import { Navigate } from "react-router-dom";

interface RequireAuthProps {
    children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({children }) => {
    const { token } = useAuthPersistStore()

    if (!token) {
        return <Navigate to="/register" replace/>
    }

    return children;
};

export default RequireAuth;
