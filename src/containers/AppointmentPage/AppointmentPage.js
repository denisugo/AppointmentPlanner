import React, { useState } from "react";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import TileList from "../../components/TileList/TileList";
import "./AppointmentPage.css";

function AppointmentPage({ addNew, appointmentList, contactList }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [contact, setContact] = useState("");

  const handleChangeTitle = ({ target }) => {
    setTitle(target.value);
  };
  const handleChangeTime = ({ target }) => {
    setTime(target.value);
  };
  const handleChangeDate = ({ target }) => {
    setDate(target.value);
  };
  const handleChangeContact = ({ target }) => {
    setContact(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNew({ title: title, date: date, time: time, contact: contact });
    setTitle("");
    setTime("");
    setDate("");
    setContact("");
  };

  return (
    <div className="Appontment-page">
      <TileList list={appointmentList} />
      <AppointmentForm
        values={{ title: title, date: date, time: time, contact: contact }}
        handleChangeTitle={handleChangeTitle}
        handleChangeTime={handleChangeTime}
        handleChangeDate={handleChangeDate}
        handleChangeContact={handleChangeContact}
        handleSubmit={handleSubmit}
        contactList={contactList}
      />
    </div>
  );
}

export default AppointmentPage;
