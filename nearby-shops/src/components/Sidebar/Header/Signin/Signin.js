import React, { useState } from "react";

import classes from "./Signin.css";

import { connect } from "react-redux";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button
} from "@material-ui/core";
import { setModalVisabilty } from "../../../../actions/auth.action";
import { sendLogin } from "../../../../services/auth.services";

const Signin = props => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    remember: false,
    emailError: false,
    passwordError: false
  });

  const handleLogin = async () => {
    if (!login.passwordError && !login.emailError) {
      let data = (await sendLogin(login.email, login.password)).data;
      if (data.success) {
        alert(data.data);
      } else {
        alert(data.error.message);
      }
    }
  };

  const validateEmail = () => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
    if (!re.test(login.email)) {
      setLogin(prev => ({ ...prev, emailError: true }));
    } else {
      setLogin(prev => ({ ...prev, emailError: false }));
    }
  };
  const validatePassword = () => {
    if (login.password.length < 6) {
      setLogin(prev => ({ ...prev, passwordError: true }));
    } else {
      setLogin(prev => ({ ...prev, passwordError: false }));
    }
  };

  return (
    <div
      className={classes.container}
      style={props.show ? {} : { display: "none" }}
    >
      <div
        className={classes.dropback}
        onClick={() => props.dispatch(setModalVisabilty(false))}
      ></div>
      <div className={classes.modal}>
        <div className={classes.login}>
          <h2>Sign in</h2>

          <TextField
            error={login.emailError}
            id="signin-email"
            label="Email"
            defaultValue={login.email}
            helperText={login.emailError ? "please type valid email" : ""}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={e => {
              if (e.target !== null) {
                const value = e.target.value;
                setLogin(prev => ({
                  ...prev,
                  email: value
                }));
                validateEmail();
              }
            }}
          />

          <TextField
            error={login.passwordError}
            id="signin-password"
            label="Password"
            defaultValue={login.password}
            helperText={
              login.passwordError
                ? "password has to be more than 6 characters"
                : ""
            }
            type="password"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={e => {
              if (e.target !== null) {
                const value = e.target.value;
                setLogin(prev => ({
                  ...prev,
                  password: value
                }));
                validatePassword();
              }
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={login.remember}
                onChange={() =>
                  setLogin(prev => ({ ...prev, remember: !prev.remember }))
                }
                value="check"
              />
            }
            label="Remember me"
          />

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            size="large"
            onClick={handleLogin}
          >
            Sign in
          </Button>
        </div>

        <div className={classes.signup}>
          <h2>Sign up</h2>

          <TextField
            id="signup-email"
            label="Email"
            defaultValue=""
            helperText=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="signup-password"
            label="Password"
            defaultValue=""
            helperText=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
            type="password"
          />

          <TextField
            id="signup-cpassword"
            label="Confirm password"
            defaultValue=""
            helperText=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
            type="password"
          />

          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            size="large"
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    show: state.auth.modal
  };
};
export default connect(mapStateToProps)(Signin);
