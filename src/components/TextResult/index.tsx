import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import {Text} from './styles'

const TextResult: React.FC = () => {
  const typedInterest:number = useSelector((state:RootState) => state.interest.typedInterest)
  const basePeriod:string = useSelector((state:RootState) => state.interest.basePeriod)
  const goalPeriod:string = useSelector((state:RootState) => state.interest.toConvertPeriod)

  const [resultInterest, setResultInterest] = useState<string>('')
  
  const convertInterest = (interest:number, time:string , toTime:string) => {
    type ObjectKey = keyof typeof periods;
    let formatedInterest = '0'
    const periods = {
      Daily: 365,
      Weekly: 52,
      Monthly: 12,
      Yearly: 1
    }
    const periodGiven = time as ObjectKey
    const periodToConvert = toTime as ObjectKey
    
    const expoent = (periods[periodGiven] / periods[periodToConvert]) * Math.log(1 + interest/100)
    
    const convertedInterest = Math.E ** (expoent)
    const resultInterest = ((convertedInterest - 1) * 100)

    if(resultInterest <= 100000){
      formatedInterest = resultInterest.toFixed(4)
    }else if(resultInterest <= 1000000){
      formatedInterest = resultInterest.toFixed(3)
    }else if(resultInterest <= 10000000){
      formatedInterest = resultInterest.toFixed(2)
    }else{
      formatedInterest = resultInterest.toExponential(3).toString()
    }

    return formatedInterest
  }
  
  useEffect(()=>{
    setResultInterest(convertInterest(typedInterest, basePeriod, goalPeriod))
  }, [basePeriod, goalPeriod, typedInterest, resultInterest])

  return (
    <Text>{resultInterest}</Text>
  )
}

export default TextResult