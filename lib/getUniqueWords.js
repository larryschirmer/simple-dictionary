const path = require('path');
const fs = require('fs');
const es = require('event-stream');
const writeOut = require('./writeOut');

const importFile = path.resolve(__dirname, '../dictionary.csv');
const exportFile = path.resolve(__dirname, '../supportedWords.md');
const outFile = writeOut(exportFile, { stringify: false });

let words = [];

const fileTemplate = ({ words, amount }) => `# Supported Words

## Simple Dictionary has ${amount} unique processed words

${words.join('\n')}
`;

const readLine = (line = '') => {
  const [index = '', word = ''] = line.split(',');

  if (index === '0' && word) words.push(word);
};

const finish = async () => {
  await new Promise(res => setTimeout(res, 5000));
  const uniqueWords = [...new Set(words)];
  outFile(fileTemplate({ words: uniqueWords, amount: uniqueWords.length }));
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
