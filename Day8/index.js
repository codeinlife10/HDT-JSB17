let a = Number(prompt(`Enter a:`))
let b = Number(prompt(`Enter b:`))
let c = Number(prompt(`Enter c:`))
let d = b**2 - 4*a*c
if (a == 0) {
    if (b == 0) {
        if (c == 0) {
            alert(`The equation is true with all values of x.`)
        }
        if (c != 0) {
            alert(`The equation has no root.`)
        }
    }
    if (b != 0) {
        alert(`The equation has one root: x=${-c/b}`)
    }
}
else if (a != 0) {
    if (d > 0){
        alert(`The equation has two distinct roots: x=${(-b-Math.sqrt(d))/(2*a)} and x=${(-b+Math.sqrt(d))/(2*a)}.`)
    }else if (d == 0) {
        alert(`The equation has one root: x=${-b/(2*a)}.`)
    }else {
        alert(`The equation has no root.`)
    }
}
else {
    alert(`This is not an equation`)
}
