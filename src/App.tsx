import { useEffect } from 'react';
import * as C from './App.styles'
import PeriodSelection from './components/PeriodSelection';
import Interest from './components/Interest';
import {ArrowRight, ArrowLeft} from 'react-feather'
import {useSelector} from 'react-redux'
import { RootState } from './store/store';

function App() {
  let typedValue:string = '12'
  const basePeriod = useSelector((state:RootState) => state.interest.basePeriod)
  const goalPeriod = useSelector((state:RootState) => state.interest.toConvertPeriod)
  
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

  useEffect(() => {
    console.log(basePeriod, goalPeriod)
  },[basePeriod, goalPeriod])

  return (
  <>
    <C.GlobalStyle/>
    <C.Page>
      <C.Container>
        <C.FlexContainer direction="column">
          <h1>Interest Rate Converter</h1>
          <C.FlexContainer direction="row">
            <C.FlexContainer direction="column" color="#d2d7df">
              <Interest readonly={false}/>
              <PeriodSelection mode={"base"}/>
            </C.FlexContainer>
            <C.FlexContainer direction="column">
              <ArrowRight/>
              <ArrowLeft/>
            </C.FlexContainer>
            <C.FlexContainer direction="column" color="#d2d7df">
              <Interest readonly={true} value={typedValue}/>
              <PeriodSelection mode={"goal"}/>
            </C.FlexContainer>
          </C.FlexContainer>
        </C.FlexContainer>
      </C.Container>
    </C.Page>
  </>
  );
}

export default App;
