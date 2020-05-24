import React from 'react';
import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  format,
  addDays,
  isSameMonth,
  isSameDay,
} from 'date-fns';

import { Container, Row } from './styles';

interface DayProps {
  currentDate: Date;
}

const Day: React.FC<DayProps> = ({ currentDate }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let daysOfWeek = [];
  let day = startDate;

  while (day <= endDate) {
    if (daysOfWeek.length > 0) daysOfWeek = [];

    for (let i = 0; i < 7; i++) {
      const selected = isSameDay(day, currentDate) ? 'selected' : '';
      const disabled = !isSameMonth(day, monthStart) ? 'disabled' : '';

      daysOfWeek.push(
        <div className={`${disabled} ${selected}`} key={day.getTime()}>
          <span>{format(day, 'd')}</span>
        </div>,
      );

      day = addDays(day, 1);
    }

    rows.push(<Row key={day.getTime()}>{daysOfWeek}</Row>);
  }

  return <Container>{rows}</Container>;
};

export default Day;
