let choose_team = (n, k) => {
  //write your code here
  if (n==k) {
    return 1
  }
  else if (k==1) {
    return n
  }
  else {
    return choose_team(n-1, k-1) + choose_team(n-1,k)
  }
}

// console.log(choose_team(6, 2));
// console.log(choose_team(6, 3));
// console.log(choose_team(24, 4));

console.log(choose_team(4,2));
