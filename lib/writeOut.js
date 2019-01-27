const fs = require('fs');

const writeOut = (fileName, opts = {}) => data => {
  const { stringify = true, append = false, async = false } = opts;
  const formatedData = stringify ? JSON.stringify(data, null, 2) : data;

  if (append) {
    if (async) {
      return new Promise((res, rej) => {
        fs.appendFile(fileName, formatedData, 'utf8', err => {
          if (err) rej(err);
          res(true);
        });
      });
    } else {
      fs.appendFile(fileName, formatedData, 'utf8', err => {
        if (err) return console.log(err);
      });
    }
  } else {
    if (async) {
      return new Promise((res, rej) => {
        fs.writeFile(fileName, formatedData, err => {
          if (err) rej(err);
          res(true);
        });
      });
    } else {
      fs.writeFile(fileName, formatedData, err => {
        if (err) return console.log(err);
      });
    }
  }
};

module.exports = writeOut;
