let funcExpression = function() {
  console.log("Hello Typescript");
};

funcExpression();

let add = function(numValue1: number, numVaulue2: number): number {
  return numValue1 + numVaulue2;
};

let result = add(2, 2);
console.log(result);
