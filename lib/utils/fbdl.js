const axios = require('axios');
const cheerio = require('cheerio');

async function fbDownloader(Link) {
	const hasil = []
	const Form = {
		url: Link,
		submit: ""
	        }
		await axios(`https://www.getfvid.com/downloader/`, {
			method: "POST",
		        data:  new URLSearchParams(Object.entries(Form)),
		        headers: {
			"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
			"accept-language": "en-US,en;q=0.9,id;q=0.8",
			"cache-control": "max-age=0",
			"content-type": "application/x-www-form-urlencoded",
			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
			"cookie": "PHPSESSID=do1vgsj030f5vng7vjfu8efphv; _ga=GA1.2.2019332664.1630077537; _gid=GA1.2.1464712032.1630077537; _gat_gtag_UA_179310520_1=1; __cf_bm=3cd9d4e05a80a607f3bc7a141df7eff86e224935-1630077537-1800-AV9jiXVnI52McdWdoaeYmcYnpnwM1AyY4+gnCk5HP+uj8HJbcd0Ieys9NlE7Md9TwfVAWsANKf5s0ZcFZHl+WecR5UNfYqBcCdoqxAY6v23c457NKaoHSNByd5jtAMO8tg==; __gads=ID=6859ed445b2b7e88-2214f2911ecb00cc:T=1630077537:RT=1630077537:S=ALNI_MYD3y7YHQK-GbhSAspaSnEzdUp7rA"
		},
                referrerPolicy: "strict-origin-when-cross-origin"
                }).then(async res => {
		const $ = cheerio.load(res.data)
		let url = $('#DOWNLOAD').find('a').attr('href');
		await axios(Link, {
			method: "GET",
			data: null,
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"cache-control": "max-age=0",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				"cookie": "PHPSESSID=do1vgsj030f5vng7vjfu8efphv; _ga=GA1.2.2019332664.1630077537; _gid=GA1.2.1464712032.1630077537; _gat_gtag_UA_179310520_1=1; __cf_bm=3cd9d4e05a80a607f3bc7a141df7eff86e224935-1630077537-1800-AV9jiXVnI52McdWdoaeYmcYnpnwM1AyY4+gnCk5HP+uj8HJbcd0Ieys9NlE7Md9TwfVAWsANKf5s0ZcFZHl+WecR5UNfYqBcCdoqxAY6v23c457NKaoHSNByd5jtAMO8tg==; __gads=ID=6859ed445b2b7e88-2214f2911ecb00cc:T=1630077537:RT=1630077537:S=ALNI_MYD3y7YHQK-GbhSAspaSnEzdUp7rA"
		        },
			referrerPolicy: "strict-origin-when-cross-origin"
		}).then(respon => {
			const ch = cheerio.load(res.data)
				const result = {
					status: res.status,
					result: {
						Hd: ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href'),
						Normal: ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href'),
						Audio: ch('#results-list > div:nth-child(4)').find(' div.download > a').attr('href')
					}
				}
				resolve(result)
			}).catch(reject)
		}).catch(reject)
	})
}
module.exports = { fbDownloader }
