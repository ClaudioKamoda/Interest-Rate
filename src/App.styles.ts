import { createGlobalStyle } from 'styled-components'
import styled, {css} from 'styled-components'
import React from 'react'

interface FlexContainerProps {
  direction: String,
  color?: String
}

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`

const flexMixin = css`
  display: flex;
  justify-content: center;
  align-items: center; 
  gap: 5px;
`

export const Page = styled.main`
  background-color: #353535;
  height: 100vh;
  width: 100vw;
  ${flexMixin};
`

export const FlexContainer = styled.div<FlexContainerProps>`
  ${flexMixin};
  flex-direction: ${props => props.direction as React.Key};
  padding: 5px;
  background-color: ${props => props.color ? props.color as React.Key : 'none'};
  border-radius: 8px;
`

export const Container = styled.section`
  height: fit-content;
  width: 90vw;
  max-width: fit-content;
  background-color: #fff;
  padding: 10px;
  ${flexMixin};
  border-radius: 8px;
  box-shadow: 3px 3px 4px 1px rgba(0, 0, 0, 0.2);
`

export const Header = styled.header`
  h1, h4{
    text-align: center;
    padding:5px;
  }
  h1{
    line-height: 1.5rem;
    font-size: 1.6rem;
  }
  h4{
    line-height: 1rem;
    font-size: 1rem;
  }

`