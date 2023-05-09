var xvalue = document.getElementById('B').value
var yvalue = document.getElementById('C').value

document.getElementsByTagName('polygon')[0].points[0].x = 0
document.getElementsByTagName('polygon')[0].points[0].y = yvalue * 100/2.6458333333

document.getElementsByTagName('polygon')[0].points[1].x = xvalue * 100/2.6458333333
document.getElementsByTagName('polygon')[0].points[1].y = yvalue * 100/2.6458333333

document.getElementsByTagName('polygon')[0].points[2].x = xvalue * 100/2.6458333333
document.getElementsByTagName('polygon')[0].points[2].y = 0



previous = document.createElement('div')
previous.innerText = "in the previous example"
document.body.appendChild(previous)



var ele_c = document.createElement("div")
document.body.appendChild(ele_c)
var ele_b = document.createElement("div")
document.body.appendChild(ele_b)
var ele_a = document.createElement("div")
document.body.appendChild(ele_a)

var x1 = document.getElementsByTagName('polygon')[0].points[0].x
var y1 = document.getElementsByTagName('polygon')[0].points[0].y

var x2 = document.getElementsByTagName('polygon')[0].points[1].x
var y2 = document.getElementsByTagName('polygon')[0].points[1].y

var x3 = document.getElementsByTagName('polygon')[0].points[2].x
var y3 = document.getElementsByTagName('polygon')[0].points[2].y


var B = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
B = B*2.645833333333/100
B = B.toFixed(2)

var C = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2))
C = C*2.645833333333/100
C = C.toFixed(2)

var A = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2))
A = A*2.645833333333/100
A = A.toFixed(2)


ele_b.innerText = "B = "  + B
ele_c.innerText = "C = "  + C
ele_a.innerText = "A = "  + A


document.getElementById('B').addEventListener ("input", function (){
    
    var xvalue = document.getElementById('B').value
    document.getElementsByTagName('svg')[0].style.width = xvalue * 100/2.645833333 + 100 + "px"
    
    document.getElementsByTagName('text')[0].setAttribute("x", (xvalue * 100/2.645833333)/2 -40)
    document.getElementsByTagName('text')[1].setAttribute("x", (xvalue * 100/2.645833333) + 30)
    document.getElementsByTagName('text')[2].setAttribute("x", (xvalue * 100/2.645833333)/2 )

    document.getElementsByTagName('polygon')[0].points[1].x = xvalue * 100/2.6458333333
    document.getElementsByTagName('polygon')[0].points[2].x = xvalue * 100/2.6458333333

    var x2 = document.getElementsByTagName('polygon')[0].points[1].x
    var x3 = document.getElementsByTagName('polygon')[0].points[2].x

    var B = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    B = B*2.645833333333/100
    B = B.toFixed(2)

    var C = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2))
    C = C*2.645833333333/100
    C = C.toFixed(2)

    var A = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2))
    A = A*2.645833333333/100
    A = A.toFixed(2)


    ele_b.innerText = "B = "  + B
    ele_c.innerText = "C = "  + C
    ele_a.innerText = "A = "  + A

})




// var x1 = document.getElementsByTagName('polygon')[0].points[0].x
// var y1 = document.getElementsByTagName('polygon')[0].points[0].y

// var x2 = document.getElementsByTagName('polygon')[0].points[1].x
// var y2 = document.getElementsByTagName('polygon')[0].points[1].y

// var x3 = document.getElementsByTagName('polygon')[0].points[2].x
// var y3 = document.getElementsByTagName('polygon')[0].points[2].y


// var C = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
// C = C*2.645833333333/100
// C = C.toFixed(2)
// console.log(C)










