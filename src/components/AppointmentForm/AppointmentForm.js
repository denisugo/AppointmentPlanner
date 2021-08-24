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
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={values.title}
          onChange={handleChangeTitle}
          required
        />

        <input
          type="date"
          name="date"
          //placeholder="Date"
          value={values.date}
          onChange={handleChangeDate}
          required
        />
        <input
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
        />
        <input type="submit" value="Add new" />
      </form>
    </div>
  );
}

export default AppointmentForm;
