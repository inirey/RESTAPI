const bent = require('bent')
const baseURI = 'https://server-api-rey.herokuapp.com'

module.exports.blackpink = function blackpink(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/blackpink?text=' + encodeURIComponent(text1) + '&apikey=apirey')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sky = function sky(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/sky?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.toxic = function toxic(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/toxic?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.thunder = function thunder(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/thunder?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.horror = function realcloud(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/horror?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.halloween = function halloween(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/halloween?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.harrypotter = function harrypotter(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/harrypotter?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.holograpich3d = function holograpich3d(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/hologrspich-3d?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.metaldark = function metaldark(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/metal-dark?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.matrix = function matrix(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/matrix?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.minion = function minion(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/minion?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.blood = function blood(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/blood?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.firework = function firework(text11, text12) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/skeleton?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.wicker = function wicker(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/wicker?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.luxury = function luxury(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/luxury?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.gradient = function gradient(text11, text12) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/gradient?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.neonlight = function neonlight(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/neonlight?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.neonnew = function neonnew(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/neonnew?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.christmas = function christmas(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/christmas?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.dropwater = function dropwater(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/dropwater?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.xmas = function xmas(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/xmas?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.lava = function lava(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/lava?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.gloxycarbon = function gloxycarbon(text11, text12) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/gloxy-carbon?text1=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.deluxecarbon = function deluxecarbon(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/deluxe-carbon?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.glue = function glue(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/glue?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.joker = function joker(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/joker?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sandsummer = function sandsummer(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/sandsummer?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sandengraved = function sandengraved(text11, text12) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/gloxy-carbon?text1=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.deluxesilver = function deluxecsilver(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/deluxe-siverl?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.gloxyblue = function gloxyblue(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/gloxy-blue?text=' + encodeURIComponent(text1) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

///////////////////////// 2 TEXT //////////////////////////////

module.exports.pornhub = function pornhub(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/pornhub?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.vintage = function vintage(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/vintage?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.avengers = function avengers(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/avengers?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.marvel = function marvel(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/marvel?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.ninja = function ninja(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/ninja?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.wolf = function wolf(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/wolf?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.girlgraffiti = function girlgraffiti(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/girl-grafiti?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.wolf2 = function wolf2(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/wolf2?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.marvel2 = function marvel2(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/marvel2?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.space3d = function space3d(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/space3d?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.stone = function stone(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/ston?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.lion = function lion(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/lion?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.steel = function steel(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/steel?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.grafiti = function grafiti(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/grafiti?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=404Api')
		.then(resolve)
		.catch(reject)
	})
}
