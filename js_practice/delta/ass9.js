const container = document.getElementById("container");

function createCard(title, fn) {
    const card = document.createElement("div");
    card.className = "card";

    const heading = document.createElement("h2");
    heading.textContent = title;

    const button = document.createElement("button");
    button.textContent = "Run";

    const resultDiv = document.createElement("div");
    resultDiv.className = "result";

    button.addEventListener("click", () => {
        resultDiv.textContent = fn();
    });

    card.appendChild(heading);
    card.appendChild(button);
    card.appendChild(resultDiv);

    container.appendChild(card);
}


/***************************************
1️⃣ Scope Difference
****************************************/
function scopeDemo() {
    var a = "var - function scoped";
    let b = "let - block scoped";
    const c = "const - block scoped & cannot reassign";
    return `${a} | ${b} | ${c}`;
}
createCard("1️⃣ let vs const vs var", scopeDemo);


/***************************************
2️⃣ Second Fruit
****************************************/
function secondFruit() {
    let fruits = ["Apple", "Blueberry", "Mango", "Orange", "Grapes"];
    return fruits[1];
}
createCard("2️⃣ Return Second Fruit", secondFruit);


/***************************************
3️⃣ Push & Pop
****************************************/
function pushPop() {
    let arr = [1, 2, 3];
    arr.push("New");
    arr.pop();
    return arr.join(", ");
}
createCard("3️⃣ Push & Pop", pushPop);


/***************************************
4️⃣ Square using map()
****************************************/
function squareNumbers() {
    let nums = [1, 2, 3, 4, 5];
    return nums.map(n => n * n).join(", ");
}
createCard("4️⃣ Square Numbers", squareNumbers);


/***************************************
5️⃣ Filter Odd Numbers
****************************************/
function oddNumbers() {
    let nums = [1, 2, 3, 4, 5, 6];
    return nums.filter(n => n % 2 !== 0).join(", ");
}
createCard("5️⃣ Filter Odd Numbers", oddNumbers);


/***************************************
6️⃣ Greeting Object
****************************************/
function greeting() {
    let person = {
        name: "Apurva",
        age: 22,
        occupation: "Web Developer"
    };
    return `Hi, I'm ${person.name}, ${person.age} years old ${person.occupation}`;
}
createCard("6️⃣ Object Greeting", greeting);


/***************************************
7️⃣ Rectangle Area
****************************************/
function rectangleArea() {
    let rect = { width: 10, height: 5 };
    return rect.width * rect.height;
}
createCard("7️⃣ Rectangle Area", rectangleArea);


/***************************************
8️⃣ Object Keys
****************************************/
function objectKeys() {
    let obj = { name: "John", age: 25, city: "Pune" };
    return Object.keys(obj).join(", ");
}
createCard("8️⃣ Object Keys", objectKeys);


/***************************************
9️⃣ Merge Objects
****************************************/
function mergeObjects() {
    let obj1 = { name: "John" };
    let obj2 = { age: 25 };
    return JSON.stringify(Object.assign({}, obj1, obj2));
}
createCard("9️⃣ Merge Objects", mergeObjects);


/***************************************
🔟 Sum using reduce()
****************************************/
function sumArray() {
    let nums = [10, 20, 30, 40];
    return nums.reduce((total, n) => total + n, 0);
}
createCard("🔟 Sum using reduce()", sumArray);
