//write a function to create a users table in your database

import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://test_owner:SK6G0ZFJgNBX@ep-patient-dream-a5jodft0.us-east-2.aws.neon.tech/test?sslmode=require"
})



async function createUsersTable(){
  await client.connect()
  const result = await client.query(`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  )`)
  console.log(result);
}

async function InsertUserTableData(){
  await client.connect()
  const result = await client.query(`INSERT INTO users (username, email, password)
  VALUES ('harshit', 'harshit@gmail.com', 'devharsh01');`)
  console.log(result);
}

InsertUserTableData();
//createUsersTable();