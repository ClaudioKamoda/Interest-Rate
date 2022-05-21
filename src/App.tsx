import React from 'react';
import * as C from './App.styles'
import Interest from './components/Interest';


function App() {
  let typedValue:string = '12'
  
  const convertInterest = (interest:number, time:string , toTime:string) => {
    type ObjectKey = keyof typeof periods;
    const periods = {
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
        <h1>Interest Rate<br/>Converter</h1>
        <Interest readonly={false}/>
        <Interest readonly={true} value={typedValue}/>
      </C.Container>
    </C.Page>
  </>
  );
}

export default App;
