let {
	WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const figlet = require('figlet')
const fetch = require('node-fetch')
const fromData = require('form-data')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const base64Img = require('base64-img')
const imageToBase64 = require('image-to-base64')
const imgbb = require('imgbb-uploader')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const os = require('os')
const { removeBackgroundFromImageFile } = require('remove.bg')
const ytsd = require('ytsr')
const yts = require( 'yt-search')

// Baileys
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("../baileys/rpgfunction")
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("../baileys/lvlfunction")

// Database RPG
let event = JSON.parse(fs.readFileSync('./baileys/data/event.json'))
let _RPG = JSON.parse(fs.readFileSync('./baileys/rpg/inventori.json'))
let _level = JSON.parse(fs.readFileSync('./baileys/rpg/leveluser.json'))
let _petualang = JSON.parse(fs.readFileSync('./baileys/rpg/inventori.json'))
let _healt = JSON.parse(fs.readFileSync('./baileys/rpg/healt.json'))

// Lib
let { y2mateA, y2mateV } = require('../lib/y2mate')
let { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('../lib/ytdl')
let { webp2gifFile, igDownloader, TiktokDownloader } = require("../lib/gif.js")
let { mediafireDl } = require('../lib/mediafire.js')
let { pinterest } = require('../lib/pinterest')
let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance} = require("../lib/limit")
let { fetchJson, kyun, fetchText } = require('../lib/fetcher')
let { color, bgcolor } = require('../lib/color')
let { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('../lib/functions')

// Sticker
const Exif = require('../lib/exif')
const exif = new Exif()

// Database
let _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let _antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
let _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let mess = JSON.parse(fs.readFileSync('./message/mess.json'))
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let setting = JSON.parse(fs.readFileSync('./config.json'))
let _truth = JSON.parse(fs.readFileSync('./database/truth.json'))
let _dare = JSON.parse(fs.readFileSync('./database/dare.json'))

// Media Image
let thumb = fs.readFileSync('./media/logo.jpg')
let qris = fs.readFileSync('./media/qris.jpg')

// Settings
healthCounts = 100
publik = true
let ownerNumber = [`${ownerNumberr}@s.whatsapp.net`]
ownerNumberr = setting.ownerNumber
ownerName = setting.ownerName
botName = setting.botName
jayokeys = setting.apikeys
lolkey = 'RIFQIBOTZ'
faketeks = setting.faketeks
limitCount = setting.limitCount
gcounti = setting.gcounti

module.exports = faza = async (faza, msg, _welkom) => {
	try {
        if (!msg.hasNewMessage) return
        msg = msg.messages.all()[0]
		if (!msg.message) return
		if (msg.key && msg.key.remoteJid == 'status@broadcast') return
		global.blocked
        msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
        let content = JSON.stringify(msg.message)
		let from = msg.key.remoteJid
		let { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		let { menu, infobot, tos } = require('../message/help')
		let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        let d = new Date
		let locale = 'id'
		let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
	    const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
		const week = d.toLocaleDateString(locale, { weekday: 'long' })
		const calender = d.toLocaleDateString(locale, {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	    })
        let type = Object.keys(msg.message)[0]        
        let cmd = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        let prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+,;]/gi) : '#'          	
        body = (type === 'conversation' && msg.message.conversation.startsWith(prefix)) ? msg.message.conversation : (type == 'imageMessage') && msg.message[type].caption.startsWith(prefix) ? msg.message[type].caption : (type == 'videoMessage') && msg.message[type].caption.startsWith(prefix) ? msg.message[type].caption : (type == 'extendedTextMessage') && msg.message[type].text.startsWith(prefix) ? msg.message[type].text : (type == 'listResponseMessage') && msg.message[type].singleSelectReply.selectedRowId ? msg.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && msg.message[type].selectedButtonId ? msg.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
		let command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		let args = body.trim().split(/ +/).slice(1)
		let arg = body.substring(body.indexOf(' ') + 1)
		let isCmd = body.startsWith(prefix)
		let q = args.join(' ')
		let Verived = "0@s.whatsapp.net"
		let txt = msg.message.conversation
		let botNumber = faza.user.jid
		let isGroup = from.endsWith('@g.us')
		let sender = isGroup ? msg.participant : msg.key.remoteJid
		let totalchat = await faza.chats.all()
		let groupMetadata = isGroup ? await faza.groupMetadata(from) : ''
		let groupName = isGroup ? groupMetadata.subject : ''
		let groupId = isGroup ? groupMetadata.jid : ''
		let groupMembers = isGroup ? groupMetadata.participants : ''
		let groupDesc = isGroup ? groupMetadata.desc : ''
		let groupOwner = isGroup ? groupMetadata.owner : ''
		let groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		let isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		let isGroupAdmins = groupAdmins.includes(sender) || false
		let conts = msg.key.fromMe ? faza.user.jid : faza.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        let pushname = msg.key.fromMe ? faza.user.name : conts.notify || conts.vname || conts.name || '-'
        timestamp = speed();
        latensi = speed() - timestamp
        
        let isPetualang = checkPetualangUser(sender)
        let isPremium = premium.includes(sender)
        let isEventon = isGroup ? event.includes(from) : false
		let isAntiLink = isGroup ? _antilink.includes(from) : false
		let isAntiWaMe = isGroup ? _antiwame.includes(from) : false
		let isWelkom = isGroup ? _welkom.includes(from) : false
		let isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		let isOwner = ownerNumber.includes(sender)
		let isUser = pendaftar.includes(sender)
		let isMybot = isOwner || msg.key.fromMe
        
        var premi = 'No Premium User'
			if (isPremium) {
				premi = 'Premiun User'
			} 
			if (isOwner) {
				premi = 'This Is Owner'
			}
        var elit = 'Petualang Biasa'
			if (isPremium) {
				elit = 'Petualang Pro'
			}
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
		let isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        let reply = (teks) => {
            faza.sendMessage(from, teks, text, {quoted: msg})
        }
        let textImg = (teks) => {
            return faza.sendMessage(from, teks, text, {quoted: msg, thumbnail: fs.readFileSync('./media/logo.jpg')})
        }
        let sendMess = (hehe, teks) => {
            faza.sendMessage(hehe, teks, text)
        }
        let mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? faza.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : faza.sendMessage(from, teks.trim(), extendedText, { quoted: msg, contextInfo: { "mentionedJid": memberr } })
        }
        let costum = (pesan, tipe, target, target2) => {
			faza.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		faza.chatRead(from, "read")
		
		let runtime = function (seconds) {
            seconds = Number(seconds);
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor((seconds % (3600 * 24)) / 3600);
            var m = Math.floor((seconds % 3600) / 60);
            var s = Math.floor(seconds % 60);
            var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        };
        var ase = new Date();
           var jamss = ase.getHours();
              switch(jamss){
                case 0: jamss = "Midnight🌚"; break;
                case 1: jamss = "Midnight🌚"; break;
                case 2: jamss = "Midnight🌚"; break;
                case 3: jamss = "Dawn🌄"; break;
                case 4: jamss = "Dawn🌄"; break;
                case 5: jamss = "Morning🌄"; break;
                case 6: jamss = "Morning🌄"; break;
                case 7: jamss = "Morning🌄"; break;
                case 8: jamss = "Morning🌄"; break;
                case 9: jamss = "Morning🌄"; break;
                case 10: jamss = "Morning🌄"; break;
                case 11: jamss = "Afternoon☀️"; break;
                case 12: jamss = "Afternoon☀️"; break;
                case 13: jamss = "Afternoon☀️"; break;
                case 14: jamss = "Dusk🌇"; break;
                case 15: jamss = "Dusk🌇"; break;
                case 16: jamss = "Dusk🌇"; break;
                case 17: jamss = "Dusk🌇"; break;
                case 18: jamss = "Dusk🌇"; break;
                case 19: jamss = "Evening🌃"; break;
                case 20: jamss = "Evening🌃"; break;
                case 21: jamss = "Evening🌃"; break;
                case 22: jamss = "Evening🌃"; break;
                case 23: jamss = "Evening🌃"; break;
            }
            var tampilUcapan = "" + jamss;
        
// Buttons
        let sendButton = async (from, context, fortext, but, msg) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            faza.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: fakevo
            })
        }
        let sendButMessage = (id, text1, desc1, but = [], options = {}) => {
            let buttonMessage = {
                contentText: text1,
                footerText: desc1,
                buttons: but,
                headerType: 1
            }
            faza.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
        }
        let sendButImage = async (from, context, fortext, img, but, msg) => {
            jadinya = await faza.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            faza.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: fakevo,
            })
        }
        let sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
            kma = vid1
            mhan = await faza.prepareMessage(from, kma, video)
            let buttonMessages = {
                videoMessage: mhan.message.videoMessage,
                contentText: text1,
                footerText: desc1,
                buttons: but,
                headerType: 5
            }
            faza.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        let sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
            kma = gam1
            mhan = await faza.prepareMessage(from, kma, location)
            let buttonMessages = { 
                locationMessage: { jpegThumbnail: gam1 }, 
                contentText: text1, 
                footerText: desc1, 
                buttons: but, 
                headerType: 6 
            }
            faza.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
            }

