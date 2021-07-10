// let human = {
//     name: "Long",
//     favorite: "Playing game, taste new food, enjoy the life",
//     eat: function() {
//         alert("Im eating! Dont disturb me!")
//     },
// }
// human.eat()


// # Cho 1 mảng a = [1,8,-5,7,4,10,55,-6]
//     ## Hãy đếm và in ra số phần tử chẵn và số phần tử lẻ 
//     ## Hãy tính và in ra tổng các phần tử trong mảng
// # Cho người dùng nhập vào 1 số n kiểm tra n có phải số nguyên tố không ?

// Bài 1 
// let a = [1,8,-5,7,4,10,55,-6]
//         //  0                 a.length-1
// let chan = 0
// let le = 0
// for(let i = 0; i <a.length;i++) {
//     console.log(a[i])
//     if(a[i] % 2 == 0) {
//         chan++
//     }else {
//         le++
//     }
// }

// console.log(chan,le)

//Bài 2
// let n = Number(prompt("Enter a number"))
// let check = true
// for(let i = 2; i< n;i++) {
//     if(n % i == 0) {
//         check = false
//         break;
//     }
// }

// if(check == true) {
//     console.log("Đây là số nguyên tố")
// }else {
//     console.log("Đây không phải số nguyên tố")
// }