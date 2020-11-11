import {Layout} from 'antd'
import React, { useState } from 'react'



const {Content,Footer}=Layout;
export const layoutContext=React.createContext(null);

const  DefaultLayout=props=> {
    const [toogleSider,setToggleSider]=useState(false);
    return (
        <layoutContext.Provider value={{
            setToggleSider:setToggleSider,
            toogleSider:toogleSider,
        }}>
            
        </layoutContext.Provider>
    )
}

export default DefaultLayout
