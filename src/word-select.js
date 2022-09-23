import { useState } from "react";

export default function(props){
    const [secretWord, setSecretWord]=useState('');
    return(
        <div className={props.isShown ?'':'hidden'}>
            <input type="text" 
             onChange={e=>setSecretWord(e.target.value)}/>
            <button
            onClick={e=>props.wordSelected(secretWord)}
            >Set Word</button>
        </div>
    )
}