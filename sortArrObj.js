// sorting array of objects

function sortArrObj(obj) {
  let sort = obj.sort(function (a, b) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    if (a.title == b.title) return 0;
  });
  return sort;
}
let arr=[{title:'v'},{title:'darr'}]
console.log(sortArrObj(arr))