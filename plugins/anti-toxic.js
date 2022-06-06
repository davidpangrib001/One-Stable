let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/media_audio_meme-de-creditos-finales.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Jangan Toxic Bang..*', 'status@broadcast')
}
handler.customPrefix = /anjing|memek|kontol|ngentod|goblok|goblog/i
handler.command = new RegExp

module.exports = handler
