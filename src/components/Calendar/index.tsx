import React from 'react';

import Topbar from '../Topbar';
import Header from '../Header';
import Day from '../Day';
import Reminder from '../Reminder';

const Calendar: React.FC = () => {
  return (
    <>
      <Reminder />
      <Topbar />
      <Header />
      <Day />
    </>
  );
};

export default Calendar;
