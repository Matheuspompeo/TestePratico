import React from 'react';
import {ChakraProvider,theme,} from '@chakra-ui/react';
//import { ColorModeSwitcher } from './ColorModeSwitcher';

//import Login from './componentes/Login';
import Listagem from './Listagem';

function App() {
  return (
    <ChakraProvider theme={theme}>
    
      <Listagem/>
      
    </ChakraProvider>
  );
}

export default App;