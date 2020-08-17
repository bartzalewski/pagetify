import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import firebase from "../../config/fbConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledSignIn = styled.section`
  width: 50%;
`;

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isActiveEmail, setIsActiveEmail] = useState(false);
  const [isActivePassword, setIsActivePassword] = useState(false);

  const { authError } = props;
  const state = { email, password };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn(state);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(() => {
      setIsSignedIn(!!isSignedIn);
    });
  });

  return (
    <StyledSignIn className="form__wrapper">
      <form className="signin-form form--flex" onSubmit={handleSubmit}>
        <div className={isActiveEmail ? "input-field focus" : "input-field"}>
          <div className="input-field__icon">
            <FontAwesomeIcon icon="user" className="input-field__fa" />
          </div>
          <div className="input-field__wrapper">
            <span>Email</span>
            <label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                onClick={() => setIsActiveEmail(!isActiveEmail)}
                aria-label="email"
                className="input-field__input"
              />
            </label>
          </div>
        </div>
        <div className={isActivePassword ? "input-field focus" : "input-field"}>
          <div className="input-field__icon">
            <FontAwesomeIcon icon="unlock" className="input-field__fa" />
          </div>
          <div className="input-field__wrapper">
            <span>Password</span>
            <label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                onClick={() => setIsActivePassword(!isActivePassword)}
                aria-label="password"
                className="input-field__input"
              />
            </label>
          </div>
        </div>
        <button className="form__btn btn--gradient">Login</button>
        <div>{authError ? <p>{authError}</p> : null}</div>
      </form>
    </StyledSignIn>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
