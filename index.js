let gifs = require('./gifs')

module.exports = {
    gifu(option, res = gifs[option]) {
        return res && res.length ? res[Math.floor(Math.random() * res.length)] : 'Invalid Request'
    }
}
