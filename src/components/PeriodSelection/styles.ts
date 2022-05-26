import styled from 'styled-components'

interface PeriodProps {
  active: Boolean,
  onClick(e: React.MouseEvent<HTMLElement>): void
}

export const Period = styled.p<PeriodProps>`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${props =>props.active? "#8a897c": '#fff'};
  border-radius: 8px;
  cursor: pointer;

  &:hover{
    background-color: #8a897c;
  }
`

export const PeriodHolder = styled.div`
  width: 180px;
  height: fit-content;
  background-color: #bdbbb0;
  padding: 5px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5px;
`