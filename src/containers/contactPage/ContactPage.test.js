import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import ContactPage from "./ContactPage";

describe("ContactPage", () => {
  const addNew = jest.fn((x) => x);
  beforeEach(() => {
    render(<ContactPage contactList={[]} addNew={addNew} />);
  });
  it("initial state", () => {
    // it renders empty form fields
    const nameField = screen.getByPlaceholderText("Name");
    expect(nameField).toHaveValue("");
    const emailField = screen.getByPlaceholderText("Email");
    expect(emailField).toHaveValue("");
    const telField = screen.getByPlaceholderText("Telephone");
    expect(telField).toHaveValue("");

    // it renders enabled submit button
    const button = screen.getByTestId("submit");
    expect(button).not.toBeDisabled();
    expect(button).toHaveValue("Add new");

    fireEvent.click(button);
    expect(addNew).toBeCalledTimes(0);
  });

  it("Set form", () => {
    // it renders empty form fields
    const nameField = screen.getByPlaceholderText("Name");
    const emailField = screen.getByPlaceholderText("Email");
    const telField = screen.getByPlaceholderText("Telephone");
    const button = screen.getByTestId("submit");

    // fill out and submit form
    const name = "Jack";
    const email = "jack@jerry.com";
    const tel = "778-334-6652";
    fireEvent.change(nameField, { target: { value: name } });
    expect(nameField).toHaveValue(name);
    fireEvent.change(emailField, { target: { value: email } });
    expect(emailField).toHaveValue(email);
    fireEvent.change(telField, { target: { value: tel } });
    expect(telField).toHaveValue(tel);
    fireEvent.click(button);
    expect(addNew).toBeCalledTimes(1);
    expect(addNew.mock.calls[0][0]).toEqual({
      email: email,
      name: name,
      tel: tel,
    });
  });

  it("Set form (incorrect phone)", () => {
    // it renders empty form fields
    const nameField = screen.getByPlaceholderText("Name");
    const emailField = screen.getByPlaceholderText("Email");
    const telField = screen.getByPlaceholderText("Telephone");
    const button = screen.getByTestId("submit");

    // fill out and submit form
    const name = "Jack";
    const email = "jack@jerry.com";
    const tel = "7-334-6652";
    fireEvent.change(nameField, { target: { value: name } });
    expect(nameField).toHaveValue(name);
    fireEvent.change(emailField, { target: { value: email } });
    expect(emailField).toHaveValue(email);
    fireEvent.change(telField, { target: { value: tel } });
    expect(telField).toHaveValue(tel);
    expect(telField).toHaveAttribute("pattern");
    fireEvent.click(button);
    expect(addNew).toBeCalledTimes(0);
  });

  it("Set form (incorrect email)", () => {
    // it renders empty form fields
    const nameField = screen.getByPlaceholderText("Name");
    const emailField = screen.getByPlaceholderText("Email");
    const telField = screen.getByPlaceholderText("Telephone");
    const button = screen.getByTestId("submit");

    // fill out and submit form
    const name = "Jack";
    const email = "jacjerrycom";
    const tel = "777-334-6652";
    fireEvent.change(nameField, { target: { value: name } });
    expect(nameField).toHaveValue(name);
    fireEvent.change(emailField, { target: { value: email } });
    expect(emailField).toHaveValue(email);
    fireEvent.change(telField, { target: { value: tel } });
    expect(telField).toHaveValue(tel);
    fireEvent.click(button);
    expect(addNew).toBeCalledTimes(0);
  });

  it("Set form (not full form)", () => {
    // it renders empty form fields
    const nameField = screen.getByPlaceholderText("Name");
    const emailField = screen.getByPlaceholderText("Email");
    const telField = screen.getByPlaceholderText("Telephone");
    const button = screen.getByTestId("submit");

    // fill out and submit form
    const name = "Jack";
    const email = "jack@jerry.com";
    const tel = "";
    fireEvent.change(nameField, { target: { value: name } });
    expect(nameField).toHaveValue(name);
    fireEvent.change(emailField, { target: { value: email } });
    expect(emailField).toHaveValue(email);
    fireEvent.change(telField, { target: { value: tel } });
    expect(telField).toHaveValue(tel);
    expect(telField).toHaveAttribute("required");
    fireEvent.click(button);
    expect(addNew).toBeCalledTimes(0);
  });
});
