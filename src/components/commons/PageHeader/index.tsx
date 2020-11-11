import { NavItem } from '@components/layout/SiderComponent/interface'
import { PageHeader } from 'antd'
import React from 'react'

interface Props{
    navigation:NavItem[];
}
const PageHeaderComponent=(props:Props)=> {
    return (
        <PageHeader 
        className="stite-page-header"
        title={undefined}
        />
    )
}

export default PageHeaderComponent