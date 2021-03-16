import React, {useState}from 'react';
import API from './API';


function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt =>{
    if(evt.key === "Enter")  {
     fetch(`${API.base}weather?q=${query}&units=imperial&APPID=${API.key}`)
     .then(res => res.json())
     .then(result => {
       setWeather(result);
       setQuery('');
     } );
    } 
  }
  const setBackground = weather => {
    if(weather === 'Clear')
      return 'sunny';
    else if(weather === 'Clouds')
      return 'cloudy'
    else if(weather === "Rain" || weather === "Drizzle")
      return 'rain'
      else if(weather === "Snow")
      return 'snow'
    else if(weather === 'Thunder Storm')
      return 'overCast'
    else if (weather === 'Fog' || weather === 'Mist')
      return 'foggy'
    
    return 'secondInfo'
  } 
return (
  <div className="app">
      <main className ="contain clearfix"> 

        <h1>Check Today's Weather</h1> 
        <strong><p>Type in your city  to check the status of the currrent weather.</p>
       <p> Some times you need to type in the city, state, and country since there could be other places named the same.</p> 
       <p><i>(Davenport, FL, US, as opposed to Davenport, IA)</i></p>
    
        </strong>
       <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search City Here..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        >
        </input>
    </div>  
    
    {(typeof weather.main != "undefined")?(
    <div>
    <div className ="location-box">
     <ul className="mainInfo">
        <li className="location">
        {weather.name},&nbsp;
        {weather.sys.country}</li>  
        <li className="temp">{Math.round(weather.main.temp)}°F</li>
      </ul>

    <ul className={setBackground(weather.weather[0].main)}>
        <li  className="weather">{weather.weather[0].main}</li>
    </ul>
    </div>
    </div>
       ): ('')}
      </main>
    </div>
  );
}

export default App;
