let choose_team = (n, k) => {
  //write your code here
  if(n<k ){
    return 'you only have 1 person, you cant make more than 1 team ';
  } else if(k === 1){
    return n
  } else if(n === k){
    return 1
  }
  return  choose_team(n-1, k-1) + choose_team(n-1,k)
}

console.log('aaa', choose_team(1, 2));
console.log('bbb', choose_team(6, 3));
console.log('ccc',choose_team(24, 4));
