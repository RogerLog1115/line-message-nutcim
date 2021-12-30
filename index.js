const linebot = require('linebot');
const express = require('express');

const bot = linebot({
	channelId: process.env.CHANNEL_ID,
	channelSecret: process.env.CHANNEL_SECRET,
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

const app = express();

const linebotParser = bot.parser();

app.get('/',function(req,res){
    res.send('Hello World! Hello World!');
});

app.post('/linewebhook', linebotParser);

bot.on('message', function (event) {
	if(event.message.text == "我要"){
		event.reply("吃雞").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}else if(event.message.text == "0"){
		event.reply("數字0").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	}


});

app.listen(process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});