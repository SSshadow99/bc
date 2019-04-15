const Discord = require('discord.js');
const devs = ['318705077734998017','318705077734998017'];
var prefix = ".";
const adminprefix = "."
const db = require('quick.db');
const client = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 

,ti={}  
,spee={};

/////////////////////////
////////////////////////

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` .bc |By SHADOW `,'https://www.twitch.tv/SHADOW');	
});  
 

client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('هذا الأمر فقط للسيرفرات').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send(':no_entry: | You dont have ADMINISTRATOR Permission!' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(محتوى الرساله ${args})
.setDescription(برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست)
if (!args) return message.reply('يجب عليك كتابة كلمة او جملة لإرسال البرودكاست');message.channel.send(BcList).then(msg => {
msg.react(':pencil:')
.then(() => msg.react(':pencil2:'))
.then(() =>msg.react(':pencil:'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === ':pencil:' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === ':pencil2:' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
EmbedBc.on("collect", r => {
message.channel.send(:ballot_box_with_check: تم ارسال الرساله بنجاح).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
  .setTitle('-Broadcast-')
.setAuthor(Server : ${message.guild.name})
.setFooter(Sender : ${message.author.username})
.setDescription(Message : ${args})
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(:ballot_box_with_check: تم ارسال الرساله بنجاح).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args);
msg.delete();
})
})
})
}
});



client.login(process.env.BOT_TOKEN);
