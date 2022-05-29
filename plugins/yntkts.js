let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/STK-20220404-WA0363.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*YNTKTS*', 'status@broadcast')
}

handler.customPrefix = /^(yntkts|Ndak Tau|Gak Tau)$/i
handler.command = new RegExp

module.exports = handler
