window.onload = () => {
  const myForm = document.getElementById("sort-type");

  myForm.addEventListener("submit", event => {
    event.preventDefault();
    const value = document.querySelector('input[name="sorter"]:checked').value;
    if (value.toLowerCase() === "blue") {
      setColor("blueBackground");
      showChoice(value);
    } else if (value.toLowerCase() === "green") {
      setColor("greenBackground");
      showChoice(value);
    } else if (value.toLowerCase() === "salmon") {
      setColor("salmonBackground");
      showChoice(value);
    } else if (value.toLowerCase() === "goldenrod") {
      setColor("goldenrodBackground");
      showChoice(value);
    } else if (value.toLowerCase() === "orchid") {
      setColor("orchidBackground");
      showChoice(value);
    } else {
      setColor("normalBackground");
      showChoice(value);
    }
  });

  let currentClass = null;

  const setColor = className => {
    console.log("SET CLASS TO", className);
    var element = document.getElementById("form-section");
    if (currentClass) {
      element.classList.remove(currentClass);
    }
    currentClass = className;
    element.classList.add(className);
  };
};

function showChoice(value) {
  const choiceDisplay = document.getElementById("user-choice");
  choiceDisplay.textContent = value;
}
