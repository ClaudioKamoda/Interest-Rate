import styled, {css} from 'styled-components'

const flexMixin = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InterestContainer = styled.section`
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 8px;
  ${flexMixin};
`

export const InputContainer = styled.div`
  input{
    font-size: 1em;
    height: 44px;
    width: 100px;
    padding: 5px;
    text-align: right;
    border: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    margin-right: 1px;
  }
`

export const Percentage = styled.p`
  ${flexMixin};
  background-color: #bdbbb0;
  height: 44px;
  width: 40px;
  padding: 5px;
  font-size: 1em;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`
