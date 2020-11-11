import { routerApp } from '@shared/router';
import React from 'react'
import { useHistory } from 'react-router';
import ShowRouter from './ShowRouter';

interface Props{
    privateLogin?:boolean;
}
const AppNotLogin: React.FC<Props>=({privateLogin})=> {
    const history=useHistory();
    if(!privateLogin){
        history.push('/');
    }
    return (
        <>
            <ShowRouter routers={routerApp} />
        </>
    )
}

export default AppNotLogin;
