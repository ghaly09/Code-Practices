function calculateMultiply(num1, num2) {
    // you can only write your code here!
    return (num1*num2)
  }
  
  // do not change this code
  var fs = require("fs");
  var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
  var a = parseInt(input[0]);
  var b = parseInt(input[1]);
  
  var num1 = a;
  var num2 = b;
  
  var hasilPerkalian = calculateMultiply(num1,num2);
  console.log(hasilPerkalian);