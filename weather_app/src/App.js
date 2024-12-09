import { useEffect, useState } from 'react';
import './App.css';
import WeatherDetails from './Components/WeatherDetails';
import SearchHistory from './Components/SearchHistory';
import axios from 'axios';

function App() {
  const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("gwalior");
  const [apidata, setApidata] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`);
        setApidata(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchCity]);

  const handleSearch = () => {
    if (city) {
      setSearchCity(city);
      setHistory([...history, city]);
      setCity(""); // Clear the search input after searching
    }
  }

  const handleKeyPress = (e) => {
     if (e.key === 'Enter'){
       handleSearch(); 
      } 
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Weather App</h1>
      <div className="flex mb-6 sm: flex-wrap sm: justify-center">
        <input 
          onKeyPress={handleKeyPress}
          placeholder='Search Weather in your city'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 border rounded-l-md focus:outline-none"
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">Search</button>
      </div>
      <WeatherDetails apidata={apidata} />
      <SearchHistory history={history} />
    </div>
  );
}

export default App;
