import React from 'react'

// items
import { Modal } from '../types'
import { FontSizeController, ThemeColorController, ThemeModeController } from './controllers'
import { Container, Content, DoneButton, Description, SectionTitle, UIContainer } from './ThemeModalStyle'

export default ({ handleClose }: any) => (
    <Modal handleClose={handleClose}>
        <Container>
            <Content>
                <DoneButton onClick={handleClose}>Done</DoneButton>
                <Description>Customize your font size, color and background.</Description>
                {/* Font size */}
                <SectionTitle>Font size</SectionTitle>
                <UIContainer>
                    <FontSizeController />
                </UIContainer>
                {/* Theme color */}
                <SectionTitle>Color</SectionTitle>
                <UIContainer>
                    <ThemeColorController />
                </UIContainer>
                {/* Theme mode */}
                <SectionTitle>Background</SectionTitle>
                <UIContainer>
                    <ThemeModeController />
                </UIContainer>
            </Content>
        </Container>
    </Modal>
)