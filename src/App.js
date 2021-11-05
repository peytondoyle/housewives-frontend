import logo from './logo.svg';
import './App.css';

  let HOUSEWIVES_URL = "http://housewives-backend.herokuapp.com/housewives.json"


function App() {

  fetch(HOUSEWIVES_URL)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })

  return (
    <div className="App">
      <br></br>
      <br></br>
       <p>housewives.app<br></br>coming soon.</p>
    </div>
  );
}

export default App;
