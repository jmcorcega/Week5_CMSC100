
import mongoose from "mongoose";

// connection string
await mongoose.connect('mongodb://127.0.0.1:27017/ICS', { useNewUrlParser: true, useUnifiedTopology: true });

// Subject model
const Student = mongoose.model('students', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});

// the result parameter will contain a single object (the first matching document found
// if no matching document was found, result will be null
let data = await Student.find({ age: 17 });
console.log(data);

const newStudent = new Student({
    stdnum: "12345678",
    fname: "Juan",
    lname: "dela Cruz",
    age: 20
});
await newStudent.save();

process.exit();
