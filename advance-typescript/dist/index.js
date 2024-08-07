"use strict";
function UpdateUser(updatesprops) {
    //db call to update user
}
const add = {
    street: "b-1704",
    location: "ahmedabad"
};
const rollnumber = {
    id: 1,
    num: 61,
};
const usersdata = {
    "harkirat": { age: 21, name: "harkirat" },
    "harshit": { age: 24, name: "harshit" }
};
//MAP(javasript concept)
const userdata1 = new Map();
userdata1.set("harkirat", { age: 21, name: "harkirat" });
userdata1.set("harshit", { age: 24, name: "harshit" });
const harshit = userdata1.get("harshit");
userdata1.delete("harkirat");
function handleevent(event) {
    console.log(`${event}`);
}
handleevent("click");
// handleevent("scroll") not permitted
