const TikTokScraper = require('tiktok-scraper');
const needle = require('needle');
const fbdl = require('fbdl-core');
const axios = require('axios');


async function TiktokData(url) {
	const videoMeta = await TikTokScraper.getVideoMeta(url);
    return ({
		status: true,
		code: 200,
		creator: "@only_fxc7",
		judul: videoMeta.collector[0].text,
		video_URL: {
			vid_wm: videoMeta.collector[0].videoUrl,
			vid_nowm: videoMeta.collector[0].videoUrlNoWaterMark
		}
	});
}

const Tiktok = (url) => new Promise((resolve, reject) => {
    if (url === 'undefined') { reject('masukan text nya kak.') }
    try {
		TiktokData(url).then(data => {
			resolve(data);
		});
    } catch (error) {
        reject({
			code:400,
			message: error
		});
    }
});

const FB = (url) => new Promise((resolve, reject) => {
	if(!url || url == undefined) return reject("Masukkan URL nya");
	fbdl.getInfo(url)
	.then(res => {
		resolve({
			title: res.title,
			deskripsi: res.description,
			thumbnail: res.thumbnail,
			durasi: res.duration,
			hd: res.streamURL,
			sd: res.rawVideo
		});
	})
	.catch(err => reject(err));
})

async function Joox(query) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(new Date() / 1000)
    axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
      .then(({
        data
      }) => {
        let result = []
        let hasil = []
        let promoses = []
        let ids = []
        data.itemlist.forEach(result => {
          ids.push(result.songid)
        });
        for (let i = 0; i < data.itemlist.length; i++) {
          const scrap = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
          promoses.push(
            axios.get(scrap, {
              headers: {
                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
              }
            })
            .then(({
              data
            }) => {
              const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
              hasil.push({
                lagu: res.msong,
                album: res.malbum,
                penyanyi: res.msinger,
                publish: res.public_time,
                img: res.imgSrc,
                mp3: res.mp3Url
              })

              axios.get('http://api.joox.com/web-fcgi-bin/web_lyric?musicid=' + ids[i] + '&lang=id&country=id&_=' + time)
                .then(({
                  data
                }) => {
                  const lirik = JSON.parse(data.replace('MusicJsonCallback(', '').replace('\n)', '')).lyric
                  const buff = new Buffer.from(lirik, 'base64')
                  const ash = buff.toString('utf-8')
                  result.push({
                    result: ash
                  })
                  Promise.all(promoses).then(() => resolve({
                    status: true,
                    code: 200,
                    creator: '@only_fxc7',
                    result: hasil[0],
                    lirik: result[0]
                  }))
                })
                .catch(reject)
            })
            .catch(reject)
          )
        }
      })
      .catch(reject)
  })
}


module.exports = { Joox, FB, Tiktok }
