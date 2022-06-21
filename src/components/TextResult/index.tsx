import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import {Text} from './styles'

const TextResult: React.FC = () => {
  //getters to all data is store
  const typedInterest:number = useSelector((state:RootState) => state.interest.typedInterest)
  const basePeriod:string = useSelector((state:RootState) => state.interest.basePeriod)
  const goalPeriod:string = useSelector((state:RootState) => state.interest.toConvertPeriod)

  const [resultInterest, setResultInterest] = useState<string>('')
  
  const convertInterest = (interest:number, time:string , toTime:string) => {
    type ObjectKey = keyof typeof periods;
    let formatedInterest = '0'
    const periods = {
      Daily: {
        Daily: 1,
        Weekly: 7,
        Monthly: 30,
        Yearly: 365
      },
      Weekly: {
        Daily: 1/7,
        Weekly: 1,
        Monthly: 4,
        Yearly: 52
      },
      Monthly: {
        Daily: 1/30,
        Weekly: 1/4,
        Monthly: 1,
        Yearly: 12
      },
      Yearly: {
        Daily: 1/365,
        Weekly: 1/52,
        Monthly: 1/12,
        Yearly: 1
      }
    }
    const periodGiven = time as ObjectKey
    const periodToConvert = toTime as ObjectKey
    
    const expoent = periods[periodGiven][periodToConvert]
    console.log(expoent)
    
    const convertedInterest = (1 + interest/100) ** (expoent)
    const resultInterest = (convertedInterest - 1) * 100

    //formating handler
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