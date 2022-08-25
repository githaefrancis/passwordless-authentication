import { Card } from "@mui/material";
import React,{useEffect,useState} from "react";
import axios from "../../utils/axios";
import { Navigate } from "react-router-dom";
const Home=()=>{
    useEffect(()=>{
        let url="api/home/"
        axios
            .get(url)
            .then((res)=>{
                
            })
            .catch(err=>{
                
                return <Navigate to="/login" replace />
            }
            );
    },[])
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