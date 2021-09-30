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
					<strong className="highlightedData">{currentTemp}°</strong>
				</p>
			</div>

			<div className="CurrentTempWrapper">
				<p>
					<strong className="highlightedData">
						From {lowTemp}° to {highTemp}°{' '}
					</strong>
				</p>
			</div>
			<p>
				Cloudiness: <strong>{cloudiness}</strong>
			</p>
			<p>
				WeatherType: <strong>{humidity}</strong>
			</p>
			<p>
				WeatherType: <strong>{lowTemp}</strong>
			</p>
			<p>
				WeatherType: <strong>{windSpeed}</strong>
			</p>
		</section>
	);
}

export default WeatherCard;
