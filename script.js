
console.log("Daniruly Abubakir");
console.log("SE-2527");

if (window.location.pathname.endsWith("index.html")) {
    alert("Hello, JavaScript World!");
}




let name = "Abubakir";
let age = 18;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);


let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// String concatenation
let firstName = "Abubakir";
let lastName = "Daniaruly";

console.log(firstName + " " + lastName);





function changeText() {
    document.getElementById("text").innerText = "Text changed!";
}






function changeColor() {
    document.getElementById("box").style.backgroundColor = "lightblue";
}

function changeSize() {
    document.getElementById("box").style.fontSize = "30px";
}






let count = 1;

function addItem() {
    count++;

    let item = document.createElement("li");
    item.innerText = "Item " + count;

    document.getElementById("list").appendChild(item);
}

function removeItem() {
    let list = document.getElementById("list");

    if (list.lastElementChild) {
        list.lastElementChild.remove();
    }
}









function mouseOver() {
    document.getElementById("mouseBox").style.backgroundColor = "yellow";
}

function mouseOut() {
    document.getElementById("mouseBox").style.backgroundColor = "lightblue";
}






function showText() {
    let text = document.getElementById("myInput").value;

    document.getElementById("result").innerText = text;
}







// Task 7 - Calculator

function calculate(operator) {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let result;

    if (operator == "+") {
        result = a + b;
    } else if (operator == "-") {
        result = a - b;
    } else if (operator == "*") {
        result = a * b;
    } else if (operator == "/") {
        if (b == 0) {
            result = "Cannot divide by zero";
        } else {
            result = a / b;
        }
    }

    document.getElementById("answer").innerText = "Result: " + result;
}









// Task 8 - To-Do List

let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (text == "") {
        return;
    }

    tasks.push(text);
    showTasks();

    input.value = "";
}

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(function(task, index) {
        let li = document.createElement("li");

        li.innerText = task + " ";

        li.onclick = function() {
            li.style.textDecoration = "line-through";
        };

        let button = document.createElement("button");
        button.innerText = "Delete";

        button.onclick = function(event) {
            event.stopPropagation();
            tasks.splice(index, 1);
            showTasks();
        };

        li.appendChild(button);
        list.appendChild(li);
    });
}
