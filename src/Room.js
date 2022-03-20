import React, {useState} from "react";
import './Room.css';
const Room = () => {
    let [islit, setlit] = useState(true);
    let [temp, setemp] = useState(32);
    return(
        <div> This Room is {islit? "lit": "Dark"} <br/>
        <button className="on_switch" onClick= {() => {
            setlit(true); 
            document.body.style.color = "black"; document.body.style.backgroundColor = "white";
        }}> Turn On </button>
             <button className="off_switch" onClick= {() => {
            setlit(false); 
            document.body.style.color = "white"; document.body.style.backgroundColor = "black";
         
        }}> Turn Off</button> <br/> <br/>
        The Current Temperature is {temp} C <br/>
        <button className="increase" onClick= { () => {
            setemp(++temp);}}> Increase</button>
        <button className="decrease" onClick= { () => {
            setemp(--temp);}}> Decrease</button>
        </div>
    
    )
}
export default Room;