import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
//import Listagem from "./Listagem";
import whyDidYouRender from '@welldone-software/why-did-you-render';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

if (process.env.NODE_ENV === 'development') {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

ReactDOM.render(<App />, document.getElementById('root'));

root.render(
  <StrictMode>
    <ColorModeScript />
    <App />
    
  </StrictMode>
);
