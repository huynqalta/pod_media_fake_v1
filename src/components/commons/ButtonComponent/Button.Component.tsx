import React, { ReactNode, useRef } from 'react'
import './style.scss'
import {Spin} from 'antd'
import {LaptopOutlined, LoadingOutlined} from '@ant-design/icons'

const antIcon=<LaptopOutlined style={{fontSize:24}} spin />;
interface Ipros{
    onClick?: (event)=>void;
    className?:string;
    icon?:string;
    text?:string | ReactNode;
    disabled?: boolean;
    type?: any;
    refs?: any;
    style?:any;
    iconAnt?:any;
    loading?:boolean;
    changeColor?: boolean;
    htmlType?:any;
    
}
const ButtonComponent=(props:Ipros)=> {
    const myRef=useRef();
    return (
        <button
        style={props.style}
        className={`btn align-items-center mx-2 justify-content-center button-component ${props.className} ${props.changeColor && "button-component-blue"}`}
        type={props.type?props.type:"button"}
        ref={props.refs || myRef}
        onClick={(event)=>(props.onClick?props.onClick(event):undefined)}
        disabled={props.disabled}
        >
            {props.loading && <Spin size="small" indicator={antIcon} className={"text-white mr-2"} />}
            {props.icon && <i className={`icon ${props.icon}`} />}
            {props.iconAnt && props.iconAnt} {props.text||"Click"}
        </button>
    );
};

export default ButtonComponent;