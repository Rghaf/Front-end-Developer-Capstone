import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./BookingForm.css";

const BookingForm = ({ times, submitHandler }) => {
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("FORM SUBMITED", values);
      submitHandler(values);
    },
    validationSchema: Yup.object({
      date: Yup.date("Invalid data").required("Required"),
      time: Yup.string("Invalid data").required("Required"),
      guests: Yup.number("Invalid data")
        .required("Required")
        .min(1, "Must ba at least 1"),
      occasion: Yup.string().optional(),
    }),
  });

  return (
    <form
      noValidate
      onSubmit={formik.handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label htmlFor="date">Choose date</label>
      <input
        className="Input"
        onChange={formik.handleChange}
        type="date"
        id="date"
        data-testid="date-input"
        name="date"
        required
        value={formik.values.date}
        {...formik.getFieldProps("date")}
      />
      {formik.errors.date ? (
        <span className="error" data-testid="Error">
          {formik.errors.date}
        </span>
      ) : null}
      <label htmlFor="time">Choose time</label>
      <select
        className="Input"
        onChange={formik.handleChange}
        id="time"
        data-testid="time-input"
        name="time"
        required
        value={formik.values.time}
        {...formik.getFieldProps("time")}
      >
        {times.map((at) => (
          <option key={at} value={at}>
            {at}
          </option>
        ))}
      </select>
      {formik.errors.time ? (
        <span className="error">{formik.errors.time}</span>
      ) : null}
      <label htmlFor="guests">Number of guests</label>
      <input
        className="Input"
        onChange={formik.handleChange}
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        data-testid="guests-input"
        name="guests"
        value={formik.values.guests}
        {...formik.getFieldProps("guests")}
      />
      {formik.errors.guests ? (
        <span className="error">{formik.errors.guests}</span>
      ) : null}
      <label htmlFor="occasion">Occasion</label>
      <select
        className="Input"
        onChange={formik.handleChange}
        id="occasion"
        data-testid="occasion-input"
        name="occasion"
        value={formik.values.occasion}
        {...formik.getFieldProps("occasion")}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        className="Submit"
        type="submit"
        value="Make Your reservation"
        disabled={formik.isValid && formik.dirty ? false : true}
      />
    </form>
  );
};

export default BookingForm;
