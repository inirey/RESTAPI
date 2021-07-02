const axios = require("axios");
const request = require('request');
const dotenv = require('dotenv').config()
const APIKey = process.env.APIkey
const units = 'metric';
const Genius = require("genius-lyrics")
const Client = new Genius.Client(process.env.GENIUS_KEY)

async function cari(musik) {
        const searches = await Client.songs.search(musik).catch(err => {return err});

        const firstSong = searches[0];

        const lyrics = await firstSong.lyrics()+"\n";
        return lyrics;
}

const Lirik = (musik) => new Promise((resolve, reject) => {
    if (!musik) { reject('Lirik Lagu Tidak Di Temukan.') }
    cari(musik)
    .then(data => {
		resolve({
			data
		})
	})
});

const Cuaca = (kota) => {
  return new Promise((resolve, reject) => {
	var url = `http://api.openweathermap.org/data/2.5/weather?q=${kota}&units=${units}&appid=${APIKey}`;
	request(url, async function (err, response, body) {
		if (err) {
			reject(err);
		} else {
			const cuaca = JSON.parse(body);
				result = {
				  status: true,
				  code: 200,
				  creator: "@only_fxc7",
					Nama: cuaca.name +','+ cuaca.sys.country,
					Longitude : cuaca.coord.lon,
					Latitude: cuaca.coord.lat,
					Suhu: cuaca.main.temp+" C",
					Angin: cuaca.wind.speed+" m/s",
					Kelembaban: cuaca.main.humidity+"%",
					Cuaca: cuaca.weather[0].main,
					Keterangan: cuaca.weather[0].description,
					Udara: cuaca.main.pressure+" HPa"
				}
			resolve(result);
		}
	});
  })
}


module.exports = { Cuaca, Lirik }