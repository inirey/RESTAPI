const base64  = require('base-64')
const base32  = require('base32')
const needle = require('needle');

const Base = (type, text) => new Promise((resolve, reject) => {
    switch (type) {
        case 'b64enc':
            const data1 = base64.encode(text)
            resolve({
            type: 'base64',
            string: text,
            encode: data1
            })
            break
        case 'b64dec':
            const data2 = base64.decode(text)
            resolve({
            type: 'base64',
            enc: text,
            string: data2
            })
            break
        case 'b32enc':
            const data3 = base32.encode(text)
            resolve({
            type: 'base32',
            string: text,
            encode: data3
            })
            break
        case 'b32dec':
            const data4 = base32.decode(text)
            resolve({
            type: 'base32',
            enc: text,
            string: data4
            })
            break
        default:
            break
    }
})

const WPUser = (link) => new Promise((resolve, reject) => {
    const name = []
    const description =[]
    const link = []
    const user = []
    const url = link+'/wp-json/wp/v2/users/'
    needle(url, (err, resp, body) => {
        if (!err) {
            for (let i = 0; i < body.length; i++) {
                name.push(body[i]['name']),
                description.push(body[i]['description']),
                link.push(body[i]['link']),
                user.push(body[i]['slug'])
            }
            resolve({
                code: resp.statusCode,
                message: 'success',
                url: site,
                name: name,
                deskripsi: description,
                link: link,
                user: user
            })
        }
    })
})

WPUser(process.argv[2])
.then(data => console.log(data))
.catch(err => console.log(err))


module.exports = { Base, WPUser }