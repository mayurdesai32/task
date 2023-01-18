const fs = require('fs');

const fileError = (error) => {
  fs.appendFile('./customError.txt', `error:-  ${error}  \n`, () => {
    console.log('error found on file ');
  });
};

module.exports = fileError;
iouoiuouooui;
