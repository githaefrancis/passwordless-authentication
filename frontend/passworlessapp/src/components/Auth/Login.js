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
  Radio,Card
} from "@mui/material";
import "./Auth.css";
import { useState } from "react";
const Login = () => {
    let [activeOption,setActiveOption]=useState("email")

    const handleOptionChange=(e)=>{
        setActiveOption(e.target.value)
    }
    const handleSubmit=(e)=>{
        
    }
  return (
    <div>
      <Grid container>
        <Grid item xs={6} className="hero"></Grid>
        <Grid item xs={6} fullWidth className="login-section">
        <Card variant="outlined" color="success" >
            <h2>Sign In</h2>
          <form margin="normal" style={{padding:'4em'}} onSubmit={handleSubmit}>
            <FormControl >
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
            {activeOption==="email" &&
            <TextField
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
              margin="normal"
            />}
             {activeOption==="phone" &&
            <TextField
              fullWidth
              id="phone"
              label="Phone"
              variant="outlined"
              margin="normal"
            />}
            <Button variant="contained" color="success" type="submit">Submit</Button>
          </form>
          </Card>
        </Grid>
      </Grid>
      {/* <Button variant="contained">Contained</Button> */}
    </div>
  );
};

export default Login;
