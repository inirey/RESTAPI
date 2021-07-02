const fs = require('fs');
__path = process.cwd()
const Searchnabi = (nabi) => {
   return new Promise( async (resolve, reject) => {
       const scraper = JSON.parse(fs.readFileSync(__path +`/data/kisahNabi/${nabi}.json`))
       console.log(scraper)
       const result = {
         name: scraper.name,
         kelahiran: scraper.thn_kelahiran +' sebelum massehi',
         wafat_usia: scraper.usia +' tahun',
         singgah: scraper.tmp,
         thumb: scraper.img_url,
         kisah: scraper.description
       }
       resolve(result)
   }).catch((err) => {resolve(err) })
}

module.exports = Searchnabi
