/*
Write a Node Program to encrypt and decrypt a text file data using XOR Cipher
Algorithm

(a) Input file name and key should be taken as command line input (Readline-Sync)
*/

const readlineSync = require('readline-sync');
const fs = require('fs');
const crypt = require('./encrypt');

const fileName = readlineSync.question('Please provide the file names: ');

if (fileName !== '') {
  const key = readlineSync.question(
    'Please provide the Key for the Encryption: ',
  );
  console.log(key);
  // console.log(fileName.split(' '));
  fs.readFile(fileName, (err, data) => {
    if (err) {
      throw err;
    }
    const nData = data.toString();
    const newData = crypt(nData, key);
    // console.log(newData);
    fs.writeFile('newFile.txt', newData, (err) => {
      if (err) {
        throw err;
      }
      console.log(`The file is created with encrypted Key 😸 😸`);
    });
  });
} else {
  console.log(`Please prvide the file name to encrypt 🔥 ✊`);
}
