import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px 0 -10px 0;
`

export const Error = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.globalColors.error};
  display: grid;
  grid-template-columns: 28px 1fr;
  column-gap: 10px;
  & svg {
    width: 100%;
    height: 100%;
  }
`

export const MaxAttempts = styled.div`
  h2 {
    font-size: ${props => props.theme.fontSize.normal};
    color: ${props => props.theme.globalColors.error};
    margin: 0;
  }
`