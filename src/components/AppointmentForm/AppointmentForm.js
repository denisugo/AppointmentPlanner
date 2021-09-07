import React from "react";
import ContactPicker from "../ContactPicker/ContactPicker";

import "./AppointmentForm.css";

function AppointmentForm({
  contactList,
  values,
  handleSubmit,
  handleChangeTitle,
  handleChangeDate,
  handleChangeTime,
  handleChangeContact,
}) {
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="Appointment-form">
        <input
          data-testid="title"
          type="text"
          name="title"
          placeholder="Title"
          value={values.title}
          onChange={handleChangeTitle}
          required
        />

        <input
          data-testid="date"
          type="date"
          name="date"
          //placeholder="Date"
          value={values.date}
          onChange={handleChangeDate}
          required
        />
        <input
          data-testid="time"
          type="time"
          name="time"
          //placeholder="Time"
          value={values.time}
          onChange={handleChangeTime}
          required
        />

        <ContactPicker
          onChange={handleChangeContact}
          contactList={contactList}
          value={values.contact}
        />
        <input type="submit" value="Add new" />
      </form>
    </div>
  );
}

export default AppointmentForm;
