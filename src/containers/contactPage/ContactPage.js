import React, { useState } from "react";

import ContactForm from "../../components/ContactForm/ContactForm";
import TileList from "../../components/TileList/TileList";
import "./ContactPage.css";

function ContactPage({ contactList, addNew }) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeTel = (event) => {
    setTel(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addNew({ name: name, email: email, tel: tel });
    setName("");
    setTel("");
    setEmail("");
  };

  return (
    <div className="Contact-page">
      <TileList list={contactList} />
      <ContactForm
        values={{ name: name, email: email, tel: tel }}
        handleChangeName={handleChangeName}
        handleChangeEmail={handleChangeEmail}
        handleChangeTel={handleChangeTel}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default ContactPage;
