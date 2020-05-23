import React from 'react';

import Topbar from './components/Topbar';
import Header from './components/Header';
import Day from './components/Day';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Topbar />
    <Header />
    <Day />
    <GlobalStyle />
  </>
);

export default App;
