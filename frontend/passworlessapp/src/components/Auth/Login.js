import React from "react";
import {
  Button,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
} from "@mui/material";
import "./Auth.css";
import { useState } from "react";
const Login = () => {
  const [activeOption, setActiveOption] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleOptionChange = (e) => {
    setActiveOption(e.target.value);
  };
  const validator = (identifier) => {
    if (activeOption === "email") {
      return identifier.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    } else {
      return identifier.match(
        /^\+[0-9]{2,3}[0-9]{9}$/
      );
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('reached')
    let validation ='';
    if (activeOption === 'email') {
      validation = validator(email);
     
    } else if (activeOption === 'phone') {
        console.log('now phoning')
      validation = validator(phone);
    } else {
      validation = '';
    }

    if (validation) {
      console.log("passed");
    }
  };
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{ marginTop: "10EM" }}
          className="login-section"
        >
          <Card variant="outlined" color="success" style={{ margin: "1em" }}>
            <h1>Passwordless Authentication</h1>

            <h2>Sign In</h2>
            <form
              margin="normal"
              style={{ padding: "4em" }}
              onSubmit={handleSubmit}
            >
              <FormControl>
                <RadioGroup
                  aria-labelledby="login-option"
                  defaultValue="email"
                  row
                  value={activeOption}
                  onChange={handleOptionChange}
                >
                  <FormControlLabel
                    value="email"
                    control={<Radio />}
                    label="Email"
                  />
                  <FormControlLabel
                    value="phone"
                    control={<Radio />}
                    label="phone"
                  />
                </RadioGroup>
              </FormControl>
              {activeOption === "email" && (
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              )}
              {activeOption === "phone" && (
                <TextField
                  fullWidth
                  id="phone"
                  label="Phone"
                  variant="outlined"
                  margin="normal"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              )}
              <Button variant="contained" color="success" type="submit">
                Submit
              </Button>
            </form>
          </Card>
        </Grid>
      </Grid>
      {/* <Button variant="contained">Contained</Button> */}
    </div>
  );
};

export default Login;
