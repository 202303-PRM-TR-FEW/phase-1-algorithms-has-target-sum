function hasTargetSum(array, target) {
  const seen = new Set();
  for(const number of array){
    const complemnet = target - number;

    if(seen.has(complemnet)) return true;

    seen.add(number) 
  }
  return false
}



/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 12, 7], 15));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 8], 20));

  console.log("");

  console.log("Expecting:3 false");
  console.log("=>", hasTargetSum([3], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 5], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
