/*
Write a Node Program to encrypt and decrypt a text file data using XOR Cipher
Algorithm

(a) Input file name and key should be taken as command line input (Readline-Sync)
*/

const readlineSync = require('readline-sync');
const fs = require('fs');
const crypt = require('./encrypt');

const que = () => {
  const forEncrDecr = readlineSync.question(
    `Please provide the purpose encrypt('en') or decrypt('de') : `,
  );
  if (forEncrDecr === 'en') {
    const fileName = readlineSync.question(
      'Please provide the file names to encrypt: ',
    );
    crypt.forEncrypt(fileName);
    return;
  } else {
    const fileName = readlineSync.question(
      'Please provide the file names to decrypt: ',
    );
    crypt.forDecrypt(fileName);
    return;
  }
};

que()
