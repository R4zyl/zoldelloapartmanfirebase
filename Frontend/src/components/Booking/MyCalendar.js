import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../../styles/MyCalendar.css';
import { EventAdder } from './EventAdder';
import { useSelector, useDispatch } from 'react-redux';
import { database } from '../../firebase';
import { loadEventsAction } from '../../actions';
import { CalendarExplainText } from './CalendarExplainText';
import { Translator } from '../Translator/Translator';

export const MyCalendar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userData);
  const { events } = useSelector((state) => state.events);
  
  const deleteEvent = async (eventdate) => {
    const deleteId = await getDocumentId(eventdate);
    if (deleteId) {
      database.collection("events").doc(deleteId).delete().then(() => {
      alert("Foglalás sikeresen törölve");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
    }
    return ''
  };

  const getDocumentId = (eventdate) => {
    for (let i =0; i<events.length;i++) {
      if(events[i].start===eventdate) return events[i].eventId
    } return undefined
  };

  const handleDateClick = (arg) => {
    user ? deleteEvent(arg.dateStr) : <div></div>;
  };

  useEffect(() => {
    const cleanup = database.collection('events')
      .onSnapshot(snapshot => {
        const listOfEvents = snapshot.docs.map(doc => ({...doc.data(),eventId: doc.id}));
        dispatch(loadEventsAction(listOfEvents))
      });
      
    return () => cleanup();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="calendarOuterContainer">
       <div className="calendarExplainText">
        {Translator(
          'A naptáron láthatják a szabad időpontjainkat, foglalási szándék esetében keressenek minket az elérhetőség menüpont alatt emailen vagy telefonon!',
          'The calendar shows the dates available for booking, if you want to book your stay reach out to us per email or phone.'
        )}
      </div>
      <div className="calendarContainer">
        {user ? <EventAdder component={EventAdder} /> : <div></div>}
        <FullCalendar
          height="80vh"
          editable={true}
          selectable={true}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          events={events}
          eventBorderColor="none"
          eventBackgroundColor="red"
          eventDisplay="background"
        />
        <CalendarExplainText/>
      </div>
    </div>
  );
};
