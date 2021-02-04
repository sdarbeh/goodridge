import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageContainer = styled.div`
  background-color: ${props => props.theme.bravo};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  width: 80px;
  height: 80px;
  padding: 30px 15px 0 15px;
  margin-bottom: 20px;
`

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Message = styled.span`
  color: ${props => props.theme.medium};
  font-size: ${props => props.theme.fontSize.small};
  font-weight: 600;
`