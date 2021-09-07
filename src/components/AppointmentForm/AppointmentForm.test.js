import React from "react";
import { render, fireEvent, screen, getByTestId } from "@testing-library/react";
// import selectEvent from "react-select-event";
import AppointmentForm from "./AppointmentForm";

describe("AppointmentForm test", () => {
  // Set up
  const noContact = "No contact";

  const nameJack = "Jack";
  const nameJerry = "Jerry";
  const contactList = [{ name: nameJack }, { name: nameJerry }];

  const date = "";
  const time = "";
  const title = "";
  const contact = "";
  const values = { title: title, contact: contact, date: date, time: time };
  const handleSubmit = jest.fn((e) => e.target.value);
  const handleChangeTitle = jest.fn((e) => e.target.value);
  const handleChangeDate = jest.fn((e) => e.target.value);
  const handleChangeTime = jest.fn((e) => e.target.value);
  const handleChangeContact = jest.fn((e) => e.target.value);

  let titleField;
  let dateField;
  let timeField;
  let contactField;

  beforeEach(() => {
    render(
      <AppointmentForm
        values={values}
        contactList={contactList}
        handleSubmit={handleSubmit}
        handleChangeContact={handleChangeContact}
        handleChangeDate={handleChangeDate}
        handleChangeTime={handleChangeTime}
        handleChangeTitle={handleChangeTitle}
      />
    );

    titleField = screen.getByTestId("title");
    dateField = screen.getByTestId("date");
    timeField = screen.getByTestId("time");
    contactField = screen.getByTestId("picker");
  });

  it("Renders initial state with empty fields", () => {
    // Examine
    expect(titleField).toHaveValue("");
    expect(dateField).toHaveValue("");
    expect(timeField).toHaveValue("");
    expect(contactField).toHaveValue("");
  });
});
