let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, command, text }) => {
let img = './src/Dark.jpg'
let user = global.db.data.users[m.sender]
conn.sendButton(m.chat, `Halo ${conn.getName(m.sender)}\n\nJadi bot adalah salah satu fitur jadi bot dalam sementara waktu. Bagi Kamu Yang Belum Tau Cara Buat Bot Bisa Memakai Cara Ini, Dengan Cara:\n1. Buka WhatsApp\n2. Ketuk Titik 3 Di Pojok Kanan Atas Dan Pilih Perangkat Tertaut\n3. Ketuk Tombol Hijau Perangkat Tertaut ( Jangan Bergabung Dengan Beta Multi Perangkat )\n4. Scan QR Untuk Menjadi Bot Sementara.\nSudah Tinggal Ketik *#menu* Bot Kamu Sudah Siap.. Proses Memerlukan Niat, 2 HP, Dan Jaringan Yang Kuat\n\nBagi Kamu Yang Udah Sessionnya Tinggal Ubah Pesan Kamu Jadi .getbot, Contoh :\n.getbot eyjjBGlnxxxxx`, '_*One Botz*_', 'Dapatkan QR Code', '#getbot', { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()} ${conn.getName(m.sender)}`, itemCount: 999, thumbnail: fs.readFileSync('./src/Dark.jpg')
}}})
}
handler.help = ['jadibot']
handler.tags = ['jadibot']

handler.command = /^jadibot$/i
module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari🌖"
    if (time >= 4) {
        res = "Selamat pagi🌝"
    }
    if (time > 10) {
        res = "Selamat siang🌞"
    }
    if (time >= 15) {
        res = "Selamat sore🌕"
    }
    if (time >= 18) {
        res = "Selamat malam🌚"
    }
    return res
}