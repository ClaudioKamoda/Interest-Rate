import Dropdown from '../Dropdown';
import TextArea from '../TextArea';
import {InterestContainer} from './styles'

interface InterestProps {
  readonly: boolean,
  value?: string
}

const Interest = (props:InterestProps) => {
  return (
    <InterestContainer>
      <TextArea readonly={props.readonly} value={props.value}/>
      <Dropdown/>
    </InterestContainer>
  )
}

export default Interest