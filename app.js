const { WebhookClient, MessageEmbed } = require("discord.js")
const config = require("./config.json")
const hook = new WebhookClient({ url: config.webhookurl })
const fetch = require("node-fetch")
const radom = [
    "neko",
    "wallpaper",
    "waifu",
    "fox_girl",
    "ngif"
]
const rad = radom[Math.floor(Math.random() * radom.length)]
const nekolife = `https://nekos.life/api/v2/img/${rad}`
fetch(nekolife)
    .then(res => res.json())
    .then(json => {
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor("Neko-Hook")
            .setDescription(`[Click here to see the image](${json.url})`)
            .setImage(json.url)
            .setTimestamp()
            .setFooter("Neko-Hook by @HELLSNAKE#6851")
        hook.send({ username: config.webhookname, avatarURL: config.hookAvatarUrl, embeds: [embed] })
        console.log(`Neko-Hook has sent an image to ${config.webhook}`)
        setTimeout(() => {
            console.log("Neko-Hook is restarting...")
            process.exit(2)
        }, config.timeout)
    })
