// Từ khóa khai báo biến
// VAR

// var a = 10;
// // khai báo lại
// var a = 20;
// // gán lại giá trị
// a = "Hello";
// console.log(a);

// // LET

// let a = 10;
// // gán lại giá trị
// a = 20;
// console.log(a);

// // CONST

// const a = 10;
// console.log(a);

// Phạm vi biến
// Global scope
// Block scope ({})
// FUnction scope (local scope)

// TODO: tìm hiểu cách sử dụng của debugger
// debugger;
// let a = 20;
// console.log(a);

// Template string

// Hàm có sẵn trong ES6

// let arr = [1, 2, 3, 4, 5];

// MAP

// let newArr = arr.map((value, index) => value * 2)
// console.log(newArr);

// FILTER

// let newArr = arr.forEach((value, index) => console.log(value * 2);)

// // Chuyển hàm map & forEach thành for thường

// // MAP => for thường
// // Tạo ra một mảng mới (mảng rỗng)
// // Chạy vòng lặp để thêm tương ứng kết quả chạy hàm với từng phần tử của mảng ban đầu vào mảng mới
// // Sử dụng console.log để in ra kết quả của mảng mới
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr[i] = arr[i] * 2;
// }
// console.log(newArr);

// // FOREACH => for thường
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }

// FILTER

// let filteredArr = arr.filter((value, index) => value % 2 === 0);
// console.log(filteredArr);
// FIND

// let findInArr = arr.find((value, index) => value === 2);
// console.log(findInArr);

// Chuyển hàm filter và hàm find thành hàm for thường

// // FILTER => for thường
// let filteredArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         filteredArr.push(arr[i]);
//         }
// }
// console.log(filteredArr)

// // FIND => for thường
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] === 2) {
//         console.log(arr[i]);
//     } else continue
// }

// Arrow function

// Destructuring
// Array
// let arr = [10, 20, 30, 40, 50, 60];

// // Lấy ra toàn bộ
// let [a, b, c, d, e, f] = arr;
// console.log(b, c, d)
// Lấy ra những đối tượng cần thiết
// let [a, ,c, d, ,,] = arr;
// console.log(a, c, d);

// Object
// let people = {
//     firstName: "Thịnh",
//     age: 20,
// }
// // Phải viết key đúng như tên key trong object thì mới có thể destructuring ra được

// let {firstName, age} = people;
// console.log(firstName, age);

// Spread operator
// Array
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2];
// console.log(...arr1, ...arr2);
// console.log(arr3);
// => khi sử dụng dấu... lấy ra các phần tử trong mảng và trả ra

// Object
// let people = {
//     firstName: "Thịnh",
//     age: 20,
// }


// // Thêm address cho đối tượng ban đầu
// let peopleWithAddress = {...people, address: "Hà Nội"}
// console.log(peopleWithAddress);

// // Ghi đè/(cập nhật lại) key là age
// people = {...people, age: 31};
// console.log(people)

// Rest parameter
// Thông thường
// TODO: hỏi thầy Phú tại sao kết quả khi chạy 2 hàm song song với nhau lại ra output phía trên là
// 10 20
// [30]
function f(param1, param2, param3) {
    console.log(param1, param2, param3);
}
f(10, 20, 30)
// rest parameter
// function f(param1, param2, ...param) {
//     console.log(param1, param2);
//     console.log(param);
// }

// rest parameter dùng để truyền nhiều đối số vào trong hàm, các đối số này được truyền vào thông qua một mảng đặt tên là param
// dùng dấu tương tự như spread operator (...) để LẤY RA tất cả các phần tử trong mảng param
function f(param1, param2, ...param){
    let sum = param1 + param2;
    for (let i = 0; i < param.length; i++) {
        sum += param[i];
    }
    return console.log(sum);
}
f(10, 20, 30, 40, 50, 60)

const nameUser = "Vân Anh"
const age = 20;
// Cách khai báo truyền thống
// let people = {
//     nameUser: nameUser,
//     age: age
// }
// Cách khai báo ngắn gọn trong ES6 (sử dụng ngay tên biến đã khai báo làm key)
// Chức năng này được gọi là Enhanced Object Literals
// let people = {
//     nameUser,
//     age
// }

// named import
import { sum } from './module.js';
console.log(sum(a,b))

// import default

import PI from './module.js'

console.log(PI)