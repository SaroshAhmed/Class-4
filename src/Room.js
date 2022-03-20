import React, {useState} from "react";
import './Room.css';
const Room = () => {
    let [islit, setlit] = useState(true);
    return(
        <div> This Room is {islit? "lit": "Dark"} <br/>
        <button className="flick" onClick= {() => {
            setlit(!islit); <br/>
            if  (islit===false){
                document.body.style.color = "black";
                document.body.style.backgroundColor = "white";
              
            }
            else {
                document.body.style.color = "white";
                document.body.style.backgroundColor = "black";
                
            }
        }}>
        Flick the button</button>
        </div>
    
    )

}
export default Room;