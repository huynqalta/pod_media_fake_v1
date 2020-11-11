import React from 'react'
import {Dropdown,Menu} from 'antd';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLanguage} from "@fortawesome/free-solid-svg-icons";

const MenuLanguage=()=> {
    const menuLang=(
        <Menu>
            <Menu.Item>
                <a className={'USE'}>English</a>
            </Menu.Item>
            <Menu.Item>
                <a className={'VMN'}>Việt Nam</a>
            </Menu.Item>
        </Menu>
        
    );
    return (
        <>
            <Dropdown trigger={["click"]} overlay={menuLang} placement="bottomCenter" arrow>
                <a>
                    {" "}
                    <FontAwesomeIcon color="#2581BC" style={
                        {fontSize:"2rem",cursor:"pointer"}
                    } icon={faLanguage}/>
                </a>
            </Dropdown>
        </>
    )
}

export default MenuLanguage