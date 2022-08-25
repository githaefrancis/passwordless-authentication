import React,{useState} from "react";
import OtpInput from "react-otp-input"
import { Card,Grid,Button } from "@mui/material";
import "./Auth.css"
const Verify=()=>{

const [otp,setOtp]=useState("2568")
const handleSubmit=()=>{
    console.log(otp)
    setOtp("")
}
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
                value={otp}
                onChange={(otp)=>setOtp(otp)}
              />
            </Grid>

           
            </div>
            <div style={{marginTop:"2em"}}>
            <Button variant="contained" color="success" onClick={handleSubmit}>
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