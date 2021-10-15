import './App.css';
import axios from 'axios';

function App() {
  // Login with firebase
  const authorize_account = () => {
    axios.get("http://localhost:5000/auth").then(res => {
      console.log("make it")
      console.log(res)
    })
  }

  return (
    <div className="App">
      <h1>Panel Control</h1>
      <button onClick={authorize_account}>Authorize Account</button>
    </div>
  );
}

export default App;
