import React from "react";
import axios from "../../utils/axios_no_auth"
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
  Modal,
  Box,


} from "@mui/material";
import "./Auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [activeOption, setActiveOption] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [modalStatus, setModal] = useState(false)
  let navigate = useNavigate()
  const handleOptionChange = (e) => {
    setActiveOption(e.target.value);
    setErrMsg("")
  };
  const handleClose = () => {
    setModal(false)
  }
  const handleCreate=()=>{
    let url="api/register/"
    let data=activeOption==="email" ? {email} : {phone}
    axios
    .post(url, data)
    .then(res => {
      if (Object.keys(data)[0] === 'email') {
        console.log(`A magic link has been sent to your email`)
      }
      else {
        console.log('An OTP has been sent to your phone')
      }

      let loginUrl = 'api/login/'
      axios
        .post(loginUrl, data)
        .then(res => {

          if (Object.keys(data)[0] === 'email') {
            console.log(`A magic link has been sent to your email`)
          }
          else {
            console.log('An OTP has been sent to your phone')
          }
          navigate('/verify', { replace: true });

        })
        .catch(err => {
          setModal(true)
          console.log("No account has been found,Would you like to create one?")
        })
      setModal(false)
      
    


    })
    .catch(err => {
      console.log("Account creation failed")
    })
  }
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
    let validation = '';
    let data;
    if (activeOption === 'email') {
      if (!email.trim()) {
        setErrMsg("Email is required")
        return
      }
      validation = validator(email);
      data = { email }

    } else if (activeOption === 'phone') {
      if (!phone.trim()) {
        setErrMsg("Phone is required")
        return
      }
      validation = validator(phone);
      data = { phone }
    } else {
      validation = '';
    }

    if (validation) {
      let url = 'api/login/'
      axios
        .post(url, data)
        .then(res => {

          if (Object.keys(data)[0] === 'email') {
            console.log(`A magic link has been sent to your email`)
          }
          else {
            console.log('An OTP has been sent to your phone')
          }
          navigate('/verify', { replace: true });

        })
        .catch(err => {
          setModal(true)
          console.log("No account has been found,Would you like to create one?")
        })
    }
  };
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{ marginTop: "10EM" }}
          className="card-section"
        >
          <Card variant="outlined" color="success" style={{ margin: "1em" }}>
            <h1>Passwordless Authentication</h1>

            <h2>Sign In</h2>
            <form
              style={{ padding: "2em" }}
              onSubmit={handleSubmit}
            >

              <FormControl>
                <RadioGroup
                  aria-labelledby="login-option"
                  defaultValue="email"
                  name="opt"
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
                <div style={{ color: 'red' }}>{errMsg}</div>

              </FormControl>
              {activeOption === "email" && (
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrMsg("") }}
                />
              )}
              {activeOption === "phone" && (
                <TextField
                  fullWidth
                  id="phone"
                  label="Phone +254"
                  variant="outlined"
                  margin="normal"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setErrMsg("") }}
                />
              )}
              <Button variant="contained" color="success" type="submit">
                Submit
              </Button>
            </form>
          </Card>
        </Grid>
      </Grid>

      {/* register modal */}

      <Modal
        open={modalStatus}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="card-section "
      >
        <Box xs={10} >
          <div className="modal-section">
            <div className="centered-text">
              <h3 >Account Does not exist</h3>
              <h4>Would like to Create an account with this {activeOption}? </h4>
              <label>{activeOption === "email" ? email : phone}</label>

              <div style={{ display: "flex", justifyContent: "space-around", marginTop: "2em" }}><Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
                <Button variant="contained" color="success" onClick={handleCreate}>Create</Button></div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
