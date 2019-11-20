let person = {};
person.firstName = "April";
person.lastName = "Cound";
person.fullName = function(){
    return(this.firstName + " " + this.lastName)
}

let calculator = {
    operand01: -1,
    operand02: -1,
    add: function(a, b){
        return(a + b);
    },
    subtract: function(a, b){
        return(a - b);
    }
}

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;
calculator.multiply = function(a, b){
    return(a * b);
};

function divider(title) {
    console.log("\n====================================");
    console.log(title);
    console.log("====================================\n");
}

divider("Person: ");
console.log("First Name: ", person.firstName); 
console.log("Last Name: ", person.lastName);
console.log("Full Name: ", person.fullName());

divider("Calculator");
console.log("operand01 is the length of firstName:", calculator.operand01);
console.log("operand01 is the length of lastName:", calculator.operand02);
console.log("Add length of first and lastNames: ", calculator.add(calculator.operand01, calculator.operand02));
console.log("Subtract length of first and lastNames: ", calculator.subtract(calculator.operand01, calculator.operand02));
console.log("Multiply length of first and lastNames: ", calculator.multiply(calculator.operand01, calculator.operand02));