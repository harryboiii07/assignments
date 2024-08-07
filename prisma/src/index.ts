import { PrismaClient } from "@prisma/client"; //import mongoose from "mongoose"
const prisma = new PrismaClient(); //mongoose.connect()

async function InsertUser(username : string,password: string, firstName: string, lastName: string){
  const res = await prisma.user.create({
    data : {
      username,
      password,
      firstName,
      lastName
    }
  })
  console.log(res);
}

//InsertUser("harshit@gmail.com","devharsh","harshit","chicholikar");

async function UpdateUser(username : string, firstName: string, lastName: string) {
  const res = await prisma.user.update({
    where : { username },
    data : {
      firstName,
      lastName
    }
  })
  console.log(res);
}

//UpdateUser("harshit@gmail.com","devanshu","chicholikar");

async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
        username: username
    }
  })
  console.log(user);
}

getUser("harshit@gmail.com");