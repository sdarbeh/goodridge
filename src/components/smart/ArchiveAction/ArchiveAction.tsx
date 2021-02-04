import React, { useState } from 'react'

// import { sortIcon, modalDownArrowIcon, displayIcon } from '../../../assets/icons/archive'
//items
import { ArchiveSortModal } from '../../modal'
// import { Container, DownArrow, Switch } from './ArchiveActionStyle'
import { Container } from './ArchiveActionStyle'

export default ({ sort, display, handleSortChange, handleDisplayChange }: any) => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleModalToggle = () => setModalOpen(prev => !prev)

    return (
        <>
            <Container active={modalOpen}>
                {/* <button onClick={handleModalToggle}>
                    {sortIcon(sort)}
                    <span>{sort}</span>
                    <DownArrow active={modalOpen}>{ modalDownArrowIcon }</DownArrow>
                </button>
                <Switch 
                    active={display === 'card'}
                    onClick={handleDisplayChange}
                >
                    <div>{displayIcon(display)}</div>
                </Switch> */}
            </Container>
            { modalOpen && (
                <ArchiveSortModal
                    onClose={handleModalToggle}
                    sort={sort}
                    handleSetSort={(sort: string) => {
                        handleSortChange(sort)
                        handleModalToggle()
                    }}
                />
            )}
        </>
    )
}