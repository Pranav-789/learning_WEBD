const students = [
    {name : "pranav", marks : 67, passed : true},
    {name : "aakash", marks : 45, passed : false},
    {name : "tina", marks : 89, passed : true},
    {name : "raj", marks : 33, passed : false},
];

const newStudentArray = students.map(student =>{
    if(student.passed){
        return {
          ...student,
          name: student.name.toUpperCase(),
        };
    }
    else{
        return {
            ...student,
            remark: "needs improvement",
            name: student.name.toUpperCase()
        }
    }
})

console.log(newStudentArray)