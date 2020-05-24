import React, { useContext } from 'react';
import { FiArrowLeft, FiArrowRight, FiCalendar } from 'react-icons/fi';
import { subMonths, addMonths, format } from 'date-fns';

import { CalendarContext } from '../../context/CalendarContext';

import { Container } from './styles';

const Topbar: React.FC = () => {
  const { currentDate, setCurrentDate } = useContext(CalendarContext);

  const handleMonthForward = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleMonthBackward = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <Container>
      <div>
        <strong>{format(currentDate, 'MMMM yyyy')}</strong>
      </div>
      <div>
        <button type="button" onClick={handleToday}>
          <FiCalendar />
          Today
        </button>
        <button type="button" onClick={handleMonthBackward}>
          <FiArrowLeft />
        </button>
        <button type="button" onClick={handleMonthForward}>
          <FiArrowRight />
        </button>
      </div>
    </Container>
  );
};

export default Topbar;
