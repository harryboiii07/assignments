//enums
enum direction {
  "up",
  "down",
  "left",
  "right"
}

function dosomething(keypressed : direction){
  if(keypressed == direction.up){
    //up logic
  }
  if(keypressed == direction.down){
    //down logic
  }
  if(keypressed == direction.left){
    //left logic
  }
  if(keypressed == direction.right){
    //right logic
  }
}

dosomething(direction.up);

enum Direction {
  Up = 1,
  Down, // becomes 2 by default
  Left, // becomes 3
  Right // becomes 4
}

//can be made strings too
enum Direction {
  Up = "UP",
  Down = "Down",
  Left = "Left",
  Right = 'Right'
}

//generics
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);
