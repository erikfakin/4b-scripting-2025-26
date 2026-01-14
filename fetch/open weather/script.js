// Weather Codes
// Code	Description
// 0	Clear sky
// 1, 2, 3	Mainly clear, partly cloudy, and overcast
// 45, 48	Fog and depositing rime fog
// 51, 53, 55	Drizzle: Light, moderate, and dense intensity
// 56, 57	Freezing Drizzle: Light and dense intensity
// 61, 63, 65	Rain: Slight, moderate and heavy intensity
// 66, 67	Freezing Rain: Light and heavy intensity
// 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
// 77	Snow grains
// 80, 81, 82	Rain showers: Slight, moderate, and violent
// 85, 86	Snow showers slight and heavy
// 95 *	Thunderstorm: Slight or moderate
// 96, 99 *	Thunderstorm with slight and heavy hail
const weatherCodes = {
  0: "Cielo sereno",

  1: "Prevalentemente sereno",
  2: "Parzialmente nuvoloso",
  3: "Coperto",

  45: "Nebbia",
  48: "Nebbia con brina depositata",

  51: "Pioviggine: intensità debole",
  53: "Pioviggine: intensità moderata",
  55: "Pioviggine: intensità forte",

  56: "Pioviggine gelata: intensità debole",
  57: "Pioviggine gelata: intensità forte",

  61: "Pioggia: intensità debole",
  63: "Pioggia: intensità moderata",
  65: "Pioggia: intensità forte",

  66: "Pioggia gelata: intensità debole",
  67: "Pioggia gelata: intensità forte",

  71: "Nevicata: intensità debole",
  73: "Nevicata: intensità moderata",
  75: "Nevicata: intensità forte",

  77: "Granelli di neve",

  80: "Rovesci di pioggia: deboli",
  81: "Rovesci di pioggia: moderati",
  82: "Rovesci di pioggia: violenti",

  85: "Rovesci di neve: deboli",
  86: "Rovesci di neve: forti",

  95: "Temporale: debole o moderato",
  96: "Temporale con grandine debole",
  99: "Temporale con grandine forte"
};


// 1. Salvo e seleziono le celle 
// dove voglio scrivere le condizioni meteo

const temperatura = document.getElementById('temperatura');
const data = document.getElementById('data');
const condizioni = document.getElementById('condizioni');
const velocitaVento = document.getElementById('velocita_vento');
const direzioneVento = document.getElementById('direzione_vento');

async function getWeather(){
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=45.41&longitude=13.6619&current=temperature_2m,precipitation,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m,is_day');
    const result = await response.json();
    const temperaturaAttuale = result.current.temperature_2m;
    const dataAttuale = result.current.time;
    const codnizioniAttuali = weatherCodes[result.current.weather_code];
    const velocitaVentoAttuale = result.current.wind_speed_10m;
    const direzioneVentoAttuale = result.current.wind_direction_10m;

    temperatura.innerText = temperaturaAttuale + '°C';
    data.innerText = new Date(dataAttuale).toLocaleString('it-IT');
    condizioni.innerText = codnizioniAttuali;
    velocitaVento.innerText = velocitaVentoAttuale + 'km/h';
    direzioneVento.innerText = direzioneVentoAttuale + '°';
    console.log(result);
}

getWeather();