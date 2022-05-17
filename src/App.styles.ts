import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

export const Page = styled.main`
  background-color: #ddd;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.section`
  height: 200px;
  width: 300px;
  background-color: #fff;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`