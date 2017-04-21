import React from 'react';
import {connect} from 'react-redux';
import MapChart from '../components/mapChart';
import Gmap from '../components/gMaps';


class TenkiList extends React.Component {
    
    showWeather(cityInfo){
        
        //map over object to get an array of weather temperature

        const cityName = cityInfo.city.name;
        
        const temperature = cityInfo.list.map(weather => weather.main.temp);
        const celsius = temperature.map(temp  => temp - 273);
        
        const pA = cityInfo.list.map(weather => weather.main.pressure);
        const humid = cityInfo.list.map(weather => weather.main.humidity);
        
        const lat= cityInfo.city.coord.lat;
        const lon = cityInfo.city.coord.lon;
        
        
        return(
            
            <tr key = {cityName}>
                <td><Gmap className = "gap" lon = {lon} lat = {lat} />{cityName}</td>
                <td><MapChart passIn = {celsius} color = "red" dimension = "°C" /></td>
                <td><MapChart passIn = {humid} color = "blue" dimension = "%" /></td>
                <td><MapChart passIn = {pA} color = "purple" dimension = "hPa" /></td>
                
            </tr>
        
        );
        
    }
    
    render(){
        
        //individual rows
        //get data in from redux, use connect
        
        return (
            
            
            
            <table className = "table table-hover">
                <h3 className = "gap center">Red dotted line means average!</h3>
                <thead>
                    
                    <tr>
                        <th>City Name</th>
                        <th>Temperature (°C)</th>
                        <th>Humidity (%)</th>
                        <th>Pressure (hPa)</th>
                    </tr>
            
                </thead>
            
                <tbody>
                    {this.props.weather.map(this.showWeather)}
                </tbody>
            
            </table>
        
        )
        
    }
    
}

function mapStateToProps(state) {
    return {weather: state.weather}
}

export default connect(mapStateToProps)(TenkiList);