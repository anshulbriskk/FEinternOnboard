import React from 'react';

const WeatherDetails = ({ apidata }) => {
  if (!apidata) return null;

  return (
    <div className="bg-white p-4 rounded shadow-md text-center mb-6 w-full max-w-sm">
      <div className="text-xl font-semibold">City: {apidata.name}</div>
      <div className="text-3xl font-bold text-blue-600 mt-2">Temperature: {apidata.main.temp}°C</div>
      <div className="mt-4 space-y-2">
        <div>Wind: {apidata.wind.speed} m/s</div>
        <div>Humidity: {apidata.main.humidity}%</div>
        <div>Cloudiness: {apidata.clouds.all}%</div>
        <div>Visibility: {apidata.visibility} meters</div>
      </div>
    </div>
  );
};

export default WeatherDetails;
