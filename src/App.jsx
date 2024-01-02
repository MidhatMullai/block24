import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {puppyList} from './data.js'
import './App.css'
import './path-to-css.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    // some logic here
  }

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={handleClick} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}
  console.log(puppyList);


export default App
