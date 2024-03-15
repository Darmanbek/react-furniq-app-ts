import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPowerOff, FaRegHeart, FaRegUser } from "react-icons/fa6";
import { useAuthPersistStore } from "@/store";
import { RiShoppingBag3Line } from "react-icons/ri";

export const useLinks = () => {
    const { token } = useAuthPersistStore()
    
    return [
        { name: "home", link: "", icon: React.createElement(FaPowerOff) },
        { name: "search", link: "/catalogue", icon: React.createElement(CiSearch) },
        { name: "cart", link: "/cart", icon: React.createElement(RiShoppingBag3Line) },
        { name: "wishes", link: "/wishes", icon: React.createElement(FaRegHeart) },
        { name: "profile", link: token ? "/profile/orders" : "register", icon: React.createElement(FaRegUser) },
    ]
};
