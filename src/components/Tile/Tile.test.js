import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Tile from "./Tile";

describe("Tile test with contact input", () => {
  it("Returns name, email and phone as <h2>", () => {
    // Set up
    const name = "Jack";
    const email = "jack@jerry.com";
    const tel = "778-334-6652";
    const item = { name: name, email: email, tel: tel };
    // Excercise
    render(<Tile item={item} />);
    const nameRender = screen.getByTestId("name-title");
    const emailRender = screen.getByTestId("email-date");
    const telRender = screen.getByTestId("tel-time");
    const contactRender = screen.queryByTestId("contact");
    // Examine
    expect(nameRender).toHaveTextContent(name);
    expect(emailRender).toHaveTextContent(email);
    expect(telRender).toHaveTextContent(tel);
    expect(contactRender).not.toBeInTheDocument();
  });

  it("Returns contact, date, time and title as <h2>", () => {
    // Set up
    const contact = "Jack";
    const title = "Appointment";
    const date = "11.07.2021";
    const time = "10:30";
    const item = { contact: contact, title: title, date: date, time: time };
    // Excercise
    render(<Tile item={item} />);
    const titleRender = screen.getByTestId("name-title");
    const datelRender = screen.getByTestId("email-date");
    const timeRender = screen.getByTestId("tel-time");
    const contactRender = screen.queryByTestId("contact");
    // Examine
    expect(titleRender).toHaveTextContent(title);
    expect(datelRender).toHaveTextContent(date);
    expect(timeRender).toHaveTextContent(time);
    expect(contactRender).toHaveTextContent(contact);
  });
});
