import React, { useContext } from 'react';
import { Modal } from 'semantic-ui-react';
import { Form } from '@unform/web';
import { setHours, setMinutes, getHours, getMinutes, format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

import Input from '../Input';

import { CalendarContext } from '../../context/CalendarContext';

import { Container } from './styles';

interface Reminder {
  id: string;
  title: string;
  time: Date;
  city: string;
  color: string;
  hours: number;
  minutes: number;
}
const Reminder: React.FC = () => {
  const {
    modalOpen,
    setModalOpen,
    selectedDate,
    setReminders,
    reminders,
    selectedReminder,
    setSelectedReminder,
  } = useContext(CalendarContext);

  function handleSubmit(data: Reminder) {
    let time = new Date(data.time);
    time = setHours(time, data.hours);
    time = setMinutes(time, data.minutes);

    const reminder = { ...data, time };

    if (data.id) {
      const index = reminders.findIndex((r: Reminder) => r.id === data.id);

      if (index > -1) {
        reminders[index] = { ...reminder };
        setReminders([...reminders]);
      }
    } else {
      reminder.id = uuidv4();
      setReminders([...reminders, reminder]);
    }

    setModalOpen(false);
  }

  function handleCloseModal() {
    setModalOpen(false);
    setSelectedReminder(null);
  }

  const initialData = selectedReminder || { time: selectedDate };

  return (
    <Modal open={modalOpen} onClose={handleCloseModal}>
      <Modal.Header>
        {selectedReminder ? 'Editing' : 'Adding New'} Reminder on{' '}
        {format(selectedDate, 'MMMM dd, yyyy')}
      </Modal.Header>
      <Modal.Content>
        <Container>
          <Form onSubmit={handleSubmit} initialData={initialData}>
            <div>
              <span>Title</span>
              <Input name="title" type="text" />
            </div>
            <div>
              <span>Hour</span>
              <div>
                <Input name="hours" type="text" />
                :
                <Input name="minutes" type="text" />
              </div>
            </div>

            <div>
              <span>City</span>
              <Input name="city" type="text" />
            </div>

            <Input name="time" type="hidden" />
            <Input name="id" type="hidden" />
            <button type="submit">{selectedReminder ? 'Edit' : 'Add'}</button>
          </Form>
        </Container>
      </Modal.Content>
    </Modal>
  );
};

export default Reminder;
