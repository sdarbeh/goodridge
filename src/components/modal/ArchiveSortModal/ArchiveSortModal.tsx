import React from 'react'

import { circleIcon, circleCheckIcon } from '../../../assets/icons/widgets'
//items
import { BottomModal } from '../types'
import { ModalTitle, Button } from './ArchiveSortModalStyle'

const options = ['best', 'top', 'newest', 'oldest']

export default ({ sort, handleSetSort, onClose }: any) => {

    return (
        <BottomModal
            handleClose={onClose}
        >
            <ModalTitle>SORT PROJECTS BY</ModalTitle>
            <div>
                {options.map((name: string, i: number) => (
                    <Button
                        key={i}
                        name={name}
                        active={sort === name}
                        onClick={() => handleSetSort(name)}
                    >
                        { sort === name ? circleCheckIcon : circleIcon}
                        <span>{name}</span>
                    </Button>
                ))}
            </div>
        </BottomModal>
    )
}