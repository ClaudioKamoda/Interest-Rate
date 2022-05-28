import React from 'react';
import TextArea from '../TextArea';
import {InterestContainer} from './styles'

interface InterestProps {
  readonly: boolean,
  value?: string
}

const Interest: React.FC<InterestProps> = (props:InterestProps) => {
  return (
    <InterestContainer>
      <TextArea readonly={props.readonly} value={props.value}/>
    </InterestContainer>
  )
}

export default Interest