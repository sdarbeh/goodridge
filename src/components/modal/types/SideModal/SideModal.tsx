import React from 'react'

// items
import Modal from '../Modal/Modal'
import { Content } from './SideModalStyle'

interface props {
    handleClose: any;
    children: any;
}

export default ({ handleClose, children }: props) => (
    <Modal handleClose={handleClose}>
        <Content>
            {children}
        </Content>
    </Modal>
)