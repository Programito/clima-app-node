const axios = require('axios');
const key = 'AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ';


const getLugarLatLng = async(direccion) => {

    let encondeURL = encodeURI(direccion);


    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondeURL}&key=${key}`);


    // .then(resp => {

    //         let location = resp.data.results[0];
    //         let coors = location.geometry.location;
    //         console.log('Dirección:', location.formatted_address);
    //         console.log('Latitud:', coors.lat);
    //         console.log('Longitud:', coors.lng);
    //         //console.log(JSON.stringify(resp.data, undefined, 2));
    //         //console.log(resp.status);
    //     })
    //     .catch(e => console.log('ERROR!!', e));



    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    // console.log('Dirección:', location.formatted_address);
    // console.log('Latitud:', coors.lat);
    // console.log('Longitud:', coors.lng);

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        long: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}