// Fake Reply
        let fakevo = {
            key: {
               fromMe: false,
               participant: '0@s.whatsapp.net',
               remoteJid: 'status@broadcast'
            },
            message: {
            imageMessage: {
               mimetype: 'image/jpeg',
               caption: 'FazaBot',
               jpegThumbnail: fs.readFileSync('./media/logo.jpg'),
               viewOnce: true
               }
            }
        }
        let fakestatus = (teks) => {
            faza.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/logo.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        let fakegroup = (teks) => {
            faza.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/logo.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        let ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `Hai kak ${pushname}`, 
                            orderTitle: `${faketeks}`,
                            thumbnail: thumb, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
        
// Functions
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					faza.sendMessage(to, media, sticker, {quoted: msg})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        faza.sendMessage(from, media, MessageType.sticker,{quoted:msg})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
        const sendFileFromUrl = async(link, type, options) => {
            hasil = await getBuffer(link)
            faza.sendMessage(from, hasil, type, options).catch(e => {
            fetch(link).then((hasil) => {
            faza.sendMessage(from, hasil, type, options).catch(e => {
            faza.sendMessage(from, { url : link }, type, options).catch(e => {
            reply
            console.log(e)
            })
            })
            })
            })
        }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{	
        if(mids.length > 0){  
        text = normalizeMention(to, text, mids)	
        }  
        const fn = Date.now() / 10000;  
        const filename = fn.toString() 	
        let mime = ""  
        var download = function (uri, filename, callback) { 
        request.head(uri, function (err, res, body) {			
        mime = res.headers['content-type']			
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback); 
        }); 
        };  
        download(url, filename, async function () {  
        console.log('Success');  
        let media = fs.readFileSync(filename)  
        let type = mime.split("/")[0]+"Message"  
        if(mime === "image/gif"){			
        type = MessageType.video			
        mime = Mimetype.gif  
        }  
        if(mime.split("/")[0] === "audio"){			
        mime = Mimetype.mp4Audio  
        }  
        faza.sendMessage(to, media, type, { quoted: msg, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})  
        fs.unlinkSync(filename)  
        });   
        }
            
            // Function Healt
            const getHeal = (sender) => {
        	let position = false
                Object.keys(_healt).forEach ((i) => {
              	    if (_healt[position].id === sender) {
              	    position = i
                    }
                })
                if (position !== false) {
                return _healt[position].healt
                }
            }

            const healtAdd = (sender) => {
            let position = false
                Object.keys(_healt).forEach((i) => {
                    if (_healt[i].id == sender) {
                    position = i
                    }
                })
                if (position !== false) {
                    _healt[position].healt += 10
                    fs.writeFileSync('./baileys/rpg/healt.json', JSON.stringify(_healt))
                }
            }
            
            // Function RPG
            const checkHealt = (sender) => {
          	let found = false
                    for (let lmt of _healt) {
                        if (lmt.id === sender) {
                           const healthCounts = lmt.healt
                           if (healthCounts <= 0) return faza.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: msg})
                           if (!isPetualang) return reply(mess.only.player)
                           reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = (`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}💰
 • Emas : ${getEmas(sender)}🪙
 • Besi : ${getBesi(sender)}⛓️
 • Berlian : ${getDm(sender)}💎
 • Ikan : ${getFish(sender)}🎣

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 • joinrpg
 • quest ( otw )
 • mining
 • mancing
 • adventure
 • myinventori
 • topleaderboard
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 • sellikan
 • sellbesi
 • sellemas
 • selldiamond`)
            but = [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
            sendButMessage(from, pp, 'Rpg Game', but)
            found = true
            }
                  }
                  if (found === false) {
                     let obj = { id: sender, healt: 1 }
                     _healt.push(obj)
                     fs.writeFileSync('./baileys/rpg/healt.json', JSON.stringify(_healt))
                     faza.sendMessage(from, `${healthCounts}`, text, { quoted : msg})
                  }
            }
            
            // Function RPG Limited
            const isHealt = (sender) =>{ 
		         let position = false
                 for (let i of _healt) {
                 if (i.id === sender) {
                 	let healts = i.healt
                 if (healts >= healthCounts ) {
                 	  position = true
                       faza.sendMessage(from, mess.limit, text, {quoted: msg})
                       return true
                 } else {
                 	_healt
                     position = true
                     return false
                     }
                 }
            }
            if (position === false) {
           	    const obj = { id: sender, healt: 1 }
                   _healt.push(obj)
                   fs.writeFileSync('./baileys/rpg/healt.json',JSON.stringify(_healt))
            return false
            }
            }

            const bayarHealt = (sender, amount) => {
        	   let position = false
               Object.keys(_healt).forEach((i) => {
                   if (_healt[i].id === sender) {
                       position = i
                   }
            })
            if (position !== false) {
                   _healt[position].healt -= amount
                   if (_healt[position].healt >= 0) return reply('healt kmu dh penuh')
                   fs.writeFileSync('./baileys/rpg/healt.json', JSON.stringify(_healt))
                   }
            }
            
            // Function Leveling
            if (isGroup && isPetualang) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                var getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                addLevelingLevel(sender, 1)   
                var lvlup = (`╭───「 Level Up 」
│
├ • Nama : ${pushname}
├ • Rank : ${role}
├ • Status : ${elit}
├ • Xp : ${getLevelingXp(sender)}
├ • Level : ${getLevelingLevel(sender)}
│
╰───「 FazaBot 」`)
            but = [{ buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
            sendButMessage(from, lvlup, 'Level Up', but)
            }
                } catch (err) {
                    console.error(err)
                }
            }
            
            // Function Hewan
            var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
            var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎','🐺']
            var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            
            // Function Rank
            const levelRole = getLevelingLevel(sender)
            var role = 'Bronze'
   	        if (levelRole <= 3) {
   	            role = 'Copper'
   	        } else if (levelRole <= 5) {
   	            role = 'Iron'
   	        } else if (levelRole <= 7) {
   	            role = 'Silver'
   	        } else if (levelRole <= 10) {
   	            role = 'Gold'
   	        } else if (levelRole <= 12) {
   	            role = 'Platinum'
   	        } else if (levelRole <= 15) {
   	            role = 'Mithril'
   	        } else if (levelRole <= 18) {
   	            role = 'Orichalcum'
   	        } else if (levelRole <= 25) {
   	            role = 'Adamantite'
   	        }

