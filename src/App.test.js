import { fireEvent, render, screen } from "@testing-library/react";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import App from "./App";
import BookingForm from "./components/BookingForm/BookingForm";
import BookingPage from "./components/BookingPage/BookingPage";

//static test for BookingPage
test("Renders the BookingForm heading", () => {
  const testTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BookingPage avlTimes={testTimes} />);
  const headingElement = screen.getByLabelText("Choose date");
  expect(headingElement).toBeInTheDocument();
});

//test for form validation (VALID)
test("Check form with valid data", async () => {
  const testTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BookingForm times={testTimes} />);
  const dateInput = screen.getByTestId("date-input");
  const timeInput = screen.getByTestId("time-input");
  const guestsInput = screen.getByTestId("guests-input");
  const occasionInput = screen.getByTestId("occasion-input");
  fireEvent.change(dateInput, { target: { value: "2023-01-19" } });
  fireEvent.change(timeInput, { target: { value: "17:30" } });
  fireEvent.change(guestsInput, { target: { value: 5 } });
  fireEvent.change(occasionInput, { target: { value: "Birthday" } });
  // check required fields (HTML)
  expect(screen.getByRole("button")).not.toBeDisabled();
});

//test for form validation (INVALID)
test("Check form with invalid data", async () => {
  const testTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BookingForm times={testTimes} />);
  const dateInput = screen.getByTestId("date-input");
  const timeInput = screen.getByTestId("time-input");
  const guestsInput = screen.getByTestId("guests-input");
  const occasionInput = screen.getByTestId("occasion-input");
  fireEvent.change(dateInput, { target: { value: 29 } });
  fireEvent.change(timeInput, { target: { value: null } });
  fireEvent.change(guestsInput, { target: { value: 0 } });
  fireEvent.change(occasionInput, { target: { value: "Birthday" } });
  // check required fields (HTML)
  expect(screen.getByRole("button").isDisabled);
});
