import mongoose from 'mongoose';

await mongoose.connect("mongodb://127.0.0.1:27017/ICS",{
    useNewUrlParser: true, useUnifiedTopology: true
});

const Student = mongoose.model('Student',{
    stdnum : String,
    fname: String,
    lname: String,
    age: Number
});

const homepage = (req,res) => {
    res.send('Welcome to the Homepage');
}

const findStudents = async (req, res) => {
    res.send(await Student.find({fname: req.query.fname }));

}

const findSubjectsPost = async (req,res) => {
    res.send(await Student.find({age:req.body.age}));

}

const addStudent = async (req,res) => {
    try {
        let newStudent = new Student({
            stdnum: req.body.stdnum,
            fname: req.body.fname,
            lname: req.body.lname,
            age: req.body.age
        });

        res.send(await newStudent.save());
    } catch(err) {
        res.status(500).send(err.message);
    }
}

const updateStudent = async (req, res) => {
    let toUpdate = await Student.findOne({stdnum: req.body.stdnum});
    console.log(toUpdate);
    if (toUpdate == null) {
        res.send("Not found");
        res.status(404).send();
        return;
    }

    let info = req.body.newInfo;
    if (info == undefined) {
        res.send("Information undefined");
        res.status(400).send();
        return;
    }

    if (info.stdnum != undefined) toUpdate.stdnum = info.stdnum;
    if (info.fname != undefined) toUpdate.fname = info.fname;
    if (info.lname != undefined) toUpdate.lname = info.lname;
    if (info.age != undefined) toUpdate.age = info.age;

    try {
        res.send(toUpdate.save());
    } catch(err) {
        res.send("Server error");
        res.status(500).send(err.message);
    }
}

const deleteStudent = async (req, res) => {
    res.send(await Student.deleteOne({stdnum: req.body.stdnum}));
}

export {homepage, findStudents, findSubjectsPost, addStudent, updateStudent, deleteStudent}
