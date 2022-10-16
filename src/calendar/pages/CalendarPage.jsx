import { useState } from 'react';
import { Calendar } from 'react-big-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import { NavBar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '../';
import { localizer, getMessagesES } from '../../helper';
import { useUiStore, useCalendarStore } from '../../hooks';





export const CalendarPage = () => {

  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();

  const [lastView, setlastView] = useState(localStorage.getItem('lastView'  || 'week'));

  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log({event, start, end, isSelected});
    
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }

    return {
      style
    }
  };
  
  const onDobleClick = (event) => {
    // console.log({dobleClick: event})
    openDateModal();
  };

  const onSelect = (event) => {
    // console.log({click: event});
    setActiveEvent(event);
  };

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setlastView(event);
    console.log({viewChanged: event});
  };

  return (
    <div className="calendar-container">
      <NavBar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDobleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
        
      />
      <CalendarModal/>
      <FabAddNew/>
      <FabDelete/>
    </div>
  );
};
