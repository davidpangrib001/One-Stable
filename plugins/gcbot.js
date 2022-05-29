// Tambahin Link Kalian Sendiri
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
━━━━━━━━━━━━━━━
_*Grup Official*_
━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━ꕥ
┃ *_Grup Utama_*  : https://chat.whatsapp.com/GfwblXDHAqF4iA27wk8Gf4 => Ramein
┃ *_Grup Kedua_*  : https://chat.whatsapp.com/EheAWPrQMhV25xW0N7l7WD
┃ *_Grup Ketiga_* : https://chat.whatsapp.com/GzDQlgoUamS5Ok4EOcYRRB
┃ *_Grup Keempat_* : https://chat.whatsapp.com/ESeBcdKcHFm7BnyNiSZPvi
┃ *_Grup Kelima_* : https://chat.whatsapp.com/HhHDKEpxtyC8B1cj3KGhlS
┗━━━━━━━━━━━━━ꕥ
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'One Groups')).buffer(), ext, 'One', 'SIAP BANG🗿', 'Iya', 'Owner', '.owner', m)

}
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler