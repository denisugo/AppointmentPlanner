import { Switch, Route, NavLink } from "react-router-dom";

import "./App.css";
import AppointmentPage from "../appointmentPage/AppointmentPage";
import ContactPage from "../contactPage/ContactPage";
import { useState } from "react";

function App() {
  // Constants
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const [contactList, setContactList] = useState([]);
  const [appointmentList, setAppointmentList] = useState([]);

  const handleAddNewContact = (data) => {
    setContactList((prev) => [...prev, data]);
  };
  const handleAddNewAppointment = (data) => {
    setAppointmentList((prev) => [...prev, data]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink
            className="App-link"
            to={ROUTES.CONTACTS}
            activeClassName="active"
          >
            Contacts
          </NavLink>

          <NavLink
            className="App-link"
            to={ROUTES.APPOINTMENTS}
            activeClassName="active"
          >
            Appointments
          </NavLink>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path={ROUTES.CONTACTS}>
            <ContactPage
              addNew={handleAddNewContact}
              contactList={contactList}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentPage
              contactList={contactList}
              appointmentList={appointmentList}
              addNew={handleAddNewAppointment}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
