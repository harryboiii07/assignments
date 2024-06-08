const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:KGTM5SImpmIqenme@cluster0.matwpjf.mongodb.net/course_selling_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    purchasedcourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref :  "Course",
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    imagelink : String,
    Price : Number,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}