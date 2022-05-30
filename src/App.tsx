import React from 'react';
import * as C from './App.styles'
import PeriodSelection from './components/PeriodSelection';
import Interest from './components/Interest';
import {ArrowRight, ArrowLeft} from 'react-feather'

const App: React.FC = () => {
  return (
  <>
    <C.GlobalStyle/>
    <C.Page>
      <C.Container>
        <C.FlexContainer direction="column">
          <C.Header>
            <h1>Interest Rate Converter</h1>
            <h4>(Use . as decimal separator eg: 1.02)</h4>
          </C.Header>
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
              <Interest readonly={true}/>
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
