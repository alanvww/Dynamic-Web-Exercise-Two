import React from 'react';

function WeatherCard({
	cloudiness,
	currentTemp,
	highTemp,
	humidity,
	lowTemp,
	weatherType = `Unknown`,
	windSpeed,
}) {
	return (
		<section className="WeatherCard">
			<div className="CurrentTempWrapper">
				<p>
					Current Weather:
					<strong className="highlightedData">{weatherType}</strong>
				</p>
				<p>
					Current Temperature:
					<strong className="highlightedData">{currentTemp}°C</strong>
				</p>
			</div>

			<div className="CurrentTempWrapper">
				<p>
					<strong className="highlightedData">
						{lowTemp}°C - {highTemp}°C
					</strong>
				</p>
			</div>
			<p>
				Cloudiness: <strong>{cloudiness}</strong>
			</p>
			<p>
				Humidity: <strong>{humidity}</strong>
			</p>
			<p>
				WeatherType: <strong>{lowTemp}</strong>
			</p>
			<p>
				Wind Speed: <strong>{windSpeed}mph</strong>
			</p>
		</section>
	);
}

export default WeatherCard;
