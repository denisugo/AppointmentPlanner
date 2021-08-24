import { shallow } from "enzyme";
import ContactForm from "./ContactForm";

describe("Form input check", () => {
  it("Typing a normal name returns this name", () => {
    //   Setup
    const name = "Jack";
    let passedValues;
    const handleChangeName = (event) => {
      passedValues = event.target.value;
    };

    const output = name;

    // Exercise
    const wrapper = shallow(
      <ContactForm
        handleChangeName={handleChangeName}
        values={{ name: "", tel: "", email: "" }}
      />
    );
    const input = wrapper.find("input[name='name']");
    input.simulate("change", { target: { value: name } });

    // Evaluate
    expect(passedValues).toEqual(output);
  });
});

describe("Form submission check", () => {
  // Teardown
  let passedValues = null;
  const handleClick = (event) => {
    event.preventDefault();
    passedValues = event.target.value;
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ContactForm
        handleClick={handleClick}
        values={{ name: "", tel: "", email: "" }}
      />
    );
  });
  it("Returns null when email is wrong", () => {
    //   Setup
    const email = "Jack";
    const output = null;

    // Exercise
    const input = wrapper.find("input[name='email']");
    input.simulate("change", { target: { value: email } });
    const submitButton = wrapper.find("input[type='submit']");
    submitButton.simulate("click");

    // Evaluate
    expect(passedValues).toEqual(output);
  });

  it("Doesnt return null when email isnt wrong", () => {
    //   Setup
    const email = "Jack@Zack.com";
    const output = true;

    // Exercise
    const input = wrapper.find("input[name='email']");
    input.simulate("change", { target: { value: email } });
    const submitButton = wrapper.find("input[type='submit']");
    submitButton.simulate("click");
    // Evaluate
    expect(typeof passedValues === "object").toEqual(output);
  });
});
