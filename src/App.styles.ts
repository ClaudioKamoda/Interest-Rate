import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
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
  height: fit-content;
  width: 300px;
  background-color: #fff;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  box-shadow: 3px 3px 4px 1px rgba(0, 0, 0, 0.2);

  h1{
    text-align: center;
    line-height: 1.5rem;
  }
`