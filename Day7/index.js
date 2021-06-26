// Chúng ta sử dụng để xử lí các sự kiện xảy ra 
// trên trang web 
/*
1. Input  => Xử lí dữ liệu này như thế nào 
*/

// alert("Thong bao toi người dùng")


// Là 1 công cụ hữu dụng để debug 
// console.log(prompt("Enter number 1") * prompt("Enter number 2")) 

// Toán học 
// Hãy nhận vào 2 input người dùng và thực hiện tính toán 
// Sinh ra 1 định nghĩa gọi là biến

// let number1 = Number(prompt("Enter number 1")) // prompt cho phép nhập vào input của có kiểu string
// let number2 = Number(prompt("Enter number 2"))

// console.log(number1 + number2)
// Giá trị của biến có nhiều loại
/*
number 
string 
boolean

array 
object 
*/
/*
+ - * / % => / chia lấy phần nguyên , % chia lấy phần dư 
5/2 = 2 , 5 % 2 = 1 
*/

// Phân biệt 3 từ khóa let var const sau 

// Number
let num1 = 5
// + - * / %
// string
// + nối 2 chuỗi vào với nhau 
// let num2 = "5"
// let num3 = '5'
// // boolean kiểm tra điều kiện  
// let check1 = true 
// let check2 = false

// let name = prompt("Enter name")
// console.log("Hello" + " " + name)

// prompt cho phép người dùng nhập vào 1 giá trị kiểu String
// let a1 = Number(prompt("x  chuyen gio ->phut"))
// if (a1<0) {
//     console.log("wrong")
// } else {
//     console.log(`ban da nhap vao ${a1} gio->${a1*60} phut`)
// }

// function myFunction() {
//     var x, text;
//     x = document.getElementById("x").value;
//     let y = x*60
   
//   if (isNaN(x) || x < 1) {
//     text = "So x nhap vao khong hop le";
//   } else {
//     // text = "Ban da nhap vao x gio => y phut";
//     text = `Ban da nhap vao ${x} gio => ${y} phut`;
//   }
//   document.getElementById("demo").innerHTML = text;
// }

// Nếu trời mưa thì chạy vào nhà 
// boolean : true / false
// let a = 6
// if(a == 5) { // true 
//     console.log("Hello 1")
// }else {
//     console.log("Hello 2")
// }


// // Hãy kiểm tra 1 số là dương, âm hay là bằng 0 
// let b = Number(prompt("Enter number")) 

// if(b > 0) {
//     console.log("Đây là số dương")
// }else if(b == 0) {
//     console.log("Đây là số 0")
// }else if(b < 0){
//     console.log("Đây là số âm")
// }else { // Tất cả những trường hợp còn lại
//     console.log("Giá trị bạn vừa nhập k phải là 1 số")
// }

// Anh muốn khi nhập vào 1 đoạn text thì sẽ in ra "giá trị bạn vừa nhập k phải là 1 số"

// ==, >, <, >=, <=, != 

// let root1, root2;

// // lay gia tri cua nguoi dung
// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");
// let c = prompt("Enter the third number: ");

// // tinh d
// let d = b * b - 4 * a * c;

// if (d > 0) {
//     root1 = (-b + Math.sqrt(d)) / (2 * a);
//     root2 = (-b - Math.sqrt(d)) / (2 * a);

//     // ket qua
//     console.log(`Nghiem cua phuong trinh la ${root1} va ${root2}`);
// }else if (d == 0) {
//     root1 = root2 = -b / (2 * a);

//     // ket qua
//     console.log(`Pt có nghiệm kép ${root1}`); 
// }else {
//     console.log("Pt vô nghiệm")
// }


// alert(`Here is your equation: ax\u00b2+bx+c=0`)
// let a = Number(prompt(`Enter a:`))
// let b = Number(prompt(`Enter b:`))
// let c = Number(prompt(`Enter c:`))
// let d = b**2 - 4*a*c
// if (a == 0) {
//     if (b == 0) {
//         if (c == 0) {
//             alert(`The equation is true with all values of x.`)
//         }
//         if (c != 0) {
//             alert(`The equation has no root.`)
//         }
//     }
//     if (b != 0) {
//         alert(`The equation has one root: x=${-c/b}`)
//     }
// }
// else if (a != 0) {
//     if (d > 0){
//         alert(`The equation has two distinct roots: x=${(-b-Math.sqrt(d))/(2*a)} and x=${(-b+Math.sqrt(d))/(2*a)}.`)
//     }else if (d == 0) {
//         alert(`The equation has one root: x=${-b/(2*a)}.`)
//     }else {
//         alert(`The equation has no root.`)
//     }
// }
// else {
//     alert(`This is not an equation`)
// }


// // Làm những app liên quan ngân hàng
// let a = Number(prompt("Enter a"))
// let b = Number(prompt("Enter b"))
// let c = Number(prompt("Enter c"))

// if(a == 0) {
//     console.log("ABC")
// }else if(a != 0 && !isNaN(a)) {
//     console.log("DEF")
// }else{
//     console.log("Error")
// }

// fdfhdfjdh isNaN() => !true = false

// bx + c = 0
// b = c = 0 => Vô số nghiệm
// b = 0 && c != 0 => Vô nghiệm

// &&         ||
// let num5 = 2
// let num6 = 4
// if(num5 == 2 || num6 == 3) {
//     console.log("True")
// }
// true && false => false 
// if(num5 == 2 && num6 == 4) {
//     console.log("True")
// }

// if(//Biểu thức điều kiện => true) {

// }

// Yêu cầu các bạn in ra các số từ 1 -> 100
// console.log("1")
// console.log("2")
// Vòng lặp 
// for(let i = 1;i <= 1; i++) {
//     console.log(i)
// } 
// Anh muốn in từ 100 -> 0 

// for(let i = 100;i >= 0;i--) {
//     console.log(i)
// } 

// number, string, boolean, array 
// let per1 = "Nam"
// let per2 = "Long"
// let per3 = "Thành"
let arr1 = ["Nam","Long","Thành"]
arr1.push("Vuong Hung") // 4
for(let i = 0; i < arr1.length;i++) {
    console.log(arr1[i])
}
            //  0      1       2
// let arr2 = [1,3,"Nam",true]

// console.log(arr1[1])



// //C hoặc C++ 
// int a[64] = {1,2,3,4,5,"hiih"}

// CRUD
/* 
Create 
    let arr1 = ["Nam","Long","Thành"]
Read
    for(let i = 0; i < 3;i++) {
        console.log(arr1[i])
    }
Update     
    arr1[1] = "Minh"
    arr1[2] = "Thiện"
    arr1.push("Vuong Hung")
    
Delete
    // slice
*/ 

// for if 


// Tự dưng a lú quá :)) 
// Các bạn chạy thử đoạn code này sẽ thấy nó in ra a = NaN => Không phải lỗi nha các bạn 
// Chính vì vậy nên trường hợp so sánh a != 0 tức là so sánh NaN != 0 => true 
// Vậy ta có 1 cách để so sánh ở đây là thay vì sử dụng != 
// Ta sẽ sử dụng !== . Sự khác nhau là k chỉ so sánh giá trị mà còn so sánh kiểu dữ liệu nữa  
// Các bạn chạy thử để thấy cái khác nhé :)
let a = Number(prompt('Enter a:'))
console.log(a)
if(a !== 0) {
    console.log("Hello")
}