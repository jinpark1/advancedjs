function double(x) {
  if (!Number.isInteger(x)) {
    throw new Error(`${x} is not an integer!`)
  }
  return x * 2;
}

function plus5(x) {
  return x + 5;
}

const result = plus5(double('bryson'))

console.log('-------------- result', result);