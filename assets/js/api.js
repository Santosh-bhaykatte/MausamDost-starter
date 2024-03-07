'use strict'; // FOR LATEST JS VERSION

const api_key = "ed2e30593db614e47ce92c4ab1586d55"; // API KEY

/**
 * Fetch data from server
 * @param {string} URL - API url 
 * @param {function} callback
 */ 

export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    /**
     * @param {string} query Search query e.g.: "New Delhi", "London"
     */ 
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    } 
}