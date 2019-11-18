const simpleObject = {
    sayName: function(){
        console.log("Simple Object");
    }
}

simpleObject.dynamicMethod = function(){
    console.log("Dynamic Method");
}

// constructor function: uses Pascal case
 function FunctionObject() {
    FunctionObject.prototype.sayName = function() {
        console.log("The name of this function is FunctionObject, a constructor function.");
    }
}

class CustomClass {
    sayName(){
        console.log("Custom class");
    }
}

simpleObject.sayName();
simpleObject.dynamicMethod();
const functionObject = new FunctionObject();
functionObject.sayName();
const customClass = new CustomClass();
customClass.sayName();