// Antilink
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
faza.groupRemove(from, [kic]).catch((e) => { reply(mess.badmim) })
}, 0)
}

// AntiWaMe
if (budy.includes("https://wa.me/","wa.me")) {
if (!isGroup) return
if (!isAntiWaMe) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 NOMOR LINK DETECTOR 」*\nKamu mengirimkan link nomor, maaf kamu di kick dari grup :(`)
setTimeout(() => {
faza.groupRemove(from, [kic]).catch((e) => { reply(mess.badmim) })
}, 0)
}

// Antivirtex
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
faza.groupRemove(from, [sender])
}

// Auto Regist
if (isCmd && !isUser){
   pendaftar.push(sender)
   fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
}

// Colors & Media
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		let isMedia = (type === 'imageMessage' || type === 'videoMessage')
		let isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		let isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		let isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		let isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		
		// Console Log
      	if (isCmd && !isGroup) {
            addBalance(sender, randomNomor(20), balance)
			console.log(color('[ CMD ]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        }
        if (isCmd && isGroup) {
            addBalance(sender, randomNomor(20), balance)
			console.log(color('[ CMD ]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        }

switch (command) {
case 'menu':
case 'help':
menunya = menu(pushname, tampilUcapan, ownerName, botName, pendaftar, time, calender, latensi, runtime, isOwner, isPremium, sender, getBalance, balance, limitCount, limit, getLimit, prefix)
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `${prefix}rules`, buttonText: { displayText: 'Syarat & Ketentuan' }, type: 1 }
]
sendButLocation(from, menunya, `${faketeks} || ${pendaftar.length} USER ❤️`, thumb, but)
//sendButImage(from, menunya, `${faketeks} || ${pendaftar.length} USER ❤️`, thumb, but)
break

case 'groupmenu': case 'menugroup': case 'grupmenu': case 'menugrup':
gcmenu = groupmenu(prefix)
reply(gcmenu)
break
case 'downloadmenu': case 'menudownload':
dlmenu = downloadmenu(prefix)
reply(dlmenu)
break
case 'searchmenu': case 'menusearch':
srchmenu = searchmenu(prefix)
reply(srchmenu)
break
case 'toolsmenu': case 'menutools':
tools = toolsmenu(prefix)
reply(tools)
break
case 'wibumenu': case 'menuwibu': case 'waifumenu': case 'menuwaifu':
waifu = wibumenu(prefix)
reply(waifu)
break
case 'menurpg':
rpg = rpgmenu(prefix)
reply(rpg)
break
case 'funmenu': case 'menufun': case 'primbonmenu': case 'menuprimbon':
fun = funmenu(prefix)
reply(fun)
break
case 'storemenu': case 'menustore':
store = storemenu(prefix)
reply(store)
break
case 'ownermenu': case 'menuowner':
ownmenu = ownermenu(prefix)
reply(ownmenu)
break
case 'othermenu': case 'menuother':
other = othermenu(prefix)
reply(other)
break

case 'infobot': case 'snk': case 'rules':
rule = infobot(prefix)
reply(rule)
break
case 'donasi': case 'donate': case 'tos':
tos = tos(pushname, ownerNumberr, prefix)
faza.sendMessage(from, qris, image, { quoted: fakevo, caption: tos })
break

// Group Menu
case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
if ((args[0]) === 'enable') {
if (isWelkom) return reply('welcome is active')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply('Successfully activate the welcome feature️')
} else if ((args[0]) === 'disable') {
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply('Successfully disable the welcome feature️')
but = [
{ buttonId: `${prefix}welcome enable`, buttonText: { displayText: 'Active' }, type: 1 },
{ buttonId: `${prefix}welcome disable`, buttonText: { displayText: 'Non-active' }, type: 1 }
]
sendButImage(from, "Silahkan pilih untuk welcome group", `${faketeks} || ${pendaftar.length} USER ❤️`, thumb, but)
}
break
/*case 'welcomeon':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
if (isWelkom) return reply('welcome is active')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`Successfully activate the welcome feature`)
break
case 'welcomeoff':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
if (!isWelkom) return reply('welcome has been off before')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`Successfully disable the welcome feature`)
break*/
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
antilink = await getBuffer(`https://telegra.ph/file/d09d81a3861aa1e44fe41.jpg`)
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'Active' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'Non-active' }, type: 1 }
]
sendButImage(from, "Silahkan pilih untuk antilink group", `${faketeks} || ${pendaftar.length} USER ❤️`, antilink, but)
break
case 'antilinkon':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
if (isAntiLink) return reply('anti link is on')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`Successfully activate the anti link feature`)
break
case 'antilinkoff':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
if (!isAntiLink) return reply('anti link has been off before')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`Successfully disable the anti link feature`)
break
case 'antiwame':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
antilink = await getBuffer(`https://telegra.ph/file/d09d81a3861aa1e44fe41.jpg`)
but = [
{ buttonId: '!antiwameon', buttonText: { displayText: 'Active' }, type: 1 },
{ buttonId: '!antiwameoff', buttonText: { displayText: 'Non-active' }, type: 1 }
]
sendButImage(from, "Silahkan pilih untuk antiwame group", `${faketeks} || ${pendaftar.length} USER ❤️`, antilink, but)
break
case 'antiwameon':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
if (isAntiWaMe) return reply('anti link number is on')
_antiwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(_antiwame))
reply(`Successfully activate the anti link number feature`)
break
case 'antiwameoff':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
if (!isAntiWaMe) return reply('anti link number has been off before')
_antiwame.splice(from, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(_antiwame))
reply(`Successfully disable the anti link number feature`)
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'Active' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'Non-active' }, type: 1 }
]
sendButImage(from, "Silahkan pilih untuk antivirtex group", `${faketeks} || ${pendaftar.length} USER ❤️`, antilink, but)
break
case 'antivirtexon':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
if (isAntiVirtex) return reply('anti virtex group has been active beforeu')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`Successfully activate anti-virtex mode`)
break
case 'antivirtexoff':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
if (!isAntiVirtex) return reply('Anti-virtex mode has been disabled before')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`Successfully disable anti-virtex mode`)
break
case 'group':
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.badmin)
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: '🔓 Open' }, type: 1 },
{ buttonId: '!grouptutup', buttonText: { displayText: '🔒 Close' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk open/close group", `${faketeks} || ${pendaftar.length} USER ❤️`, but, msg)
break
case 'groupbuka': case 'opengroup':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
reply(`Successfully Opening a Group *${groupMetadata.subject}*`)
faza.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup': case 'closegroup':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
reply(`Successfully Closing Group *${groupMetadata.subject}*`)
faza.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup': case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.badmin)
linkgc = await faza.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
faza.sendMessage(from, yeh, text, { quoted: fakevo })
break
case 'promote': case 'pm':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
faza.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
faza.groupMakeAdmin(from, mentioned)
}
break
case 'demote': case 'dm':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
faza.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
faza.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
faza.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.badmin)
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
faza.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
faza.groupRemove(from, mentioned)
}
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
faza.groupUpdateSubject(from, `${body.slice(9)}`)
faza.sendMessage(from, `Success in Changing the Group Name to *${body.slice(9)}*`, text, { quoted: fakevo })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
faza.groupUpdateDescription(from, `${body.slice(9)}`)
faza.sendMessage(from, `Successfully Changed Group Description *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: fakevo })
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await faza.downloadAndSaveMediaMessage(msg, './database/media_user')
await faza.updateProfilePicture(from, media)
reply(mess.wait)
reply(`Successfully Changing Group Profile *${groupMetadata.subject}*`)
break
case 'hidetag': case 'ht': case 'h':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await faza.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: fakevo
}
faza.sendMessage(from, options, text)
break
case 'epen': case 'event':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('Boo :𝘃')
if (Number(args[0]) === 1) {
if (isEventon) return reply('Activated')
event.push(from)
fs.writeFileSync('./baileys/data/event.json', JSON.stringify(event))
reply('Success in activating the event in this group')
} else if (Number(args[0]) === 0) {
event.splice(from, 1)
fs.writeFileSync('./baileys/data/event.json', JSON.stringify(event))
reply('Successfully deactivating events in this group')
} else {
reply('eeee')
}
break

// Download Menu
case 'play': case 'ytplay':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply('Linknya?')
			 let query = args.join(" ")
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *🎄Judul :* ${res.all[0].title}
 *🎉ID Video :* ${res.all[0].videoId}
 *🎋Diupload Pada :* ${res.all[0].ago}
 *🗺Views :* ${res.all[0].views}
 *📻Durasi :* ${res.all[0].timestamp}
 *⛽Channel :* ${res.all[0].author.name}
 *🔗Link Video :* ${res.all[0].url}

*Pilih Media Yang Akan Di Download*
`
buttons = [
{ buttonId: `${prefix}ytmp3 ${res.all[0].url}`, buttonText: { displayText: '🎵 Audio' }, type: 1 },
{ buttonId: `${prefix}ytmp4 ${res.all[0].url}`, buttonText: { displayText: '🎥 Video' }, type: 1 }
]
imageMessage = (await faza.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}
prep = await faza.prepareMessageFromContent(from,{buttonsMessage},{})
faza.relayWAMessage(prep)
break
case 'ytmp3':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
reply(mess.wait)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=${ini_link}`)
get_result = get_result.result
caption = `❖ Title    : *${get_result.title}*\n`
caption += `❖ Size     : *${get_result.size}*`
ini_buffer = await getBuffer(get_result.thumbnail)
await faza.sendMessage(from, ini_buffer, image, { quoted: fakevo, caption: caption })
limitAdd(sender, limit)
get_audio = await getBuffer(get_result.link)
await faza.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: fakevo })
break
case 'ytmp4':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
reply(mess.wait)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkey}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await faza.sendMessage(from, ini_buffer, image, { quoted: fakevo, caption: ini_txt })
limitAdd(sender, limit)
get_audio = await getBuffer(get_result.link)
await faza.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: fakevo })
break
case 'tiktok': case 'tiktokvideo': case 'tiktoknowm': case 'tiktokmp4':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply('Linknya?')
if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
reply(mess.wait)
lanu = await TiktokDownloader(`${q}`)
.then((data) => { sendMediaURL(from, data.result.nowatermark) })
limitAdd(sender, limit)
.catch((err) => { reply(String(err)) })
break
case 'tiktokaudio': case 'tiktokmusic': case 'tiktokmp3':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
reply(mess.wait)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
await faza.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: fakevo })
limitAdd(sender, limit)
break
case 'igdl': case 'instagram':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply('Linknya?')
reply(mess.wait)
var { igDownloader } = require('./lib/igdown')
res = await igDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
limitAdd(sender, limit)
break
case 'mediafire': case 'mediafiredl':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isPremium && !isOwner && !msg.key.fromMe) return reply(mess.only.prem)
if (args.length < 1) return reply('Link Nya Mana?')
if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`◧ Nama : ${res[0].nama}\`\`\`
\`\`\`◧ Ukuran : ${res[0].size}\`\`\`
\`\`\`◧ Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: msg})
limitAdd(sender, limit)
break

// Search Menu
case 'ytsearch': case 'yts':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!args.length) return reply('Judulnya apa kak?')
try {
    reply(mess.wait)
    const input = args.join(" ")
    const filter1 = await ytsd.getFilters(input)
    const filters1 = filter1.get('Type').get('Video')
    const { items } = await ytsd(filters1.url, { limit: 10 })
    let hehe = `* YOUTUBE SEARCH*
* Search Query:* ${input}\n\n`
    for (let i = 0; i < items.length; i++) {
    hehe += `───────────────\n
* Judul:* ${items[i].title}
* Id:* ${items[i].id}
* Ditonton:* ${items[i].views}
* Durasi:* ${items[i].duration}
* Link:* ${items[i].url}\n\n`
}
thumb = await getBuffer(items[0].bestThumbnail.url)
await faza.sendMessage(from, thumb, image, {quoted: msg, caption: `${hehe}───────────────\n`, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdreply: { title: `SEARCH: ${args[0]}`, body: "YOUTUBE SEARCH", mediaType: "2", thumbnail: thumb, mediaUrl:`https://youtu.be/JN_Gw2GzuqQ` }}})
} catch(e) {
reply('Didn\'t find anything or there is any error!')
limitAdd(sender, limit)
reply(`Error: ${e.message}`)
}
break
case 'jooxsearch':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
reply(mess.wait)
query = args.join(" ")
get_result = await fetchJson(`https://fafa-api.herokuapp.com/api/music/joox?query=${query}&apikey=${jayokeys}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
    ini_txt += `Title : ${x.lagu}\n`
    ini_txt += `Album : ${x.album}\n`
    ini_txt += `Penyanyi : ${x.penyanyi}\n`
    ini_txt += `Publish : ${x.publish}\n`
    ini_txt += `Thumbnail : ${x.img}\n\n`
}
reply(ini_txt)
limitAdd(sender, limit)
break
case 'spotifysearch':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
reply(mess.wait)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
    ini_txt += `Title : ${x.title}\n`
    ini_txt += `Artists : ${x.artists}\n`
    ini_txt += `Duration : ${x.duration}\n`
    ini_txt += `Link : ${x.link}\n`
    ini_txt += `Preview : ${x.preview_url}\n\n\n`
}
reply(ini_txt)
limitAdd(sender, limit)
break
case 'pinterest': case 'pinterestsearch':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply("querynya?")
pint = await pinterest (q)
faza.sendMessage(from, {url: `${pint[Math.floor(Math.random() * pint.length)]}`}, image, {quoted: msg, thumbnail: Buffer.alloc(0), caption: "Success"})
limitAdd(sender, limit)
break
case 'xnxxsearch':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
reply(mess.wait)
query = args.join(" ")
get_result = await fetchJson(`https://fafa-api.herokuapp.com/api/downloader/xnxx?query=${query}&apikey=${jayokeys}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
    ini_txt += `Title : ${x.title}\n`
    ini_txt += `Info : ${x.info}\n`
    ini_txt += `Link : ${x.link}\n\n`
}
reply(ini_txt)
limitAdd(sender, limit)
break
case 'xvideossearch':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
reply(mess.wait)
query = args.join(" ")
get_result = await fetchJson(`https://fafa-api.herokuapp.com/api/downloader/xvideo?query=${query}&apikey=${jayokeys}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
    ini_txt += `Title : ${x.title}\n`
    ini_txt += `Info : ${x.info}\n`
    ini_txt += `Link : ${x.link}\n\n`
}
reply(ini_txt)
limitAdd(sender, limit)
break


// Tools Menu
case 'attp':{
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`Kirim perintah *${prefix}attp* teks`)
let ane = await getBuffer(`https://api.xteam.xyz/attp?file&text=${q}`)
fs.writeFileSync('./sticker/attp.webp', ane)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/attp.webp -o ./sticker/attp.webp`, async (error) => {
if (error) return reply(mess.error.api)
faza.sendMessage(from, fs.readFileSync(`./sticker/attp.webp`), sticker, {quoted: fakevo})
limitAdd(sender, limit)
fs.unlinkSync(`./sticker/attp.webp`)
})
}
break
case 'sticker': case 'stiker': case 's':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if (isMedia && !msg.message.videoMessage || isQuotedImage) {
            reply(mess.wait)
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
            const media = await faza.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
            await ffmpeg(`${media}`)
            .input(media)
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            reply(mess.error.api)
            })
            .on('end', function () {
            console.log('Finish')
            exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
            if (error) return reply(mess.error.api)
            faza.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
            fs.unlinkSync(media)	
            fs.unlinkSync(`./sticker/${sender}.webp`)	
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(`./sticker/${sender}.webp`)
            } else if ((isMedia && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
            const media = await faza.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
            reply(mess.wait)
            await ffmpeg(`${media}`)
            .inputFormat(media.split('.')[4])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(mess.error.api)
            })
            .on('end', function () {
            console.log('Finish')
            exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
            if (error) return reply(mess.error.api)
            faza.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
            limitAdd(sender, limit)
            fs.unlinkSync(media)
            fs.unlinkSync(`./sticker/${sender}.webp`)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(`./sticker/${sender}.webp`)
            } else {
            reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
            }
            break
case 'emoji': case 'semoji': case 'smoji':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isPremium && !isOwner && !msg.key.fromMe) return reply(mess.only.prem)
if (!q) return reply(`Example : ${prefix + command} 😂`)
reply(mess.wait)
hex2 = args.join(' ') 
emoji.get(`${hex2}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)
limitAdd(sender, limit)
})
break
case 'stickerwm': case 'swm': case 'take': case 'takesticker': case 'takestick':{
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isPremium && !isOwner && !msg.key.fromMe) return reply(mess.only.prem)
reply(mess.wait) 
let packname1 = q.split('|')[0] ? q.split('|')[0] : q
let author1 = q.split('|')[1] ? q.split('|')[1] : ''
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let media = await faza.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(color(`Started : ${cmd}`,'yellow'))
})
.on('error', function (err) {
console.log(color(`Error : ${err}`,'red'))
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log(color(`Finish`,'magenta'))
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.stick)
faza.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fakevo})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if (( isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let media = await faza.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(color(`Started : ${cmd}`,'yellow'))
})
.on('error', function (err) {
console.log(color(`Error : ${err}`,'red'))
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error.stick)
})
.on('end', function () {
console.log((`Finish`,'magenta'))
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.stick)
faza.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fakevo})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if (isQuotedSticker) {
let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media = await faza.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.stick)
faza.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fakevo})
limitAdd(sender, limit)
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
} else {
reply(`Kirim gambar/video dengan caption ${prefix}stickerwm packname|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
}
}
break
case 'toimg':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedSticker) return reply('Reply stickernya kak')
encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await faza.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Success`)
limitAdd(sender, limit)
fs.unlinkSync(ran)
})
break
case 'tomp3':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
faza.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply videonya kak')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await faza.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
faza.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: fakevo })
limitAdd(sender, limit)
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedSticker) return reply('Reply stikernya kak')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await faza.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
faza.sendMessage(from, buffer, video, { quoted: fakevo, caption: 'Success' })
limitAdd(sender, limit)
fs.unlinkSync(ran)
})
break

