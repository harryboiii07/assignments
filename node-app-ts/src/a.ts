function greet(firstname : string){
  console.log("hello "+ firstname);
}
greet("harshit");

function sum(a : number,b : number) : number{
  return a + b;
}
const value = sum(4,5);
console.log("sum = ",value);

function isadult(age:number):boolean{
  if(age >= 18){
    return true;
  }
  return false;
}

function delayer(fn: () => void){
  setTimeout(fn,1000);
}