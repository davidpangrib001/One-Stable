let moment = require('moment-timezone')
let fetch = require ('node-fetch')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let name = conn.user.name
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await conn.send3ButtonLoc(m.chat, await(await fetch(fli + 'One Botz')).buffer(), `
Hai, ${ucapan()}

${user.banned ? 'kamu dibanned' : `Hai ${conn.getName(m.sender)}, Saya One Botz Salah Satu Bot WhatsApp. Bot Ini Membantu Kamu Membuat Stiker, Mendownload Sesuatu, Dan Game Yang Menyenangkan. Harap Jangan Spam Dan Telepon Bot Ini. Jika Melanggar Kamu Akan Di Block & Di Banned.\n_Silahkan Pilih Salah Satu Tombol_`}
`.trim(), watermark, user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '!owner' : '.menu', 'Panduan penggunaan', '.tutorbot', 'Verify', '.daftar ${conn.getName(m.sender)}.16', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi🌅"
    }
    if (time > 10) {
        res = "Selamat siang🏞️"
    }
    if (time >= 15) {
        res = "Selamat sore🌇"
    }
    if (time >= 18) {
        res = "Selamat malam🌌"
    }
    return res
}
