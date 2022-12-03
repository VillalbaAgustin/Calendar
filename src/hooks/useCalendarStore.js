import { useDispatch, useSelector } from 'react-redux';
import calendarApi from '../api/calendarApi';
import { convertEventsToDateEvents } from '../helper';
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from '../store';

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);
  // console.log({events});

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  
  const startSavingEvent = async (calendarEvent) => {
    //TODO: Update event

    //Todo bien
    if (calendarEvent._id) {
      //Actualizando
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      //Creando
      const { data } = await calendarApi.post('/events', calendarEvent );
      dispatch(onAddNewEvent({ ...calendarEvent, _id: data.evento._id, user }));
    }
  };

  const startdeletingEvent = () => {
    //Todo: Llegar al backend
    dispatch(onDeleteEvent());
  };


  const startLoadingEvents = async() => {
    try {
      const { data } = await calendarApi.get('/events');
      console.log({data});
      const events = convertEventsToDateEvents( data.eventos );
    } catch (error) {
      console.log('Error cargando eventos');
      console.log(error);
    }
  }

  return {
    //*Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,
    //*Métodos
    setActiveEvent,
    startSavingEvent,
    startdeletingEvent,
    startLoadingEvents,
  };
};
