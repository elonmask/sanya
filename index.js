const TelegramBot = require('node-telegram-bot-api');
const spawn = require('threads').spawn;

const token = '635249547:AAGJlU2A90kI0PtCq277DIQ85lT2FveOukg';
const bot = new TelegramBot(token, {polling: true});

var radio_on = false;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bot.onText(/\/sanya/, (msg, match) => {
  var id = msg.chat.id;
  bot.sendMessage(id, 'Саня, хуй соси');
});

bot.onText(/\/sanya_voice1/, (msg, match) => {
  var id = msg.chat.id;
  bot.sendVoice(id, './1.mp3');
});

bot.onText(/\/sanya_voice2/, (msg, match) => {
  var id = msg.chat.id;
  bot.sendVoice(id, './2.mp3', {});
});

bot.onText(/\/sanya_voice3/, (msg, match) => {
  var id = msg.chat.id;
  bot.sendVoice(id, './3.mp3', {});
});

bot.onText(/\/sanya_choir/, (msg, match) => {
  var id = msg.chat.id;
  bot.sendVoice(id, './choir.mp3', {});
});

bot.onText(/\/vika/, (msg, match) => {
  var id = msg.chat.id;
  bot.sendMessage(id, 'Вика топ❤');
});

bot.onText(/\/katya/, (msg, match) => {
  var id = msg.chat.id;
  bot.sendMessage(id, 'Катя мега топ❤💦');
});

bot.onText(/\/nastya/, (msg, match) => {
  var id = msg.chat.id;
  bot.sendMessage(id, 'Настя топ😍');
});

bot.onText(/\/ivanka/, (msg, match) => {
  var id = msg.chat.id;
  bot.sendMessage(id, 'Иванка топ😍😍');
});

bot.on('message', function(msg) {
  var id = msg.chat.id;
  if (msg.text == 'Саня') {
    bot.sendMessage(id, 'Хуй соси');
  }
});

bot.on('message', function(msg) {
  var id = msg.chat.id;
  if (msg.text == 'Кто сосет?') {
    bot.sendMessage(id, 'Саня');
  }
} );

bot.on('message', function(msg) {
  var id = msg.chat.id;
  if (msg.text == 'Кто батя?') {
    bot.sendMessage(id, 'Батя - @voronovserg, А Сане передайте чтоб сосал)0))');
  }
});

bot.on('new_chat_members', function(msg) {
  var id = msg.chat.id;
  bot.sendMessage(id, 'Превб покеж пезду');

});

bot.on('left_chat_member', function(msg) {
  var id = msg.chat.id;
  bot.sendMessage(id, msg.from.first_name + ', иди нахуй)');
});

bot.onText(/\/radio/, (msg, match) => {

  var r = getRandomInt(24);
  console.log(r + ' ' + '\n');
  if (r == 1) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 2) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 3) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 4) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 5) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 6) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 7) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 8) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 9) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 10) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 11) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 12) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 13) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 14) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 15) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 16) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 17) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 18) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 19) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 20) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 21) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 22) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  } else if (r == 23) {
    var id = msg.chat.id;
    bot.sendAudio(id, './' + r + '_.mp3');
    bot.sendMessage(id, '#радиоОппозиции');
  }
});
