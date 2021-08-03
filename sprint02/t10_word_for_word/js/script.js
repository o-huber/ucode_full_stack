let d, a, arr, strA;

function clean(words) {
  a = words.trim().split(' ');
  while ((d = a.indexOf('')) !== -1)
    a.splice(d, 1);
  const unique = new Set(a);
  return [...unique];
}

function removeDouble(arr, str) {
  d = arr.indexOf(str);
  while (d !== -1) {
    arr.splice(d, 1);
    d = arr.indexOf(str, d + 1);
  }
}

function addWords(obj, str) {
  arr = clean(obj.words);
  strArr = clean(str);

  for (let i in strArr) {
    d = arr.indexOf(strArr[i]);
    if (d === -1)
      arr.push(strArr[i].trim());
  }
  obj.words = arr.join(' ');
}

function removeWords(obj, str) {
  arr = clean(obj.words);
  strArr = clean(str);
  for (let i in strArr) {
    removeDouble(arr, strArr[i]);
  }
  obj.words = arr.join(' ');
}

function changeWords(obj, str1, str2) {
  removeWords(obj, str1);
  addWords(obj, str2);
}

const obj = {
  words: 'newspapers newspapers books magazines'
};
console.log(obj); // {words: "newspapers newspapers books magazines"}

addWords(obj, 'radio newspapers');
console.log(obj); // {words: "newspapers books magazines radio"}

removeWords(obj, 'newspapers radio');
console.log(obj); // {words: "books magazines"}

changeWords(obj, 'books radio magazines', 'tv internet');
console.log(obj); // {words: "tv internet"}
