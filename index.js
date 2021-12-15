
let p1 = document.getElementById("myText")
p1.style.fontSize = '50px';

var p2 = document.getElementById("myInput")
p2.addEventListener("keyup", func1);

var p3 = document.getElementById("myText2")
p3.innerText = "myTitle"
p3.classList.add("text")

function func1(){
    console.log(p2.valueA)
}


function myFunction() {
    var element = document.getElementById("myStatement");
    element.classList.toggle("mystyle");
 }