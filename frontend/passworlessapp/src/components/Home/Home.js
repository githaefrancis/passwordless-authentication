import { Card } from "@mui/material";
import React from "react";

const Home=()=>{
    return(
        <div>

            <header className="hero card-section">
               <h2> Welcome to Actserve</h2>
            </header>
            <div className="card-tray">
                <Card className="pic-card">
                <img src="img/life.jpg" alt="life insurance"/>
                </Card>
                <Card className="pic-card">
                <img src="img/general.jpg" alt="general insurance"/>
                 
                </Card>
                <Card className="pic-card">
                <img src="img/consult.jpg" alt="consultancy"/>
                  
                </Card>
            </div>
        </div>
    )
}

export default Home