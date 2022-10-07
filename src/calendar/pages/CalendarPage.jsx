import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {addHours, format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import { NavBar } from '../components/NavBar';


const locales = {
  'en-US': enUS,
};

const events = [{
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: '#fafafa',
  user: {
    id: '123',
    name: 'Agustín'
  }
}]

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export const CalendarPage = () => {
  return (
    <div className="calendar-container">
      <NavBar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '90vh'}}
      />
    </div>
  );
};
