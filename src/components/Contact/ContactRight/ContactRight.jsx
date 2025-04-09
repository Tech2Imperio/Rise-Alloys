"use client";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./styles.css";

export const ContactRight = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    number: "",
    query: "",
  });
  const [rows, setRows] = useState(4);
  const formRef = useRef(null);
  const [human, setHuman] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateNumber = (number) => {
    const re = /^\d{10}$/;
    return re.test(String(number));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "query") {
      const match = "\n";
      const matches = value.match(new RegExp(match, "gi"));
      setRows(matches ? matches.length + 4 : 4);
    }
  };

  const handleNumberInput = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setFormData((prevData) => ({ ...prevData, number: value }));
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.company) formErrors.company = "Company is required.";
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Invalid email format.";
    }
    if (!formData.number) {
      formErrors.number = "Number is required.";
    } else if (!validateNumber(formData.number)) {
      formErrors.number = "Invalid number format. Should be 10 digits.";
    }
    if (!formData.query) formErrors.query = "Query is required.";
    if (!human) formErrors.human = "Please verify you are human.";

    return [Object.keys(formErrors).length === 0, formErrors];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [isValid, formErrors] = validateForm();

    if (!isValid) {
      alert(formErrors[Object.keys(formErrors)[0]]);
      return;
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbz4A_wnMBKRu2xkbK16NsIIJDur0eterys6an4bG6mdYafyzKrSINPeZ_Nmp4RH1I3EXg/exec",
      {
        method: "POST",
        body: JSON.stringify({
          from: "contact",
          company: formData.company,
          name: formData.name,
          email: formData.email,
          number: formData.number,
          query: formData.query,
        }),
      }
    )
      .then((response) => response.text())
      .then((data) => {
        console.log("Response from server:", data);
        navigate("thanks");
      })
      .catch((error) => console.error("Error sending data:", error));
  };

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="form-header">
          <h2>Send Us a Message</h2>
          <div className="separator-small"></div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              id="company"
              name="company"
              className="form-input"
              value={formData.company}
              onChange={handleChange}
              required
            />
            <label htmlFor="company" className="form-label">
              Company
            </label>
          </div>

          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name" className="form-label">
              Name
            </label>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>

          <div className="form-group">
            <input
              type="tel"
              id="number"
              name="number"
              className="form-input"
              value={formData.number}
              onChange={handleNumberInput}
              pattern="\d*"
              required
            />
            <label htmlFor="number" className="form-label">
              Phone Number
            </label>
          </div>
        </div>

        <div className="form-group">
          <textarea
            id="query"
            name="query"
            className="form-textarea"
            value={formData.query}
            onChange={handleChange}
            rows={rows}
            required
          ></textarea>
          <label htmlFor="query" className="form-label">
            Your Message
          </label>
        </div>

        <div className="form-footer">
          <div className="recaptcha-container">
            <ReCAPTCHA
              sitekey="6LelCAAqAAAAAGUF65rE9pM45OBRdFJPHSotZxEz"
              onChange={() => setHuman(true)}
            />
          </div>

          <button type="submit" className="submit-button" disabled={!human}>
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};
