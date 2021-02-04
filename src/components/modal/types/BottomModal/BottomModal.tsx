import React from 'react'

// items
import Modal from '../Modal/Modal'
import { Container, Content } from './BottomModalStyle'

interface props {
    handleClose: any;
    children: any;
}

export default ({ handleClose, children }: props) => (
    <Modal handleClose={handleClose}>
        <Container>
            <Content>
                {children}
            </Content>
        </Container>
    </Modal>
)