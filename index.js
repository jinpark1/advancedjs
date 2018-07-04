function double(x) {
    if (!Number.isInteger(x)) {
      throw new Error(`${x} is not an integer!`)
    }
    return x * 2;
  }
  
  function plus5(x) {
    return double(x + 5);
  }
  
  let result
  try {
    plus5('bryson')
  } catch (error) {
    console.log('WE CAUGHT THE ERROR!', error)
  }
  
  console.log('-------------- result', result);