// const fs = require("fs");
const { sum,sub } = require("./custom_module/math");
// fs.readFile("./Mindx_1.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("error of fs function: ", err);
//   }
//   console.log("data: ", data);
// });

// // CRUD : create , delete, update, read
// const data = fs.readFileSync("./students.json");
// // console.log("data: ", JSON.parse(data));

// const students = JSON.parse(data);
// const newStudent = {
//   id: 2,
//   name: "Giap",
//   gender: "F",
// };
// students["data"].push(newStudent);
// fs.writeFileSync('./students.json',JSON.stringify(students));

console.log(sub(1, 2));
