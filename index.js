function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = -1 ; i < array.length; i++){
    for(let j = i+1; j < array.length; j++){
      // console.log(`i ${i}  j ${j}`)
      let result = array[i] + array[j] 
      if (result === target){
        return true
      }
      if((i + 2 === array.length && result !== target)){
        return false
      }
    }
  }
 
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
