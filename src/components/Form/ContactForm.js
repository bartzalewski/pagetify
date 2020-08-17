import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledContactForm = styled.div`
  width: 50%;

  .input-field {
    width: 49.25%;
  }

  .input-field:not(.input-field__textarea) {
    grid-template-columns: 10% 90%;
  }

  .input-field__textarea {
    width: 100%;
  }

  .input-field__checkbox {
    width: 100%;
    margin: 1rem 0;
    font-size: 14px;
    display: flex;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const [isActiveName, setIsActiveName] = useState(false);
  const [isActiveEmail, setIsActiveEmail] = useState(false);
  const [isActiveMessage, setIsActiveMessage] = useState(false);

  const submitForm = (e) => {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      setEmailStatus(xhr.responseText);
    });

    xhr.open(
      "GET",
      "https://pagetify-api.herokuapp.com/index.php?sendto=" +
        email +
        "&name=" +
        name +
        "&message=" +
        message
    );

    xhr.send();

    setName("");
    setEmail("");
    setMessage("");

    e.preventDefault();
  };

  return (
    <StyledContactForm className="form__wrapper" onSubmit={submitForm}>
      {emailStatus ? emailStatus : null}
      <form className="form--flex">
        <div className="input-field--flex">
          <div className={isActiveName ? "input-field focus" : "input-field"}>
            <div className="input-field__icon">
              <FontAwesomeIcon icon="user" className="input-field__fa" />
            </div>
            <div className="input-field__wrapper">
              <span>Your name *</span>
              <label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onClick={() => setIsActiveName(!isActiveName)}
                  required
                  className="input-field__input"
                />
              </label>
            </div>
          </div>
          <div
            className={
              isActiveEmail
                ? "input-field input-field--right focus"
                : "input-field input-field--right"
            }
          >
            <div className="input-field__icon">
              <FontAwesomeIcon icon="envelope" className="input-field__fa" />
            </div>
            <div className="input-field__wrapper">
              <span>Your email *</span>
              <label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onClick={() => setIsActiveEmail(!isActiveEmail)}
                  required
                  className="input-field__input"
                />
              </label>
            </div>
          </div>
        </div>
        <div
          className={
            isActiveMessage
              ? "input-field input-field__textarea focus"
              : "input-field input-field__textarea"
          }
        >
          <div className="input-field__icon">
            <FontAwesomeIcon icon="comments" className="input-field__fa" />
          </div>
          <div className="input-field__wrapper">
            <span>Message *</span>
            <label>
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onClick={() => setIsActiveMessage(!isActiveMessage)}
                required
                className="input-field__input"
              ></textarea>
            </label>
          </div>
        </div>
        <div className="input-field__checkbox">
          <input type="checkbox" id="accept" required name="accept" />
          <label className="checkbox__label" htmlFor="accept">
            I accept the information contained in the{" "}
            <a
              href="https://pagetify.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="default-link"
            >
              privacy policy
            </a>
            . *
          </label>
        </div>
        <input
          type="submit"
          className="form__btn btn--gradient"
          value="Submit"
        />
      </form>
    </StyledContactForm>
  );
};

export default ContactForm;
