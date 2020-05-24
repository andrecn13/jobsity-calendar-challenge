import React, { useContext, useState, useRef } from 'react';
import * as Yup from 'yup';
import { Modal } from 'semantic-ui-react';
import { Form } from '@unform/web';
import { setHours, setMinutes, format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { GithubPicker } from 'react-color';

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

  const [color, setColor] = useState('#1f1deb');
  const formRef = useRef<any>(null);

  function handleChangeColor(newColor: any) {
    setColor(newColor.hex);
  }

  async function handleSubmit(data: Reminder) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().max(30, 'Max 30 characters').required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      let time = new Date(data.time);
      time = setHours(time, data.hours);
      time = setMinutes(time, data.minutes);

      const reminder = { ...data, time, color };

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
    } catch (err) {
      const validationErrors: any = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
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
          <Form ref={formRef} onSubmit={handleSubmit} initialData={initialData}>
            <div>
              <span>Title</span>
              <Input name="title" type="text" />
            </div>
            <div>
              <span>Hour</span>
              <div>
                <Input name="hours" type="text" maxlength="2" />
                :
                <Input name="minutes" type="text" />
              </div>
            </div>
            <div>
              <span>Color</span>
              <GithubPicker
                color={color}
                onChangeComplete={handleChangeColor}
              />
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
