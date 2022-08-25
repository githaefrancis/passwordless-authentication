import React from "react";
import OtpInput from "react-otp-input"
import { Card,Grid,Button } from "@mui/material";
import "./Auth.css"
const Verify=()=>{

return(
<div className="card-section">
<Grid container>
        <Grid
          item
          xs={12}
          style={{ marginTop: "10EM" }}
          className="card-section"
        >
          <Card variant="outlined" color="success" style={{ margin: "1em",padding:"2em" }}>
            <h1>Passwordless Authentication</h1>

            <h2>Enter OTP</h2>
            <div className="card-section">
        <Grid item  justify="center">
              <OtpInput
                separator={
                  <span>
                    <strong>-</strong>
                  </span>
                }
                numInputs={6}
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  margin: "0 1rem",
                  fontSize: "2rem",
                  borderRadius: 4,
                  border: "1px solid green"
                }}
              />
            </Grid>

           
            </div>
            <div style={{marginTop:"2em"}}>
            <Button variant="contained" color="success" type="submit">
                Submit
              </Button>
            </div>
            
          </Card>
        </Grid>
  
      </Grid>

  
</div>
)
}

export default Verify