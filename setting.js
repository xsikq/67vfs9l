const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// Apikey Website Api
global.ApiKey = 'coderevolution' //JIKA INGIN MENDAPATKAN KOMISI DAFTAR DI HTTPS://AMPIBISMM.MY.ID UNTUK MENDAPATKAN APIKEY!

global.smm = {
  nomor : '6283102650464',
  atasnama : 'Ahmad Nur Fadhil'
}

// Other
global.owner = ['6283834027073','6285173443334','6285172227332','17807777733','17807777788','687998787']
global.ownerutama = ['687998787']
global.premium = ['6283834027073']
global.profilebio = ['687998787'] // ini ganti nomor lu ntar bisa nampilin pp lu
global.sponsor = 'no sponsors in:('
global.packname = 'chzklf'
global.footer = 'chzklf;x'
global.author = 'by xie666'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.act = {
		wait: 'please wait a moment, processing data...',
		den:'*Sorry You Not Register Yet...*\n\n*.reg* <name>\n*To Regis/Login*',
		proc:'Loading Please Wait..',
		error:'Error :(',
		success:'Success bwang',
		repiar:'This Feature Maintace!',
		botadm:'aku bukan atmin:(',
		admin:'Only Admin',
		done:'Done!',
		gc:'Only Group Allowed',
		owner:'Only Owner Allowed'
}

// global.thumb = fs.readFileSync('./lib/crizzy.jpg')
global.thumb = { url: "https://www.xsikq.my.id/storage/omaga.jpg"}
global.crizzy = { url: "https://www.xsikq.my.id/storage/omaga.jpg"}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})