let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(flu + 'Catatan Perubahan')).buffer(), `
Catatan Perubahan :
`.trim(), 'Senin, 4 April 2022 : V. 4.05\n◇ Penambahan Fitur : Catatan Perubahan\n◇ Update Tampilan\n\n6 Mei 2022 : V. 4.17\n• Fix TikTok Downloader', 'Owner', '.owner')
handler.help = ['note']
handler.tags = ['info']
handler.command = /^(catatanperubahan|perubahan|notes)$/i

module.exports = handler