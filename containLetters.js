console.log('start Program');

const containLetters = (letter1, letter2) => {
  let temp = true;
  let ltrArray = letter1.toLowerCase().split('');

  for( var i =0; i<=ltrArray.length-1; i++ ){
    if (temp===false) break;
    temp=(letter2.toLowerCase().split('').indexOf(ltrArray[i])>=0) ? true : false;
  }
  return temp;
};

console.log(containLetters('cat','antartica'));
console.log(containLetters('cat','australia'));
console.log(containLetters('cat','ANTARTICA'));
