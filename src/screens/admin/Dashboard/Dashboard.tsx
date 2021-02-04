import React from 'react'
// items
import { AdminContainer } from '../../../components/admin'
import { Content } from './DashboardStyle'

export default (props: any) => {

    return (
        <AdminContainer>
            <Content>
               <h1>Dashboard</h1> 
            </Content>
        </AdminContainer>
    )
}