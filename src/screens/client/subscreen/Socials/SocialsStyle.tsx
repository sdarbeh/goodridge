import styled from 'styled-components';
import { Social } from '../../../../components/social'
import { CenterDiv } from '../../../../components/widgets'

export const Content = styled.div`
    width: 100%;
    height: calc(100% - 20px);
    margin-top: 20px;
`

export const Handle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 35px;
    div {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
    }
    h1 {
        font-size: ${props => props.theme.fontSize.xlarge};
        margin: 18px 0 8px 0;
    }
    span {
        font-size: ${props => props.theme.fontSize.small};
        color: ${props => props.theme.currentThemeColor};
        opacity: .7;
    }
`

export const CenteredFixed = styled(CenterDiv)`
    height: 30px;
`

export const SocialItem = styled(Social)`
    max-width: 350px;
    margin: 5px auto 15px auto;
`
