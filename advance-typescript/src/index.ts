//----------------PICK-------------------//
interface User{
  id : string,
  name : string,
  age : number,
  email : string,
  password : string
}

type updateprops = Pick <User, "name" | "email" | "age" >

function UpdateUser(updatesprops : updateprops) : void {
  //db call to update user
}

//-----------PARTIAL------------------//
type propsoptional = Partial <User>

/*type propsoptional = {
  id? : string,
  name? : string,
  age? : number,
  email? : string,
  password? : string
}
*/

//----------READONLY (cant change elements of an object)--------//

type address = {
  readonly street : string,
  readonly location : string
}

const add : address = {
  street : "b-1704",
  location : "ahmedabad"
}
//or
type rollno = {
  id : number,
  num : number,
}

const rollnumber : Readonly <rollno> = {
  id : 1,
  num : 61,
}

//add.street = "b-402" (not permitted)


//----------------RECORD-----------------//
interface user1{
  age : number,
  name : string
}

type datatype = Record <string, {age : number , name : string}>

const usersdata : datatype = {
  "harkirat" : {age : 21, name : "harkirat"},
  "harshit" : {age : 24 , name : "harshit"}
}

//--------------MAP(javasript concept)------------//
const userdata1 = new Map <string,user1>();
userdata1.set("harkirat" , { age: 21, name: "harkirat" })
userdata1.set("harshit" , { age: 24, name: "harshit" })

const harshit = userdata1.get("harshit");
userdata1.delete("harkirat");

//-------------------EXCLUDE---------------//
type eventtype = "click" | "scroll" | "move";
type excludeeventtype = Exclude <eventtype ,"scroll">
function handleevent(event : excludeeventtype){
  console.log(`${event}`);
}
handleevent("click")
// handleevent("scroll") not permitted


//-----------INFERRING TS TYPES FROM ZOD SCHEMA-----------//
import { infer, z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

type finaluserschema = z.infer <typeof userProfileSchema>; //inferring ts type from zod schema

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody : finaluserschema = req.body; // assigning a ts type to updateBody

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);