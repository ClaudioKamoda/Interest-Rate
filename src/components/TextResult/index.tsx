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
    const formatedInterest = ((convertedInterest - 1) * 100).toFixed(4)

    return formatedInterest
  }
  
  useEffect(()=>{
    setResultInterest(convertInterest(typedInterest, basePeriod, goalPeriod))
    console.log(basePeriod, goalPeriod, typedInterest, resultInterest)
  }, [basePeriod, goalPeriod, typedInterest, resultInterest])

  return (
    <Text>{resultInterest}</Text>
  )
}

export default TextResult