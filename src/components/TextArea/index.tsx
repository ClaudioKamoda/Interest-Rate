import {InputContainer, Percentage, Text} from './styles'

interface InputProps {
  readonly: boolean,
  value?: string
}

const TextArea = (props:InputProps) => {
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