var x1 = document.getElementsByTagName('polygon')[0].points[0].x
var y1 = document.getElementsByTagName('polygon')[0].points[0].y

var x2 = document.getElementsByTagName('polygon')[0].points[1].x
var y2 = document.getElementsByTagName('polygon')[0].points[1].y

var x3 = document.getElementsByTagName('polygon')[0].points[2].x
var y3 = document.getElementsByTagName('polygon')[0].points[2].y


var C = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
C = C*2.645833333333/100
C = C.toFixed(2)
console.log(C)

ele_c = document.createElement("div")
ele_c.innerText = "C = "  + C

var B = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2))
B = B*2.645833333333/100
B = B.toFixed(2)
console.log(B)

ele_b = document.createElement("div")
ele_b.innerText = "B = "  + B

var A = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2))
A = A*2.645833333333/100
A = A.toFixed(2)
console.log(A)

ele_a = document.createElement("div")
ele_a.innerText = "A = "  + A

var br = document.createElement("br");
document.body.appendChild(br);

previous = document.createElement('div')
previous.innerText = "in the previous example"
document.body.appendChild(previous)

document.body.appendChild(ele_c)

document.body.appendChild(ele_b)

document.body.appendChild(ele_a)