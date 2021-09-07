import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
// import selectEvent from "react-select-event";
import ContactPicker from "./ContactPicker";

describe("ContactPicker test", () => {
  // Set up
  const noContact = "No contact";

  const nameJack = "Jack";
  const nameJerry = "Jerry";
  const contactList = [{ name: nameJack }, { name: nameJerry }];

  const onChange = jest.fn((x) => x.target.value);
  const value = "";

  let picker;

  beforeEach(() => {
    render(
      <ContactPicker
        contactList={contactList}
        onChange={onChange}
        value={value}
      />
    );
    picker = screen.getByTestId("picker");
  });

  it("Renders initial state with empty field", () => {
    // Examine
    expect(picker).toHaveTextContent(noContact);
  });
  it("Renders initial state, doesn't call onChange", () => {
    // Examine
    expect(onChange).toHaveBeenCalledTimes(0);
  });
  //   it("Picks up the name 'Jerry'", async () => {
  //     // Exercise
  //     await selectEvent.select(picker, nameJack);
  //     //fireEvent.change(picker, { target: { value: nameJerry } });
  //     // Examine
  //     expect(picker).(nameJerry);
  //   });
  it("Picks up the name 'Jerry', calls onChange", async () => {
    // Exercise
    fireEvent.change(picker, { target: { value: nameJerry } });
    // Examine
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
