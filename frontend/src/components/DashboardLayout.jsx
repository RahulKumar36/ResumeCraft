import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Navbar } from "./Navbar";

export const DashboardLayout = ({activeMenu,children})=>{
    const {user} = useContext(UserContext)
    return(
        <>
        <div>
            <Navbar activeMenu={activeMenu}/>
            {user && <div className='container mx-auto pt-30 pb-4'>{children}</div>}
        </div>
        </>
    )
}