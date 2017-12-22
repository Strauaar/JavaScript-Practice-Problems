const uniq = (string) => {
  let first_ch = string[0];
  let array = string[1, string.length - 1].split('');
  if (array.includes(first_ch)) {
    return false
  } else {
    uniq(string[1, string.length - 1])
  }
  return true
};

console.log(uniq("asd"));

const reverse = (string) => {
  let result = '';
  for(let i = string.length - 1; i >= 0; i--) {
    result = result.concat(string[i])
  }
  return result
};

console.log(reverse("asd"));
