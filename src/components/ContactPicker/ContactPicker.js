import React from "react";
import "./ContactPicker.css";

function ContactPicker({ onChange, contactList, value }) {
  return (
    <div className="Contact-picker">
      <select
        name="contact"
        id="contact"
        value={value}
        onChange={onChange}
        required
        data-testid="picker"
      >
        <option key={0} value="">
          No contact
        </option>
        {contactList.map((contact, index) => (
          <option key={index + 1} value={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ContactPicker;
