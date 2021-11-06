import logo from './logo.svg';
import './App.css';

  let HOUSEWIVES_URL = "https://housewives-backend.herokuapp.com/housewives.json"


function App() {

  fetch(HOUSEWIVES_URL)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })

  return (
    <div className="App">
        <p>
          realhousewives.app coming soon
        </p>
    </div>
  );
}

export default App;
