import logo from './logo.svg';
import react, {useEffect} from "react"
import './App.css';
import axios from 'axios';

function App() {
  useEffect(()=>{
    axios.get("/bulldog")
    .then(data=>{
      console.log("+++++++")
      console.log(data)
      console.log("+++++++")
    })
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload DUDE.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
