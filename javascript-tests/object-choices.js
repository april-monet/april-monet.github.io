
window.onload = () => {

    
    const simpleObject = {
        firstName: "James",
        lastName: "Watson",
        sayName: function(){
            console.log(this.firstName, + " " + this.lastName);
            return(this.firstName + " " + this.lastName);
        }
    }
    
    simpleObject.dynamicMethod = function(){
        console.log("Dynamic Method");
        return("This is a dynamically generated method on simpleObject.");
    }
    
    // constructor function: uses Pascal case
    function FunctionObject() {
        FunctionObject.prototype.sayName = function() {
            console.log("The name of this function is FunctionObject, a constructor function.");
            return("The name of this function is FunctionObject, a constructor function.");
        }
    }
    
    
    class CustomClass {
        sayName(){
            console.log("Custom class");
            return("Custom class");
        }
    }
    
    const functionObject = new FunctionObject(); 
    const customClass = new CustomClass();
    // simpleObject.dynamicMethod();

    const objectLiteralButton = document.getElementById('simpleObjectAction');
    const functionButton = document.getElementById('functionObjectAction');
    const customClassButton = document.getElementById('customClassAction');
    const dynamicMethodButton = document.getElementById('dynamicMethodAction');

    objectLiteralButton.onclick = () => {
        simpleObjectDisplay.textContent = simpleObject.sayName();
    }
    functionButton.onclick = () => {
        functionObjectDisplay.textContent = functionObject.sayName();
    }
    customClassButton.onclick = () => {
        customClassDisplay.textContent = customClass.sayName();
    }   
    dynamicMethodButton.onclick = () => {
        dynamicMethodDisplay.textContent = simpleObject.dynamicMethod();
    }
}
