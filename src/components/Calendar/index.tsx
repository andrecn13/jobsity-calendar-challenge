import React, { useState } from 'react';
import { subMonths, addMonths } from 'date-fns';

import Topbar from '../Topbar';
import Header from '../Header';
import Day from '../Day';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleMonthForward = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleMonthBackward = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  return (
    <>
      <Topbar
        currentDate={currentDate}
        nextMonth={handleMonthForward}
        prevMonth={handleMonthBackward}
      />
      <Header />
      <Day currentDate={currentDate} />
    </>
  );
};

export default Calendar;
