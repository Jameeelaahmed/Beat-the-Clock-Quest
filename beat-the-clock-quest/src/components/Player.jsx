import { useState , useRef} from "react";

export default function Player() {
  const playerName=useRef();
  const [enteredPlayerName, setenteredPlayerName] = useState(null);


  function handleClick(){
    setenteredPlayerName(playerName.current.value)
    playerName.current.value='';
  }



  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName?? "Unknown Entity"}</h2>
      <p>
        <input 
        type="text" 
        ref={playerName} />
        <button 
        onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