// Nsfw Menu
case 'waifu': case 'neko': case 'trap': case 'blowjob': 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isPremium && !isOwner && !msg.key.fromMe) return reply(mess.only.prem)
nsfw = await fetchJson(`https://api.waifu.pics/nsfw/${command}`)
result = await getBuffer(nsfw.url)
but = [{ buttonId: `.${command}`, buttonText: { displayText: 'NEXT➡️' }, type: 1 }]
sendButImage(from, `Sange kok sama anime`, `${faketeks} || ${pendaftar.length} USER ❤️`, result, but) 
limitAdd(sender, limit) 
break

// Sfw Menu
case 'shinobu': case 'megumin': case 'bully': case 'cuddle': 
case 'cry': case 'hug': case 'awoo': case 'kiss': 
case 'lick': case 'pat': case 'smug': case 'bonk': 
case 'yeet': case 'blush': case 'smile': case 'wave': 
case 'highfive': case 'handhold': case 'nom': case 'bite': 
case 'glomp': case 'slap': case 'kill': case 'happy': 
case 'wink': case 'poke': case 'dance': case 'cringe':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isPremium && !isOwner && !msg.key.fromMe) return reply(mess.only.prem)
sfw = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
result = await getBuffer(sfw.url)
but = [{ buttonId: `.${command}`, buttonText: { displayText: 'NEXT➡️' }, type: 1 }]
sendButImage(from, `Sange kok sama anime`, `${faketeks} || ${pendaftar.length} USER ❤️`, result, but) 
limitAdd(sender, limit) 
break

