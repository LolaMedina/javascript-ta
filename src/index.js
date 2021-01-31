// complete the function
function palindrom(str) {
  // code goes here
  const sample = (str) => str.toLowerCase().replace(/[\W_]/g, '');
  const sampleStr = sample(str);
  return sampleStr.split('').every((s, i) => s === sampleStr[sampleStr.length - 1 - i]);
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
