const someParam = "Many functions take parameters.";

function simpleFunction() {
  console.log(
    "Functions should consist of statements designed to perform a single task."
  );
  simpleFunctionDisplay.textContent =
    "Functions should consist of statements designed to perform a single task.";
}

function functionParameters(singleParam) {
  console.log(singleParam);
  functionParametersDisplay.textContent = singleParam;
}

function functionReturn() {
  const someString = "Many functions return values.";
  functionReturnDisplay.textContent = someString;
  return someString;
}

window.onload = () => {
  const simpleFunctionDisplay = document.getElementById(
    "simpleFunctionDisplay"
  );
  const functionParametersDisplay = document.getElementById(
    "functionParametersDisplay"
  );
  const functionReturnDisplay = document.getElementById(
    "functionReturnDisplay"
  );
  const functionCallsAction = document.getElementById("functionCallsAction");
  functionCallsAction.onclick = function() {
    simpleFunction();
    functionParameters(someParam);
    functionReturn();
  };

  const listButton = document.getElementById("addToListAction");

  listButton.onclick = () => {
    const newList = document.getElementById("listDisplay");
    // let name = document.getElementById("nameDisplay");
    addToList.appendToList(newList, nameDisplay.value);
  };

  const addToList = {
    appendToList: (list, name) => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(name));
      list.appendChild(li);
    }
  };
};
