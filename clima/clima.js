const axios = require('axios');
const key = '995a553f0d3ce560be9ed47a79166e30';
const units = 'metric';


const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=${units}&appid=${key}`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}