const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `What to Play?\n\nExample: ${usedPrefix + command} Over The Horizon`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'No Content Found ._.'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nTrying Another Server..'}`)
    }
  }
  if (yt === false) throw 'All Server Failed :/'
  if (yt2 === false) throw 'All Server Failed :/'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
*Title:* ${title}
*Audio File Size:* ${filesizeF}
*Video File Size:* ${yt2.filesizeF}
*Server y2mate:* ${usedServer}
*Link Video:* ${vid.url}
`.trim(), watermark, '♫ Song', `.yta ${vid.url}`, '📹 Video', `.ytmp4 ${vid.url}`)
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(p|play|putar)$/i

handler.exp = 25

module.exports = handler