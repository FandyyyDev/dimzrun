exports.menu = (pushname, tampilUcapan, ownerName, botName, pendaftar, time, calender, latensi, runtime, isOwner, isPremium, sender, getBalance, balance, limitCount, limit, getLimit, prefix) => {
    return`Hi ${pushname}, ${tampilUcapan}✨
Saya ${botName}, Assisten kamu masa kini

👑 Creator : ${ownerName}
🤖 Bot Name : ${botName}
👥 Total Pengguna : ${pendaftar.length}
⌚ Jam : ${time}
📆 Tanggal : ${calender}
📊 Speed : ${latensi.toFixed(4)} second
⏳ Runtime :
${runtime(process.uptime())}

*「 USER INFO 」*
> Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}
> Name : ${pushname}
> Nomor : ${sender.split('@')[0]}
> Balance : $${(getBalance(sender, balance))}
> Limit : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}

*「 Information 」*

DIMBOTZ telah update ke versi 2.0
Ketik #bugreport jika menemukan bug

*「 Group Menu 」*

あ ${prefix}antilink
あ ${prefix}antiwame
あ ${prefix}welcome
あ ${prefix}antivirtex
あ ${prefix}group
あ ${prefix}linkgrup
あ ${prefix}promote
あ ${prefix}demote
あ ${prefix}add
あ ${prefix}kick
あ ${prefix}setpp
あ ${prefix}setdesc
あ ${prefix}setname
あ ${prefix}hidetag
あ ${prefix}event

*「 Download Menu 」*

あ ${prefix}play
あ ${prefix}ytmp3
あ ${prefix}ytmp4
あ ${prefix}tiktok
あ ${prefix}tiktokmp3
あ ${prefix}instagram
あ ${prefix}mediafire

*「 Search Menu 」*

あ ${prefix}ytsearch
あ ${prefix}jooxsearch
あ ${prefix}spotifysearch
あ ${prefix}pinterestsearch
あ ${prefix}xnxxsearch
あ ${prefix}xvideossearch

*「 Tools Menu 」*

あ ${prefix}attp
あ ${prefix}toimg
あ ${prefix}sticker
あ ${prefix}smoji
あ ${prefix}swm
あ ${prefix}take
あ ${prefix}tomp3
あ ${prefix}tovideo

*「 Wibu Menu 」*

あ ${prefix}waifu
あ ${prefix}neko
あ ${prefix}trap
あ ${prefix}blowjob
あ ${prefix}shinobu
あ ${prefix}megumin
あ ${prefix}bully
あ ${prefix}cuddle
あ ${prefix}cry
あ ${prefix}hug
あ ${prefix}awoo
あ ${prefix}kiss
あ ${prefix}lick
あ ${prefix}pat
あ ${prefix}smug
あ ${prefix}bonk
あ ${prefix}yeet
あ ${prefix}blush
あ ${prefix}smile
あ ${prefix}wave
あ ${prefix}highfive
あ ${prefix}handhold
あ ${prefix}nom
あ ${prefix}bite
あ ${prefix}glomp
あ ${prefix}slap
あ ${prefix}kill
あ ${prefix}happy
あ ${prefix}wink
あ ${prefix}poke
あ ${prefix}dance
あ ${prefix}cringe

*「 Rpg Menu 」*

あ ${prefix}joinrpg
あ ${prefix}quest
あ ${prefix}inventory
あ ${prefix}mining
あ ${prefix}mancing
あ ${prefix}adventure
あ ${prefix}topleaderboard

*「 Fun Menu 」*

あ ${prefix}truth
あ ${prefix}dare
あ ${prefix}jadian
あ ${prefix}ngewe
あ ${prefix}terganteng
あ ${prefix}terjelek
あ ${prefix}tercantik
あ ${prefix}tergay
あ ${prefix}terpedo
あ ${prefix}terwibu
あ ${prefix}darkjokes

*「 Owner Menu 」*

あ ${prefix}mode
あ ${prefix}self
あ ${prefix}public
あ ${prefix}exif
あ ${prefix}bc
あ ${prefix}addpremium
あ ${prefix}delpremium

*「 Other Menu 」*

あ ${prefix}owner
あ ${prefix}report
あ ${prefix}speed
あ ${prefix}runtime
あ ${prefix}donasi
あ ${prefix}listpremium
あ ${prefix}buylimit
`
}

exports.infobot = (prefix) => {
    return `Syarat & Ketentuan *DIMBOTZ*

• DIMBOTZ *hanya menyimpan nomor anda* di dalam database sebagai nomor user
• DIMBOTZ *tidak pernah meminta informasi pribadi* anda seperti alamat rumah, asal daerah, dan lain-lain
• DIMBOTZ tidak menerima *Telpon / Video Call*
• Dilarang *copy tampilan* bot
• Dilarang melakukan *spam* terhadap bot
• DIMBOTZ tidak menyimpan *data pribadi* anda
• DIMBOTZ *tidak bertanggungjawab atas fitur apapun yang anda gunakan*
• DIMBOTZ *tidak* menyimpan foto, video, atau media apapun yang anda kirimkan
• Apabila menemukan bug, error, atau request fitur harap hubungi developer bot
• DIMBOTZ berhak *memblokir* atau *ban* terhadap user dengan alasan maupun tanpa alasan

_Regards : OWNER DIMBOTZ_
`
}

exports.tos = (pushname, ownerNumberr, prefix) => {
    return `\t\t\t\t*💰「 DONATE 」💰*

Hai ${pushname}👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
🏧 ${ownerNumberr} (OVO/Dana/GoPay)

Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/${ownerNumberr} (Owner)
`
}
