import UserProvider from '@shared/Context/User';
import {Layout} from 'antd';
import React, { useState } from 'react'
import { layoutContext } from './commons/DefaultLayout';


const {Content,Footer}=Layout;
export const layoutContent=React.createContext(null);

const DefaultLayout=props=> {
    const [toogleSider,setToogleSider]=useState(false);
    return (
        <layoutContext.Provider
            value={{
                setToogleSider:setToogleSider,
                toogleSider:toogleSider,
            }}
        >
            <UserProvider>
                <Layout className={"site-layout"}>
                    <Content style={{transition:"ease-in-out 0.2s all",overflow:"initial",marginLeft:`${toogleSider ? "80px":"250px"}`}}>
                        <div className={`main-content-wrapper`}>
                            <div className={`wrap-content`}>
                                
                            </div>
                        </div>
                    </Content>
                </Layout>
            </UserProvider>
        </layoutContext.Provider>
    )
}

export default DefaultLayout
