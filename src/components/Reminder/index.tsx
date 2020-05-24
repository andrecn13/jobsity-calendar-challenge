import React, { useContext, useState, useRef, useEffect } from 'react';
import * as Yup from 'yup';
import { Modal } from 'semantic-ui-react';
import { Form } from '@unform/web';
import { setHours, setMinutes, format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { GithubPicker } from 'react-color';

import Input from '../Input';
import api from '../../services/weather';

import { CalendarContext } from '../../context/CalendarContext';

import { Container, Forecast } from './styles';

interface Forecast {
  id: number;
  main: string;
  description: string;
}
interface Reminder {
  id: string;
  title: string;
  time: Date;
  city: string;
  color: string;
  hours: number;
  minutes: number;
  weather: Forecast[];
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

  const formRef = useRef<any>(null);

  const [color, setColor] = useState('#1f1deb');
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<Forecast[]>([]);

  useEffect(() => {
    if (city.length > 2) {
      api
        .getForecastForCityAndDate(city, selectedDate.getTime() / 1000)
        .then(({ data }) => {
          setWeather(data.weather);
        });
    }
  }, [city]);

  function handleChangeColor(newColor: any) {
    setColor(newColor.hex);
  }

  function saveOrUpdateReminder(data: Reminder) {
    let time = new Date(data.time);
    time = setHours(time, data.hours);
    time = setMinutes(time, data.minutes);

    const reminder = { ...data, time, color, weather };

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

    setWeather([]);
    setModalOpen(false);
  }

  async function handleSubmit(data: Reminder) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().max(30, 'Max 30 characters').required(),
        city: Yup.string().required(),
        hours: Yup.string().max(2).required(),
        minutes: Yup.string().max(2).required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      // Save or Update a reminder
      saveOrUpdateReminder(data);
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

  function handleChangeCity(e: React.ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);
  }

  function handleCloseModal() {
    setWeather([]);
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
                <Input name="hours" type="text" maxLength="2" />
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
              <Input name="city" type="text" onChange={handleChangeCity} />

              {weather.map(({ id, main }) => (
                <Forecast key={id}>
                  The weather forecast for the day is <strong>{main}</strong>
                </Forecast>
              ))}
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
