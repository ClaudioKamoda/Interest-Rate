import React from 'react'
import {InputContainer, Percentage, Text} from './styles'

interface InputProps {
  readonly: boolean,
  value?: string
}

const TextArea: React.FC<InputProps> = (props:InputProps) => {
  return (
    <>
    {!props.readonly && <InputContainer>
      <input type="text" placeholder='type here...'/>
    </InputContainer>}
    {props.readonly && <Text>{props.value}</Text>}
    <Percentage>%</Percentage>
    </>
  )
}

export default TextArea