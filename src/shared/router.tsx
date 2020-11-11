import ForgotPassword from '@modules/Auth/ForgotPassword'
import NewPassword from '@modules/Auth/NewPassword'
import React from 'react'
import { Redirect } from 'react-router'

export const routerApp:Array<object>= [
    //LoginRouter
    {
        path:'/forgot-password',
        exact:true,
        main:()=><ForgotPassword />
    },
    {
        path:'/new-password',
        exact:true,
        main:()=><NewPassword />
    },
    {
        path:'',
        exact:true,
        main:()=><Redirect to={"/login"} />
    },
];