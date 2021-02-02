function putDash(string) {
  let each = string.split("");
  let even = "";
  for (var i = 0; i < each.length; i++) {
    if (each[i] % 2 == 0 && each[i + 1] % 2 == 0) {
      even += each[i] + "-";
    } else {
      even += each[i];
    }
  }
  return even;
}
