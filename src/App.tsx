import React from 'react';
import * as C from './App.styles'
import PeriodSelection from './components/PeriodSelection';
import Interest from './components/Interest';
import {ArrowRight, ArrowLeft} from 'react-feather'

function App() {
  let typedValue:string = '12'
  
  const convertInterest = (interest:number, time:string , toTime:string) => {
    type ObjectKey = keyof typeof periods;
    const periods = {
      Day: 365,
      Week: 52,
      Month: 12,
      Year: 1
    }
    const periodGiven = time as ObjectKey
    const periodToConvert = toTime as ObjectKey
    
    const expoent = (periods[periodGiven] / periods[periodToConvert]) * Math.log(1 + interest/100)
    
    const convertedInterest = Math.E ** (expoent)
    const formatedInterest = ((convertedInterest - 1) * 100).toFixed(4)

    return formatedInterest
  }

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
              <PeriodSelection/>
            </C.FlexContainer>
            <C.FlexContainer direction="column">
              <ArrowRight/>
              <ArrowLeft/>
            </C.FlexContainer>
            <C.FlexContainer direction="column" color="#d2d7df">
              <Interest readonly={true} value={typedValue}/>
              <PeriodSelection/>
            </C.FlexContainer>
          </C.FlexContainer>
        </C.FlexContainer>
      </C.Container>
    </C.Page>
  </>
  );
}

export default App;
