import React, { useContext } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  format,
  addDays,
  isSameMonth,
  isSameDay,
  isToday,
} from 'date-fns';

import { CalendarContext } from '../../context/CalendarContext';

import { Container, Row, Event, Label, Action } from './styles';

interface Reminder {
  id: string;
  title: string;
  time: Date;
}
const Day: React.FC = () => {
  const {
    currentDate,
    setSelectedDate,
    setModalOpen,
    reminders,
    setSelectedReminder,
  } = useContext(CalendarContext);

  function handleSelectedDay(day: Date) {
    setSelectedDate(day);
    setModalOpen(true);
  }

  function handleEditReminder(reminder: Reminder) {
    setSelectedReminder(reminder);
    setModalOpen(true);
  }

  function filterRemindersOfDay(day: Date): Reminder[] {
    const remindersFiltered = reminders.filter((reminder: Reminder) =>
      isSameDay(day, reminder.time),
    );

    return remindersFiltered.sort((a: Reminder, b: Reminder) => {
      return a.time.getTime() - b.time.getTime();
    });
  }

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
      const clone = day;
      const selected = isToday(day) ? 'selected' : '';
      const disabled = !isSameMonth(day, monthStart) ? 'disabled' : '';

      daysOfWeek.push(
        <div
          className={`${disabled}`}
          key={day.getTime()}
          role="button"
          tabIndex={i}
        >
          <Label className={`${selected}`}>{format(day, 'd')}</Label>

          <Action
            className="add-reminder"
            onClick={() => handleSelectedDay(clone)}
          >
            <FiPlusCircle />
          </Action>

          {filterRemindersOfDay(day).map((reminder, index) => (
            <Event
              key={reminder.time.getTime() + index}
              onClick={() => handleEditReminder(reminder)}
            >
              {reminder.title}-{reminder.time.getTime()}
            </Event>
          ))}
        </div>,
      );

      day = addDays(day, 1);
    }

    rows.push(<Row key={day.getTime()}>{daysOfWeek}</Row>);
  }

  return <Container>{rows}</Container>;
};

export default Day;
