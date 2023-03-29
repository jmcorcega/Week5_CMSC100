import {homepage, findStudents, findSubjectsPost, addStudent, updateStudent, deleteStudent} from './controller.js'


const router = (app) =>{
    app.get('/',homepage);
    app.get('/find-students',findStudents);
    app.post('/find-students-post',findSubjectsPost);
    app.post('/add-student', addStudent);
    app.post('/update-student', updateStudent);
    app.post('/delete-student', deleteStudent);
}

export default router;