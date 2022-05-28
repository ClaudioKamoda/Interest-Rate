import React, { useState } from 'react'
import {Period, PeriodHolder} from './styles'
import {useDispatch} from 'react-redux'
import {interestActions} from '../../store/store'

interface PeriodSelectionProps {
  mode: string
}

const PeriodSelection: React.FC<PeriodSelectionProps> = (props:PeriodSelectionProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('Yearly')
  const periods: String[] = ['Yearly', 'Monthly', 'Weekly', 'Daily']
  const periodDispatcher = useDispatch()

  const handlePeriodSelection = (e: React.MouseEvent<HTMLElement>) => {
    setSelectedPeriod(e.currentTarget.innerHTML)
    periodDispatcher(interestActions.changePeriod({mode: props.mode, value: e.currentTarget.innerHTML}))
  }

  const isActive = (current:String, received:String) =>{
    return current === received
  }
  
  return (
    <PeriodHolder>
      {periods.map((period:String,index:React.Key) => {
        return <Period key={index} active={isActive(selectedPeriod, period)} onClick={handlePeriodSelection}>{period}
        </Period>
      })}
    </PeriodHolder>
  )
}

export default PeriodSelection;