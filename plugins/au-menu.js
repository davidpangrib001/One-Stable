// hehe
let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./audio/adaapa.m4a')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Bot Siap Membantu*', 'status@broadcast')
}

handler.customPrefix = /^(#menu|.menu|!menu|/menu)$/i
handler.command = new RegExp

module.exports = handler