// Rpg Menu
case 'profile': case 'rpgmenu':
checkHealt(sender)
break
case 'joinrpg':
if (!isGroup) return reply(mess.only.group)  
if (isPetualang) return reply('Kamu sudah menjadi petualang')
_petualang.push(sender)
fs.writeFileSync('./baileys/data/inventori.json', JSON.stringify(_petualang))
capt = `🎉Selamat ${pushname}🎊\nKamu terdaftar sebagai petualang!\nSilahkan ketik ${prefix}rpgmenu`
faza.sendMessage(from, capt, text, {quoted: msg})		
addInventori(sender)
addLevelingId(sender)
break
case 'misi': case 'quest':
if (!isGroup) return reply(mess.only.group)
if (!isPetualang) return reply(mess.only.player)
rows:
rows1 = [
    {
        title: 'Kill Slime, Lvl copper',
        description: "",
        rowId: `${prefix}slime`
    },
    {
        title: 'Kil Goblin, Lvl silver',
        description: "",
        rowId: `${prefix}goblin`
    },
    {
        title: 'Kill Evil Eye, Lvl gold',
        description: "",
        rowId: `${prefix}evil`
    },
    {
        title: 'Kill Behemoth, Lvl platinum',
        description: "",
        rowId: `${prefix}behemoth`
    },
    {
        title: 'Kill Cockatrice, Lvl Mithril',
        description: "",
        rowId: `${prefix}cockatrice`
    },
    {
        title: 'Kill Four Fiends, Lvl Orichalcum',
        description: "",
        rowId: `${prefix}4fiends`
    },
    {
        title: 'Kill Demond King, Lvl Adamantite',
        description: "",
        rowId: `${prefix}demondking`
    }
]
sections = [
{ title: 'Pilih Quest Sesuai Dengan Levelmu!', rows: rows1 }
]
button = {
     buttonText: 'List Quest',
     description: `Hallo @${sender.split('@')[0]}, Aku Faza!!\nAku adalah admin quest di group ini! \nSilahkan pilih quest yang cocok dengan levelmu!`,
     footerText: `${faketeks} || ${pendaftar.length} USER ❤️`,
     sections: sections,
     listType: 1
}
faza.sendMessage(from, button, MessageType.listMessage, {contextInfo: { mentionedJid: sender}})
break
case 'mybag': case 'inventory': case 'inv':
case 'cekinven': case 'myinventori':
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
done = (`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`)
but = [{ buttonId: `${prefix}adventure`, buttonText: { displayText: 'Adventure' }, type: 1 }]
sendButMessage(from, done, 'Inventori User', but)
break
case 'mining':   
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
if (!isGroup) return reply(mess.only.group)     
if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
if (!isPetualang) return reply(mess.only.player)
pp = randomNomor(75)
emas = randomNomor(15)
dm = randomNomor(3)
besi = randomNomor(50)
done = (`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
mining = ('Waitt sedang menguli . . .')
setTimeout( () => {	
but = [{ buttonId: `${prefix}mining`, buttonText: { displayText: 'Mining Again' }, type: 1 }]
sendButMessage(from, done, 'Mining', but)
}, 9000) // 1000 = 1s,
setTimeout( () => {
faza.sendMessage(from, '🚧 selesai menguli. . .🪙👷', text) 
}, 7000) // 1000 = 1s,
setTimeout( () => {
faza.sendMessage(from, '🚧 menemukan emas. . .⚒️🏔️️️', text) 
}, 4000) // 1000 = 1s,
setTimeout( () => {
faza.sendMessage(from, '🚧 mulai menambang. . .⚒️🏔️️', text) 
}, 1500) // 1000 = 1s,
setTimeout( () => {
faza.sendMessage(from, mining, text, {quoted: msg}) 
}, 0) // 1000 = 1s,
break
case 'mancing':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
if (!isPetualang) return reply(mess.only.player)	
ikannya = ikan[Math.floor(Math.random() * ikan.length)]
xp = Math.ceil(Math.random() * 350)
coin = randomNomor(50)	    
ditangkap = Math.ceil(Math.random() * 50)
cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
setTimeout( () => {
caption = (`「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`)
but = [
{ buttonId: `${prefix}mancing`, buttonText: { displayText: 'Mancing lagi' }, type: 1 },
{ buttonId: `${prefix}myinventori`, buttonText: { displayText: 'Cek Inventory' }, type: 1 }
]
sendButLocation(from, caption, 'Memancing', cing, but, {quoted: msg})      
}, 6000)
setTimeout( () => {
faza.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
}, 5000) // 1000 = 1s,
setTimeout( () => {
faza.sendMessage(from, '🎣Meanarik kail. . .', text) 
}, 3000) // 1000 = 1s,
setTimeout( () => {
faza.sendMessage(from, '🎣Mulai memancing. . .', text) 
}, 1500) // 1000 = 1s,
addFish(sender, ditangkap)
addLevelingXp(sender, xp)
addBalance(sender, coin, balance) 
limitAdd(sender, limit)
break
case 'adventure':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
if (isHealt(sender)) return reply('Healt')
if (!isPetualang) return reply(mess.only.player)		
ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
anu = fs.readFileSync('./baileys/rpg/dungeon.js');
jsonData = JSON.parse(anu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasm = await getBuffer(randKey.result)  
const adven = Math.ceil(Math.random() * 1000)
const money = Math.ceil(Math.random() * 300)
setTimeout( () => {		
caption = (`「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`)
but = [
{ buttonId: `${prefix}myinventori`, buttonText: { displayText: 'Inventory' }, type: 1 }]
sendButLocation(from, caption, 'Memancing', hasm, but, {quoted: msg})   
}, 7000)
setTimeout( () => {
faza.sendMessage(from, `Awass`, text) 
}, 5000) // 1000 = 1s,
setTimeout( () => {
faza.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
}, 3000) // 1000 = 1s,
setTimeout( () => {
faza.sendMessage(from, `${pushname} sedang bertualang`, text) 
}, 1500) // 1000 = 1s,
addLevelingXp(sender, adven)
addBalance(sender, money, balance) 
limitAdd(sender, limit) 
await healtAdd(sender)
break
case 'topleaderboard': case 'leaderboard': case 'lb':
if (!isGroup) return reply(mess.only.group)
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = ' > 𝗧𝗢𝗣 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗 <\n\n'
let nom = 0
try {
    for (let i = 0; i < 10; i++) {
        nom++
        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n • *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
    }
    await reply(leaderboardlvl)
} catch (err) {
    console.error(err)
    await reply(`minimal 10 user untuk bisa mengakses database`)
}
break

// Sell
case 'sellikan':
if (!isGroup) return reply(mess.only.group)
if (!isPetualang) return reply(mess.only.player)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
jmlh = body.slice(10)
rp = 5 * jmlh
if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
sellFish(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = (`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventory' }, type: 1 }]
sendButMessage(from, capti, 'Sell Ikan', but)
break
case 'sellbesi':
if (!isGroup) return reply(mess.only.group)
if (!isPetualang) return reply(mess.only.player)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
jmlh = body.slice(10)
rp = 10 * jmlh
if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
sellBesi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = (`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventory' }, type: 1 }]
sendButMessage(from, capti, 'Sell Besi', but)
break
case 'sellemas':
if (!isGroup) return reply(mess.only.group)
if (!isPetualang) return reply(mess.only.player)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
jmlh = body.slice(10)
rp = 25 * jmlh
if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
sellEmas(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = (`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventory' }, type: 1 }]
sendButMessage(from, capti, 'Sell Emas', but)
break
case 'selldiamond':
if (!isGroup) return reply(mess.only.group)
if (!isPetualang) return reply(mess.only.player)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
ttl = body.slice(13)
var etoo = 75 * ttl
if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
sellDm(sender, ttl)
addBalance(sender, etoo, balance) 
capti = (`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventory' }, type: 1 }]
sendButMessage(from, capti, 'Sell Diamond', but)
break

// Fun || Primbon Menu
case 'truth':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
tod = await getBuffer(`https://telegra.ph/file/e3e92a9997c659c075bd9.jpg`)
const truth = _truth[Math.floor(Math.random() * _truth.length)]
but = [
{ buttonId: `${prefix}dare`, buttonText: { displayText: 'Dare' }, type: 1 }, { buttonId: `${prefix}truth`, buttonText: { displayText: 'Truth' }, type: 1 }]
sendButLocation(from, truth, `${faketeks} || ${pendaftar.length} USER ❤️`, tod, but)  
limitAdd(sender, limit)
break
case 'dare':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
tod = await getBuffer(`https://telegra.ph/file/e3e92a9997c659c075bd9.jpg`)
const dare = _dare[Math.floor(Math.random() * _dare.length)]
but = [
{ buttonId: `${prefix}dare`, buttonText: { displayText: 'Dare' }, type: 1 }, { buttonId: `${prefix}truth`, buttonText: { displayText: 'Truth' }, type: 1 }]
sendButLocation(from, dare, `${faketeks} || ${pendaftar.length} USER ❤️`, tod, but)  
limitAdd(sender, limit)
break
case "jadian":
if (!isGroup) return reply(mess.only.group)
jds = []
const jdii = groupMembers
const koss = groupMembers
const akuu = jdii[Math.floor(Math.random() * jdii.length)]
const diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee..yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
break	
case "ngewe":
if (!isGroup) return reply(mess.only.group)
jds = []
const jdiid = groupMembers
const kosst = groupMembers
const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
const diaat = kosst[Math.floor(Math.random() * kosst.length)]
teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
jds.push(akuut.jid)
jds.push(diaat.jid)
mentions(teks, jds, true)
break
case "terganteng":
case "terjelek":
case "tercantik":
case "tergay":
case "terpedo":
case "terwibu":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
jds = []
const jdiidc = groupMembers
const kosstc = groupMembers
const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
teks = `Yang ${command} di grub ini adalah @${akuutc.jid.split('@')[0]}`
jds.push(akuutc.jid)
limitAdd(sender, limit)
mentions(teks, jds, true)
break	
case 'darkjokes':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
let data = fs.readFileSync('./lib/darkjokes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasl = await getBuffer(randKey.result)
but = [
{ buttonId: `${prefix}darkjokes`, buttonText: { displayText: 'NEXT➡️' }, type: 1 }]
sendButImage(from, `Gelap?`, `${faketeks} || ${pendaftar.length} USER ❤️`, hasl, but) 
limitAdd(sender, limit) 
break

// Owner Menu
case 'mode':
buttonss = [{buttonId: `public`, buttonText: {displayText: 'PUBLIC👥'}, type: 1},{buttonId: `self`, buttonText: {displayText: 'SELF👤'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await faza.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: msg})
break
case 'public':
if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
publik = true
lreply('Sukses mengubah mode self ke public')
break
case 'self':
if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
publik = false
reply('Sukses mengubah mode public ke self')
break
case 'addprem': case 'addpremium':
if (!isOwner && !msg.key.fromMe) return reply(mess.only.owner)    
adprem = `${args[0].replace('@','')}@s.whatsapp.net`
premium.push(adprem)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`Success`)
break
case 'dellprem': case 'delpremium':
if (!isOwner && !msg.key.fromMe) return reply(mess.only.owner)    
delp = body.slice(10)
premium.splice(`${delp}@s.whatsapp.net`, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`Success`)
break
case 'exif':
if (!msg.key.fromMe && !isOwner)return reply(mess.only.owner)
if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|author`)
if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
exif.create(arg.split('|')[0], arg.split('|')[1])
reply(mess.success)
break
case 'bc':
case 'broadcast':
if (!isOwner && !msg.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
anu = await faza.chats.all()
if (isMedia && !msg.message.videoMessage || isQuotedImage) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
	buff = await faza.downloadMediaMessage(encmedia)
	for (let _ of anu) {
		faza.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${q}`})
	}
	reply(`Sukses mengirim Broadcast ${q}`)
	} else if (isMedia && !msg.message.videoMessage || isQuotedVideo) {
	const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
	buff = await faza.downloadMediaMessage(encmedia)
	for (let _ of anu) {
		faza.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${q}`})
	}
	reply(`Sukses mengirim Broadcast ${q}`)
	} else if (isMedia && !msg.message.videoMessage || isQuotedVideo) {
	const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
	buff = await faza.downloadMediaMessage(encmedia)
	for (let _ of anu) {
		faza.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${q}` })
	}
	reply(`Sukses mengirim Broadcast ${q}`)
} else {
	for (let _ of anu) {
buttonss = [{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1},{buttonId: `${prefix}owner`, buttonText: {displayText: 'Owner'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: `${faketeks} || ${pendaftar.length} USER ❤️`,
buttons: buttonss,
headerType: 1
}
await faza.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: fakevo})
}
reply(`Sukses mengirim Broadcast:\n${q}`)
}
break

