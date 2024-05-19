process.stdin.setEncoding('utf-8');
const crypto = require("crypto")

let method = process.argv[2];
let a = process?.argv[3];
let b = process?.argv[4];
if(method == "add"){
  console.log(a+b);
}
else if(method == "divide"){
  console.log(a/b);
}
else if(method == "mul"){
  console.log(a*b);
}
else if(method == "sub"){
  console.log(a-b);
}
else if(method == "sin"){
  console.log(Math.sin(a));
}
else if(method == "cos"){
  console.log(Math.cos(a));
}
else if(method == "tan"){
  console.log(Math.tan(a));
}
else if(method == "random"){
  console.log(crypto.randomInt(100));
}

