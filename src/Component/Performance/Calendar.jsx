import React, { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";
import styled from "styled-components";

// Setup moment for the localizer
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: 0,
      title: "Test Event",
      allDay: false,
      start: new Date(2024, 9, 21, 0, 0), // 00:00 on October 21, 2024
      end: new Date(2024, 9, 21, 1, 15), // 03:15 on the same day
    },
    {
      id: 1,
      title: "Test Event",
      allDay: false,
      start: new Date(2024, 9, 23, 4, 0), // 04:00 on October 23, 2024
      end: new Date(2024, 9, 23, 5, 15), // 06:15 on the same day
    },
    {
      id: 2,
      title: "Test Event",
      allDay: false,
      start: new Date(2024, 9, 22, 3, 0), // 04:00 on October 23, 2024
      end: new Date(2024, 9, 22, 4, 0), // 06:15 on the same day
    },
    // More events here...
  ]);

  // Handler for moving an event to a new slot
  const onEventResize = (data) => {
    const { start, end, event } = data;
    setEvents((prevEvents) =>
      prevEvents.map((evt) =>
        evt.id === event.id ? { ...evt, start, end } : evt
      )
    );
  };

  const onEventDrop = (data) => {
    const { start, end, event } = data;
    setEvents((prevEvents) =>
      prevEvents.map((evt) =>
        evt.id === event.id ? { ...evt, start, end } : evt
      )
    );
  };
  // List of random names
  const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"];

  // Custom header component to display day name and random name
  const CustomDateHeader = ({ label }) => {
    // Generate a random name for each day header
    const randomName = names[Math.floor(Math.random() * names.length)];

    return (
      <div className="custom-header">
        <div>{label}</div>
        <div style={{ fontSize: "12px", color: "gray" }}>{randomName}</div>
      </div>
    );
  };

  return (
    <div className="calendar-container">
      
      <DnDCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week" // Set to week view
        views={["day", "work_week", "week"]} // Include week view
        step={30} // time frame, should be set based on api
        timeslots={1} //30*1=30
        defaultDate={new Date(2024, 9, 21)} // Set to a date within the week
        style={{ height: "80vh" }}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        draggableAccessor={() => true} // Enables dragging
        dayPropGetter={(date) => {
          const day = moment(date).day();
          // Disable or hide days other than Monday, Tuesday, .....
          if (day !== 1 && day !== 2 && day !== 3) {
            return {
              style: { display: "none" },
            };
          }
          return {};
        }}
      />
    </div>
  );
};

export default MyCalendar;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  margin: 3px 0px;

  button {
    border: 1px solid gray;
    padding: 3px 6px;
    cursor: pointer;
    border-radius: 2px;
    font-size: 1rem;
    color: gray;
  }
`;
