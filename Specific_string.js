// string starts with specific char

function startsWith(string, startString) {
  let separate = string.split(" ");
  for (var i = 0; i < separate.length; i++) {
    if (separate[i] === startString) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(startsWith('sdfj','f'))