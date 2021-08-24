import React from "react";

function ContactPicker({ onChange, contactList }) {
  return (
    <div>
      <select name="contact" id="contact" onChange={onChange} required>
        <option key={0} value="No contact" selected="selected">
          No contact
        </option>
        {contactList.map((contact, index) => (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ContactPicker;
