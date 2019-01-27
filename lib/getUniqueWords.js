const path = require('path');
const fs = require('fs');
const es = require('event-stream');

const importFile = path.resolve(__dirname, '../dictionary.csv');

let words = [];

const readLine = (line = '') => {
  const [index = '', word = ''] = line.split(',');

  if (index === '0' && word) words.push(word);
};

const finish = async () => {
  await new Promise(res => setTimeout(res, 5000));
  const uniqueWords = [...new Set(words)];
  console.log(JSON.stringify({ words: uniqueWords, amount: uniqueWords.length }, null, 2));
};

(async () => {
  try {
    const readStream = fs.createReadStream(importFile);
    readStream.pipe(es.split()).pipe(es.mapSync(readLine));

    readStream.on('end', finish);
  } catch (e) {
    console.log(e);
  }
})();
