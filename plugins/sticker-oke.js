let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/Oke.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*OKE*', 'status@broadcast')
}

handler.customPrefix = /^(iya|ok|oke|okey)$/i
handler.command = new RegExp

module.exports = handler
