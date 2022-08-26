import { Button, Card } from "@mui/material";
import React,{useEffect,useState} from "react";
import axios from "../../utils/axios";
import { Navigate,useNavigate } from "react-router-dom";
const Home=()=>{
    const navigate=useNavigate()
    useEffect(()=>{
        let url="api/home/"
        axios
            .get(url)
            .then((res)=>{
                
            })
            .catch(err=>{
                
                navigate('/',{replace:true})
            }
            );
    },[])
    const handleLogout=()=>{

        localStorage.removeItem('jwt');
        navigate('/',{replace:true})

    }
    const redirectLogin=()=>{

    }
    return(
        <div>

            <header className="hero card-section">
               <h2> Welcome to Actserve</h2>
            </header>
            <Button variant="contained" style={{backgroundColor:"black",marginTop:"2em"}} onClick={handleLogout}>Logout</Button>

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