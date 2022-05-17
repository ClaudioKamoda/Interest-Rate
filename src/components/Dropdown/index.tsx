import {DropdownContainer, DropdownButton, DropdownContent} from './styles'
import {ChevronDown, ChevronUp} from 'react-feather'
import { useState } from 'react'

const Dropdown = () => {
  const [active, setActive] = useState<Boolean>(false)
  const [selectedPeriod, setSelectedPeriod] = useState<String>('Year')

  const handleActivateDropdown = () => {
    setActive(!active)
  }

  const handlePeriodSelection = (e: React.MouseEvent<HTMLElement>) => {
    setSelectedPeriod(e.currentTarget.innerHTML)
    setActive(false)
  }
  
  return (
    <DropdownContainer>
      <DropdownButton onClick={handleActivateDropdown}>
        <p>{selectedPeriod}</p>
        {!active && <ChevronDown size={24}/>}
        {active && <ChevronUp size={24}/>}
      </DropdownButton>
      <DropdownContent isActive={active}>
        <p onClick={handlePeriodSelection}>Year</p>
        <p onClick={handlePeriodSelection}>Month</p>
        <p onClick={handlePeriodSelection}>Week</p>
      </DropdownContent>
    </DropdownContainer>
  )
}

export default Dropdown;