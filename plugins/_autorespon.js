// anu anunya ada di sini
let fs = require('fs')
let fetch = require('node-fetch')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? '𝖮𝗇𝖾 𝖡𝗈𝗍 𝗍𝗂𝖽𝖺𝗄 𝖺𝗄𝗍𝗂𝖿' : banned ? 'kamu dibanned' : 'Ada Apa ya tag-tag saia ?\nApakah Ada Bansos ?',
                '𝗢𝗻𝗲 𝗕𝗼𝘁 𝗯𝘆 𝗗𝗮𝘃𝗶𝗱',
                isBanned ? 'Unban' : banned ? 'Pemilik Bot' : 'Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.?',
                m.isGroup ? 'Ban' : isBanned ? 'Unban' : 'Donasi',
                m.isGroup ? '.ban' : isBanned ? '.unban' : '.donasi', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Minggu* :      *Rp. 5.000*
╠➥ *2 Minggu* : *Rp. 10.000*
╠➥ *3 Minggu* :   *Rp. 15.000*
╠➥ *1 Bulan* :        *Rp. 20.000*
║
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ Pulsa
║- 082128475388 ( Pulsa Telkomsel )
╠═〘 One Botz 〙 ═`.trim(), '𝗢𝗻𝗲 𝗕𝗼𝘁', 'Pemilik\nBot', '#owner', 'Ga jadi deh..', 'gajadi', m)
}

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        this.sendSticker(m.chat, fs.readFileSync('./src/salam.webp'), m, {sendEphemeral: true})
    }

    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database Tanggal ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status
if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`⏲️ 𝖱𝗎𝗇𝗍𝗂𝗆𝖾: ${uptime} | 🛰 𝖬𝗈𝖽𝖾: ${global.opts['self'] ? '𝖯𝗋𝗂𝗏𝖺𝗍𝖾' : setting.groupOnly ? 'Hanya Grup' : '𝖯𝗎𝖻𝗅𝗂𝖼'} | 𝖮𝗇𝖾 𝖡𝗈𝗍 𝖻𝗒 𝖣𝖺𝗏𝗂𝖽`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
