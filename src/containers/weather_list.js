import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

    renderWeather(cityData) {
        return (
            <tr>
                <td>{cityData.city.name}</td>
            </tr>
        )
    }

    render() {
        if (this.props.weather == null) {
            return <div> Loading...</div>
        }
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps, null)(WeatherList);