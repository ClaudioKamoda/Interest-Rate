import React from 'react';
import * as C from './App.styles'
import Dropdown from './components/Dropdown';
import TextArea from './components/TextArea';

function App() {
  return (
  <>
    <C.GlobalStyle/>
    <C.Page>
      <C.Container>
        <TextArea/>
        <Dropdown/>
      </C.Container>
    </C.Page>
  </>
  );
}

export default App;
