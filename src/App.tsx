import React from 'react';

import Calendar from './components/Calendar';
import { CalendarProvider } from './context/CalendarContext';

import 'semantic-ui-css/semantic.min.css';
import 'rc-time-picker/assets/index.css';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <CalendarProvider>
      <Calendar />
      <GlobalStyle />
    </CalendarProvider>
  </>
);

export default App;
