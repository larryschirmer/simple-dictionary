const fs = require('fs');
const path = require('path');
const readline = require('readline');
const stream = require('stream');

const writeOut = require('./writeOut');
const wait = require('./wait');

const importFile = path.resolve(__dirname, '../dictionary.csv');
const exportFile = path.resolve(__dirname, '../supportedWords.md');

const inStream = fs.createReadStream(importFile);
const outStream = new stream();
const outFile = writeOut(exportFile, { stringify: false });

const fileTemplate = ({ words, amount }) => `# Supported Words

## Simple Dictionary has ${amount} unique processed words

${words.map(word => `* ${word}`).join('\n')}
`;

let words = [];
const isProcessedLine = index => index === '0'
const onNewLine = (line = '') => {
  const [index = '', word = ''] = line.split(',');
  if (isProcessedLine(index) && word) words.push(word);
};

const onClose = async () => {
  await wait(5000);
  const uniqueWords = [...new Set(words)];
  outFile(fileTemplate({ words: uniqueWords, amount: uniqueWords.length }));
  console.log(JSON.stringify({ amount: uniqueWords.length }, null, 2));
};

const rl = readline.createInterface(inStream, outStream);
rl.on('line', onNewLine);
rl.on('close', onClose);
