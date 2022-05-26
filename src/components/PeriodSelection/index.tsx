import React, { useState } from 'react'
import {Period, PeriodHolder} from './styles'

const PeriodSelection: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<String>('Yearly')
  const periods: String[] = ['Yearly', 'Monthly', 'Weekly', 'Daily']

  const handlePeriodSelection = (e: React.MouseEvent<HTMLElement>) => {
    setSelectedPeriod(e.currentTarget.innerHTML)
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