const fs = require('fs');

const fileError = (error) => {
  fs.appendFile(
    './customError.txt',
    `custom errorlog:- with error ${error} on time ${Date.now().toLocaleString()} \n`,
    () => {
      console.log('error found on file ');
    }
  );
};

module.exports = fileError;
