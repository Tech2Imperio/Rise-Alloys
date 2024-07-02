import { useNavigate } from "react-router-dom";
import { contact } from "../../../assets";
import "./styles.css";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactRight = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    number: "",
    query: "",
  });
  const [rows, setRows] = useState(1);
  const formRef = useRef(null);
  const [human, setHuman] = useState(false);
  const iframeRef = useRef(null);
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
      let matches = value.match(new RegExp(match, "gi"));
      setRows(matches ? matches.length + 1 : 1);
    }
  };

  const handleNumberInput = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setFormData((prevData) => ({ ...prevData, number: value }));
  };

  const validateForm = () => {
    let formErrors = {};
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
    const formErrors = validateForm();
    if (formErrors[0]) {
      formRef.current.submit();
      navigate("thanks");
      iframeRef.current.onload = () => {
        setFormData({
          company: "",
          name: "",
          email: "",
          number: "",
          query: "",
        });
        setHuman(false);
        setRows(1);
      };
    } else {
      alert(formErrors[1][Object.keys(formErrors[1])[0]]);
    }
  };

  return (
    <form
      ref={formRef}
      className="contact-right"
      action="https://script.google.com/macros/s/AKfycbzx3CYkhS6gVQIBAeVBs00QaZCW8b1gBCky7iRDO9hrUj6r5ppREd3eJofkyfg9CnNdfg/exec"
      method="post"
      target="hidden_iframe"
      onSubmit={handleSubmit}
    >
      <div className="contact-right-container">
        <div className="contact-right-design">
          <div className="contact-right-ring"></div>
          <div className="contact-right-ring"></div>
        </div>
        <div className="right-contact-container">
          <div className="right-contact-details">
            {["company", "name"].map((field) => (
              <div key={field} className="right-contact-detail">
                <input
                  type="text"
                  className="forminputs"
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  aria-label={field}
                  required
                />
                <label className="input-label" htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
              </div>
            ))}
          </div>
          <div className="right-contact-details">
            <div className="right-contact-detail">
              <input
                type="email"
                className="forminputs"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-label="email"
                required
              />
              <label className="input-label" htmlFor="email">
                Email
              </label>
            </div>
            <div className="right-contact-detail">
              <input
                type="tel"
                className="forminputs"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleNumberInput}
                aria-label="number"
                pattern="\d*"
                required
              />
              <label className="input-label" htmlFor="number">
                Number
              </label>
            </div>
          </div>
          <div className="right-contact-details">
            <div className="right-contact-detail">
              <textarea
                name="query"
                id="query"
                className="formTextArea"
                value={formData.query}
                onChange={handleChange}
                placeholder="Write your inquiry..."
                rows={rows}
                aria-label="query"
                required
              />
            </div>
          </div>
        </div>
        <div className="right-footer">
          <div className="right-captcha-details">
            <div className="right-captcha-detail">
              <ReCAPTCHA
                sitekey="6LelCAAqAAAAAGUF65rE9pM45OBRdFJPHSotZxEz"
                onChange={() => setHuman(true)}
              />
            </div>
          </div>
          <div className="right-contact-footer">
            <div className="right-contact">
              <button
                type="submit"
                className="button footerbutton"
                disabled={!human}
              >
                Submit Query
              </button>
            </div>
            <div className="right-image">
              <img src={contact} alt="Contact illustration" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      <iframe
        ref={iframeRef}
        name="hidden_iframe"
        style={{ display: "none" }}
        title="Temp Frame"
      >
        {false ? "" : ""}
      </iframe>
    </form>
  );
};
