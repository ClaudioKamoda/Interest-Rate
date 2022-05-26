import styled from 'styled-components'

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
  display: flex; 
  justify-content: center;
  align-items: center;
  background-color: #bdbbb0;
  height: 44px;
  width: 40px;
  padding: 5px;
  font-size: 1em;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`

export const Text = styled.p`
  font-size: 1em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 44px;
  width: 100px;
  padding: 5px;
  text-align: right;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`