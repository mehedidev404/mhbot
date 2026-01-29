const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('MhWorkBuddyBot is alive!');
});

app.listen(port, () => {
  console.log(`Fake server is running on port ${port}`);
});

const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

const token = '8520766658:AAEsPuailEjKG2qju8ZyXOmhthOtv_5pY8E';
const chatId = '-5194241271';
// 2 bot
process.env.NTBA_FIX_319 = 1;
const bot = new TelegramBot(token, { polling: true });

const sendTask = (message) => {
  bot
    .sendMessage(chatId, message)
    .then(() => console.log(`Message Sent: ${message}`))
    .catch((err) => console.log('Error logic:', err));
};

console.log('MhWorkBuddyBot is now in Banglish Mode! 🔥');

// 1:00 PM - Lunch
cron.schedule(
  '0 13 * * *',
  () => {
    sendTask(
      'Oi shobai, Break time hoye gese! 🍜 Khuda lagse na? sobai cholun khate jai! Kaaj thakbe, pet toh r thakbe na! 😂',
    );
  },
  { timezone: 'Asia/Dhaka' },
);

// 5:00 PM - Ready to go
cron.schedule(
  '0 17 * * *',
  () => {
    sendTask(
      'Hay be ready for go home! 💼 Bag guchano shuru koren shobai. Bashay jawar time hoye jaitese! ar matro 1 hour 🏃‍♂️',
    );
  },
  { timezone: 'Asia/Dhaka' },
);

// 5:30 PM - Last Warning
cron.schedule(
  '30 17 * * *',
  () => {
    sendTask(
      'Hay man, you still working? 🙄 Be ready man, do fast! client hala go message den taratari 🔒',
    );
  },
  { timezone: 'Asia/Dhaka' },
);

// 6:00 PM - Freedom
cron.schedule(
  '0 18 * * *',
  () => {
    sendTask(
      'GOK GOK it time to go home! 🎉 Shanti! Shanti! Shob bondho koren . Ajker moto dukan bondho! Tata shobaike! 👋✨',
    );
  },
  { timezone: 'Asia/Dhaka' },
);
