import DefaultLayout from '@components/commons/DefaultLayout';
import router from '@modules/Auth/login/router';
import React from 'react'
import ShowRouter from './ShowRouter';
interface Props{
    privateLogin?:boolean;
}
const AppLogin:React.FC<Props>=({})=> {
    return (
        <DefaultLayout >
            <ShowRouter routers={router} />
        </DefaultLayout>
    );
};

export default AppLogin;