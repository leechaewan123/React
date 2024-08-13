import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    const navigate = useNavigate();
    
    return (
        <div>
            <button className = "button1"onClick={()=>(navigate('/About'))}>About</button>
            <button className = "button2"onClick={()=>(navigate('/Profile'))}>Profile</button>
            <button className = "button3"onClick={()=>(navigate('/Display'))}>Main</button>
        </div>
    )
}


export default Home