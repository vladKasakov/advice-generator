import './index.scss';

import Advice from './components/Advice';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Advice />
  </StrictMode>
);
