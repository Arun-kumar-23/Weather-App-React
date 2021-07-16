import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "weather-icons/css/weather-icons.css"

import Weather from './app_component/Weather.component'
import Form from './app_component/form.component'

const API_key="1df7ba320f755f403c83d0f941e3b71d"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      city: undefined,
      country: undefined,
      main: undefined,
      icon:undefined,
      temp_celsius: undefined,
      temp_min: undefined,
      temp_max: undefined,
      description: '',
      error: false
    }

    this.weatherIcon={
      Thunderstrom:"wi-thunderstrom",
      Drizzle: "wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog"
    }
  }
  
  calCelsius(temp){
    let cels = Math.floor(temp-273.15)
    return cels
  }

  get_WeatherIcon(icons, rangeId){
    console.log(icons)
    switch(true){
      case rangeId >=200 && rangeId <=232:
        this.setState({icon: icons.Thunderstrom})
        break

      case rangeId >=300 && rangeId <=321:
        this.setState({icon: icons.Drizzle})
          break

      case rangeId >=500 && rangeId <=531:
        this.setState({icon: icons.Rain})
        break

      case rangeId >=600 && rangeId <=622:
        this.setState({icon: icons.Snow})
        break
      
      case rangeId >=701 && rangeId <=781:
        this.setState({icon: icons.Atmosphere})
        break

      case rangeId === 800:
        this.setState({icon: icons.Clear})
        break

      case rangeId >=800 && rangeId <=804:
        this.setState({icon: icons.Clouds})
        break

      default:
        this.setState({icon: icons.Clouds})  
    }

    
  }
    getWeather = async (e)=>{
      e.preventDefault()
      console.log(e.target.elements.city.value)
      const city = e.target.elements.city.value


    
      // console.log(city)
      

      if(city){
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)

        const response = await api_call.json()
  
        console.log(response)
        
        this.setState({
          city: response.name,
          temp_celsius: this.calCelsius(response.main.temp),
          temp_min: this.calCelsius(response.main.temp_min),
          temp_max: this.calCelsius(response.main.temp_max),
          description: response.weather[0].description,
        })
        this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)
      }else {
        this.setState({error:true})
      }
        
    }
  
  
  render() {
    return (
        <div className="App">
          <Form loadweather={this.getWeather} error={this.state.error}/>
          <Weather  city={this.state.city} 
                    country={this.state.country} 
                    temp_celsius={this.state.temp_celsius} 
                    temp_min={this.state.temp_min} 
                    temp_max={this.state.temp_max} 
                    description={this.state.description} 
                    weatherIcon = {this.state.icon}/>
    
        </div>
      );
  }
}

export default App;
