import React from "react";

import classes from "./Signin.css";

import { connect } from "react-redux";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button
} from "@material-ui/core";
import { setModalVisabilty } from "../../../../actions/auth.action";

const Signin = props => {
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
          <p>
            <TextField
              id="signin-email"
              label="Email"
              defaultValue=""
              helperText=""
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </p>
          <p>
            <TextField
              id="signin-password"
              label="Password"
              defaultValue=""
              helperText=""
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </p>
          <p>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={true}
                  onChange={() => {}}
                  value="check"
                />
              }
              label="Remember me"
            />
          </p>
          <p>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              size="large"
            >
              Sign in
            </Button>
          </p>
        </div>

        <div className={classes.signup}>
          <h2>Sign up</h2>
          <p>
            <TextField
              id="signin-email"
              label="Email"
              defaultValue=""
              helperText=""
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </p>
          <p>
            <TextField
              id="signin-password"
              label="Password"
              defaultValue=""
              helperText=""
              className={classes.textField}
              margin="normal"
              variant="outlined"
              type="password"
            />
          </p>
          <p>
            <TextField
              id="signin-cpassword"
              label="Confirm password"
              defaultValue=""
              helperText=""
              className={classes.textField}
              margin="normal"
              variant="outlined"
              type="password"
            />
          </p>
          <p>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              size="large"
            >
              Sign up
            </Button>
          </p>
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
