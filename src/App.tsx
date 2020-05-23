import React from 'react';

import Topbar from './components/Topbar';
import Header from './components/Header';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Topbar />
    <Header />
    <GlobalStyle />
  </>
);

export default App;
