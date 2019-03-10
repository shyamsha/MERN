let name = 'aeiou syam kumar'
let count = 0
for (const c of name) {
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        count += 1
    }
}
console.log(count);
