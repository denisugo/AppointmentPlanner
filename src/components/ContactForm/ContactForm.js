import React from "react";

import "./ContactForm.css";

function ContactForm({
  handleChangeName,
  handleChangeEmail,
  handleChangeTel,
  handleSubmit,
  values,
}) {
  return (
    <div className="Contact-form">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChangeName}
          required
        />

        <input
          type="tel"
          name="tel"
          placeholder="Telephone"
          value={values.tel}
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          onChange={handleChangeTel}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChangeEmail}
          required
        />
        <input type="submit" value="Add new" />
      </form>
    </div>
  );
}

export default ContactForm;
