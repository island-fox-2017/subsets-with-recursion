function choose_team(n,k) {

  if(k == 1) {
    return n
  }
  else if(n == k) {
    return 1
  }
  else {
    return choose_team (n-1, k-1) + choose_team (n-1, k)
  }
}


console.log(choose_team(6, 2));
console.log(choose_team(6, 3));
console.log(choose_team(24, 4));
console.log(choose_team(18, 3));


//rumus ini dalam perhitungan matematika disebut rumus kombinasi C(n,k), 
//yaitu susunan yang tidak memperhatikan urutannya
//               n!     
// C(n,k) = ------------
//           (n-k)! k!
