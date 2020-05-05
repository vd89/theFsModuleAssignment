const readlineSync = require('readline-sync');
const fs = require('fs');

const crypt = (input, ke) => {
  var output = [];
  var key = ke;
  var charCode;

  for (var i = 0; i < input.length; i++) {
    charCode = input.charCodeAt(i) ^ key[i % key.length].charCodeAt(0);
    output.push(String.fromCharCode(charCode));
  }
  return output.join('');
};

const forEncrypt = (fName) => {
  if (fName !== '') {
    const key = readlineSync.question(
      'Please provide the Key for the Encryption: ',
    );
    fs.readFile(fName, (err, data) => {
      if (err) {
        throw err;
      }
      const nData = data.toString();
      const newData = crypt(nData, key);
      fs.writeFile(`${key}.en${fName}`, newData, (err) => {
        if (err) {
          throw err;
        }
        console.log(
          `The file is created with encrypted Key '${key}.en${fName}' is the file 😸 😸`,
        );
      });
    });
  } else {
    console.log(`Please prvide the file name to encrypt 🔥 ✊`);
  }
};

const forDecrypt = (fName) => {
  if (fName !== '') {
    const key = fName.split('.')[0];
    const newFileName = fName.split('.')[1];
    fs.readFile(fName, (err, data) => {
      if (err) {
        throw err;
      }
      const nData = data.toString();
      const newData = crypt(nData, key);
      fs.writeFile(`de${newFileName}.txt`, newData, (err) => {
        if (err) {
          throw err;
        }
        console.log(
          `The file is created with 'de${newFileName}.txt' with decryption 😃 😃`,
        );
      });
    });
  } else {
    console.log(`Please provide the File name to Decrypt ✊ 🔥 🔥`);
  }
};
module.exports = {
  crypt,
  forEncrypt,
  forDecrypt,
};
