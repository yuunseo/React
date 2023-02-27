import styles from './Hello.module.css';
import {useState} from "react";


export default function Hello() {
    const [name,setName] = useState("yunseo");

    function changeName(){
        setName(name === "yunseo" ? "KYS" : "yunseo");
    }
    return(
        <div>
            <h1>Hello</h1>
            <h2>State</h2>
            <p>{name}</p>
            <button onClick={changeName}>Change</button>
        </div>
        
    )
} 