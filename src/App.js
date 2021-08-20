import './App.css';
import logo from './img/logo.png'
import Countries from "./components/Countries/Countries";
import {useState} from "react";
import {covidAPI} from "./components/API/api";

function App() {

    const [country, setCountries] = useState([
        // {ID: 1, Country: 'Ukraine', TotalConfirmed: 10000},
        // {ID: 2, Country: 'Russia', TotalConfirmed: 1000},
        // {ID: 3, Country: 'Berlin', TotalConfirmed: 20000},
        // {ID: 4, Country: 'France', TotalConfirmed: 30000}
    ])

   const getCountries = () => {
        return covidAPI.getCountries().then(response => setCountries(response.Countries.map(item => item)))
   }


    return (
        <div className="App">
            <header>
                <img src={logo} alt="logo"/>
                <h1>Statistics</h1>
                <input type="text" placeholder={'search'}/>
            </header>
            <Countries countries={country}/>
            <button className='btn btn-success' onClick={() => getCountries()}>Get Info</button>
        </div>
    );
}

export default App;
