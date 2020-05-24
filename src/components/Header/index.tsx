import React, { useContext } from 'react';
import { addDays, startOfWeek, format } from 'date-fns';

import { CalendarContext } from '../../context/CalendarContext';

import { Container } from './styles';

const Header: React.FC = () => {
  const { currentDate } = useContext(CalendarContext);

  const days = [];
  const startDate = startOfWeek(currentDate);

  for (let i = 0; i < 7; i += 1) {
    days.push(<div key={i}>{format(addDays(startDate, i), 'iiii')}</div>);
  }

  return <Container>{days}</Container>;
};

export default Header;