// Other Menu
case 'owner':
let ini_list = []
for (let i of ownerNumber) {
const vname = faza.contacts[i] != undefined ? faza.contacts[i].vname || faza.contacts[i].notify : undefined
ini_list.push({
"displayName": `${ownerName}`,
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `N:Sy;${ownerName};;;\n`
+ `FN:${vname ? `${vname}` : `${faza.user.name}`}\n`
+ `item1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\n`
+ `item1.X-ABLabel:Ponsel\n`
+ 'END:VCARD'
})
}
hehe = await faza.sendMessage(from, {
"displayName": `${ini_list.length} kontak`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: fakevo })
faza.sendMessage(from, 'Ini kak kontak ownerku', text, { quoted: fakevo })
break
case 'report': case 'bugreport':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: fakevo })
var nomor = msg.participant
let teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
faza.sendMessage(`${ownerNumberr}@s.whatsapp.net`, options, text, { quoted: fakevo })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case "speed":
case "ping":
pingnya = `*SPEEDTEST : ${latensi.toFixed(4)} Second*`
reply(pingnya)
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break
case 'buylimit':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)      
payout = body.slice(10)
let ane = 150 * payout
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, parseInt(args[0]), limit)
reply(`Pembeliaan limit sebanyak ${args[0]} berhasil\n\nSisa Balance :  $${(getBalance(sender, balance))}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`)
}
break
case 'listprem': case 'listpremium':
case 'premlist':
if (!isPremium && !isOwner) return reply(mess.only.prem)
teks = '*List Premium:*\n\n'
for (let manikgans of premium) {
teks += `- ${manikgans}\n`
}
teks += `\n*Total : ${premium.length}*`
faza.sendMessage(from, teks.trim(), extendedText, { quoted: fakevo, contextInfo: { "mentionedJid": premium } })
break

// Ended
default:
if (budy.startsWith('$')){
if (!msg.key.fromMe && !isOwner) return reply(mess.only.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`ERROR KONTOL :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!msg.key.fromMe && !isOwner) return reply(mess.only.owner)
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
            if (isOwner) {
			if (budy.startsWith('> ')) {
				console.log(color('[ EVAL ]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x ')) {
				console.log(color('[ EXEC ]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return faza.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: fakevo })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
