let res = 0;
const sum = (n) => {
  if (n === 1) return (res = res + 1);
  else {
    res += n;
    return sum(n - 1);
  }
};

sum(4);

console.log(res);
