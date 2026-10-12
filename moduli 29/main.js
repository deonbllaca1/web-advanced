const buttoni = document.getElementById("btn1") as HTMLButtonElement | null;

if (buttoni) {
    buttoni.onclick = function() {
        alert("You clicked the button!");
    };
}

const namesOfPeople: string[] = ["Deoni", "Olta", "Elda", "Drini", "Donjeta"];

console.log(namesOfPeople);
var namesOfPeople = ["Deoni", "Olta", "Elda", "Drini", "Donjeta"];

console.log(namesOfPeople);[cite: 2]
console.log(namesOfPeople[2]);[cite: 1, 2]
console.log(namesOfPeople[4]);[cite: 1, 2]

namesOfPeople.push("Dielli");[cite: 1, 2]
console.log(namesOfPeople);[cite: 1, 2]
// metoda pop() e heq elementin e fundit ne array[cite: 3]
namesOfPeople.pop();[cite: 3]
console.log(namesOfPeople);[cite: 2, 3]

// metoda shift()[cite: 4]
namesOfPeople.shift();[cite: 4]
namesOfPeople.shift();[cite: 4]
namesOfPeople.shift();[cite: 4]
console.log(namesOfPeople);[cite: 4]