function minusOne(num){
  if(typeof Number(num)){
    num=num-1
    return num
  }
}

console.log(minusOne("Infinity"));

function  makeSentence(w1,w2,w3){
  return  console.log(w1 +w2+ w3)
}
makeSentence("hi "," iam ", " ramya" );

function getLastElement(arr){
    return arr[arr.length-1]
}
console.log(getLastElement([2,3,4]))