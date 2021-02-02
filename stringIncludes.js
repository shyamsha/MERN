// find char in string

function stringIncludes(string, character) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      return true;
    }
  }
  return false;
}

console.log(stringIncludes('skajfklsd','f'))
