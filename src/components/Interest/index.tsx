import React from 'react';
import TextResult from '../TextResult';
import {InputContainer, InterestContainer, Percentage} from './styles'
import {useDispatch} from 'react-redux'
import {interestActions} from '../../store/store'

interface InterestProps {
  readonly: boolean,
}

const Interest: React.FC<InterestProps> = (props:InterestProps) => {
  const dispatcher = useDispatch()

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value
    //commits to the store only if the input value is a valid number
    if(Number(value)){
      dispatcher(interestActions.changeInterest(Number(value)))
    }else{
      dispatcher(interestActions.changeInterest(0))
    }
  }
  
  
  return (
    <InterestContainer>
      {!props.readonly && <InputContainer>
      <input type="text" placeholder='type here...' onChange={handleChange}/>
      </InputContainer>}
      {props.readonly && <TextResult/>}
      <Percentage>%</Percentage>
    </InterestContainer>
  )
}

export default Interest