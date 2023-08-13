let shoppingList = new Array();

shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Apples");

shoppingList.splice(shoppingList.indexOf("Bread"), 1, "Bananas", "Egge");

shoppingList.pop();

// shoppingList = shoppingList.sort();

console.log(shoppingList.indexOf("Milk"));

shoppingList.splice(shoppingList.indexOf("Banans"), 0, "Carrots", "Lettuce");

let newList = ["Juice", "Pop"];

shoppingList = shoppingList.concat(newList).concat(newList);


console.log(shoppingList);
console.log(shoppingList.length - (shoppingList.reverse().indexOf("Pop") + 1));