import React, { createContext, useState,useEffect } from 'react'
import jwt from 'jsonwebtoken';
import {ACCESS_JWTTOKEN} from "@helper/variable";
import { loadavg } from 'os';
export const UserContext=createContext(null);

const UserProvider=(props)=> {
    const [userInfo,setUserInfo]=useState(null);
    useEffect(() => {
        const infoUser=getInfoUserFromToken();
        setUserInfo(infoUser)
    }, [])

    const getInfoUserFromToken=()=>{
        const token=getToken();
        if(!token) return;
        return jwt.decode(token);
    }
    const getToken=()=>{
        return localStorage.getItem(ACCESS_JWTTOKEN);
    }
    const checkPermission = (premission)=>{
        if(!userInfo) return;
        const listPermision=userInfo['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        if(premission=="ALLOW") return true;
        const isAllow=!(listPermision.indexOf(premission)!=-1);
        return isAllow;
    }
    return (
        <UserContext.Provider  value={{userInfo,setUserInfo,checkPermission,getToken}}>

        </UserContext.Provider>
    )
}

export default UserProvider