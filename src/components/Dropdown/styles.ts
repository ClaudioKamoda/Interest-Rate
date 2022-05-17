import styled from 'styled-components'

interface DropdownContentProps {
  readonly isActive: Boolean;
}

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const DropdownButton = styled.button`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: none;
  background-color: #eee;
  width: 80px;
`

export const DropdownContent = styled.div<DropdownContentProps>`
  display: ${props => props.isActive? 'block' : 'none'};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  cursor: pointer;

  p{
    color: black;
    padding: 12px 16px;
    display: block;
    cursor: pointer;

    &:hover{
      background-color: #ddd;
    }
  }
`