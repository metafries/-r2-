import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        
        return (
            <tr key={name} className="row">
                <td className="col-xs-3"><GoogleMap lon={lon} lat={lat} /></td>
                <td className="col-xs-3"><Chart data={temps} color="orange" units="K" /></td>
                <td className="col-xs-3"><Chart data={pressures} color="green" units="hPa" /></td>
                <td className="col-xs-3"><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr className="row">
                        <th className="col-xs-3">City</th>
                        <th className="col-xs-3">Temperature (K)</th>
                        <th className="col-xs-3">Pressure (hPa)</th>
                        <th className="col-xs-3">Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);