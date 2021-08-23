import { Switch, Route, NavLink } from "react-router-dom";

import "./App.css";
import AppointmentPage from "../appointmentPage/AppointmentPage";
import ContactPage from "../contactPage/ContactPage";

function App() {
  // Constants
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
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
            {/* Add props to ContactsPage */}
            <ContactPage />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
