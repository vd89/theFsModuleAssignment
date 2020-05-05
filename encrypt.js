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

module.exports = crypt
