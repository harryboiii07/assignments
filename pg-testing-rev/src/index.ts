import { Client } from 'pg';

const client = new Client({
  connectionString : "postgres://postgres:mysecretpassword@localhost/postgres"
});

async function CreateTableUsers(){
  await client.connect();
  const result = await client.query(`
    CREATE TABLE users2 (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );  
  `)
  console.log(result);
}

//CreateTableUsers();

async function InsertUsersData(username : string , email : string , password : string ){
  await client.connect();
  const result = await client.query(`
    INSERT INTO users2 (username, email, password)
    VALUES('${username}','${email}','${password}');
  `) 
  console.log(result);
}

InsertUsersData("dinanath","dinulodu@gmail.com","ytrewq");
