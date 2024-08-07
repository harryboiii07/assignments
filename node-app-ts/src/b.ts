function islegal(user : {
  firstname : string,
  lastname : string,
  email : string,
  age : number
}):boolean{
  if(user.age >= 18){
    return true;
  }
  return false;
}

//or 

interface User{
  firstname : string,
  lastname : string,
  email ?/*(optional)*/ : string,
  age : number
}

function islegal(user : User) : boolean{
  if(user.age >= 18){
    return true;
  }
  return false;
}


islegal({
  firstname : "harskirat",
  lastname : "singh",
  email : "harkiratsingh@gmail.com",
  age : 11,
})
islegal({
  firstname : "harshit",
  lastname : "chicholikar",
  age : 11,
})