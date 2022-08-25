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
  
} from "@mui/material";
import "./Auth.css";
import { useState } from "react";
const Login = () => {
  const [activeOption, setActiveOption] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ errMsg,setErrMsg]=useState("");
  const handleOptionChange = (e) => {
    setActiveOption(e.target.value);
    setErrMsg("")
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
    let data;
    if (activeOption === 'email') {
        if(!email.trim()){
            setErrMsg("Email is required")
            return
        }
      validation = validator(email);
      data={email}
     
    } else if (activeOption === 'phone') {
        if(!phone.trim()){
            setErrMsg("Phone is required")
            return
        }
      validation = validator(phone);
      data={phone}
    } else {
      validation = '';
    }

    if (validation) {
    let url='api/login/'
      axios
        .post(url,data)
        .then(res=>{

            if(Object.keys(data)[0]==='email'){
                console.log(`A magic link has been sent to your email`)
            }
            else{
                console.log('An OTP has been sent to your phone')
            }
            
        })
        .catch(err=>{
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
                <div style={{ color:'red'}}>{errMsg}</div>

              </FormControl>
              {activeOption === "email" && (
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value);setErrMsg("")}}
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
                  onChange={(e) => {setPhone(e.target.value);setErrMsg("")}}
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
