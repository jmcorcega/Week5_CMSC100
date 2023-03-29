import needle from "needle";

needle.post("http://localhost:3000/add-student/", {
    stdnum: "12345678",
    fname: "Juan",
    lname: "dela Cruz"
}, (req, res) => {
    console.log(res.body);
});

needle.post("http://localhost:3000/find-students-post/", { age: 20 }, (req, res) => {
    console.log(res.body);
});

needle.post("http://localhost:3000/update-student/", {
    stdnum: 4938779315,
    newInfo: {
        fname: "Juan"
    }
}, (req, res) => {
    console.log(res.body);
});
