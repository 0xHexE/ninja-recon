import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root')
);
