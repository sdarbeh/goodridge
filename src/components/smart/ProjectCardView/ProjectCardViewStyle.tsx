import styled from 'styled-components'
import { device } from '../../../utils/constants/mediaQueries'
import { Card } from '../../project'

export const Container = styled.div`
    display: grid;
    row-gap: 25px;
    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 20px;
        row-gap: 20px;
    }
    @media ${device.laptop} {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const ScrollCard = styled(Card)`
    margin-bottom: 20px;
`