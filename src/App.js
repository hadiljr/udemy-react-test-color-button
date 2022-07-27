import { useState } from 'react';
import './App.css';

function App() {

  const [buttonColor,setButtonColor] = useState('red');
  const [disabled,setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red'?'blue':'red';

  return (
    <div >
     <button 
      style={disabled?{backgroundColor:'gray'}:{backgroundColor:buttonColor}}
      onClick={()=> setButtonColor(newButtonColor)}
      disabled = {disabled}
      >
        Change to {newButtonColor}
      </button>
      <label htmlFor='disable-button-checkbox'>Disable button</label>
      <input 
        id="disable-button-checkbox"
        type="checkbox" 
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e)=> setDisabled(e.target.checked)}
        />
    </div>
  );
}

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g,' $1');
}

export default App;
