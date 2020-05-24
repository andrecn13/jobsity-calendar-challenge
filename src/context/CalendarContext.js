import React, { createContext, useState } from 'react';

export const CalendarContext = createContext();

export const CalendarProvider = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);
  const [reminders, setReminders] = useState([]);
  const [selectedReminder, setSelectedReminder] = useState();

  const providerValue = {
    currentDate,
    setCurrentDate,
    selectedDate,
    setSelectedDate,
    modalOpen,
    setModalOpen,
    reminders,
    setReminders,
    selectedReminder,
    setSelectedReminder,
  };

  return (
    <CalendarContext.Provider value={providerValue}>
      {props.children}
    </CalendarContext.Provider>
  );
};
