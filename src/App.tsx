import React from 'react';
import * as C from './App.styles'
import Interest from './components/Interest';

function App() {
  let typedValue:string = '12'

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
