// let j = 0
// let arr = []
// for (let i = 0; i < 5;i++) {
//     if(i == j) {
//         arr.push(++j)
//     }
// }
// console.log(arr)

// // 0 
// // j++ => Dùng rồi mới tăng 
// // ++j => Tăng rồi mới dùng 

// let a = 5 
// // let b = a + 6
// // let c = a + b
// let d = 2
// // d += a
// // CRUD
// d = d + a // <=> d += a
// d = d / a // <=> d /= a

// // console.log(a,b,c) 
// // a = ? , b = ?


// DOM
console.log(document) 

// Create 
// get by ID
// let status = document.getElementById('status')
// // Read
// console.log(status)
// console.dir(status)

// console.log(status.innerText)

// console.log(status.innerHTML)
// Update
// status.innerText = "Online"

// let html = ` <span>Hello World</span>`
// // Thay đổi hoàn toàn nội dung 
// status.innerHTML = html
// // Thêm vào 
// status.innerHTML += html 

// get by class
// let status = document.getElementsByClassName('status')
// console.log(status)


// Add and hanlde event
let $status = document.getElementById('status')
let $btn = document.getElementById('btn')

// addEventListener là 1 function nhận vào 2 tham số : event, action(handle event)  
$btn.addEventListener('click',() => {
    $status.innerText = "I changed"
})

// regular function
// function sum(a,b){
    // return a + b
// } 

// ES6 => arrow function 
// const sum = (a,b) => (
//     // Object
//     {
//     "DaylaObject": 1
//     }
// ) 

// this => Khóa sau nhé !!
// Phân biệt this trong regular và arrow function in js 
// callback chỉ thực hiện khi hành động trước thực hiện xong 
// callback sinh ra để xử lí bất đồng bộ 
// Tìm hiểu về bất đồng bộ và đồng bộ 


// DOM => Thay đổi nội dung html, xử lí sự kiện, css 

// css => hình thức tĩnh 
// js => hình thức động 
// $status.style.color = "red"
// $status.style.backgroundColor = "..."


// Bài tập trên lớp
// Tạo 1 hình vuông có cạnh 50px có nền màu đỏ có 1 đoạn text tùy chọn bên trong
// Khi click vào hình vuông đó nền sẽ chuyển sang màu xanh 
// Hình vuông sẽ lớn lên có cạnh 150px và chữ sẽ chuyển ra giữa 
// Nội dung trong đó chuyển thành "Tôi bị bấm" 
// Trong hình vuông lớn sẽ có 1 hình vuông nhỏ cạnh 25px nền màu "grey"


// Trung Thành - Phạm Minh 
// Vương Hưng - Đức Thiện 


// Có thể tự thiết kế 
// Làm lại 1 trang web của người khác 
// Ý tưởng : 
// _ Xuất phát từ đâu ? Giải quyết vấn đề gì 
// _ Các bạn hãy tập trung vào phát triển giao diện - HTML/CSS
// => Khóa 1 làm giao diện thật đẹp 
// => Thêm chức năng vào 
// Trước buổi học tuần sau phải đưa ra dc ý tưởng + giao diện 