const feetPerMile = 5280;

window.onload = () => {
  const feetToInchesAction = document.getElementById("feetToInchesAction");

  feetToInchesAction.onclick = () => {
    const feetToInchesInput = document.getElementById("feetToInchesInput");
    const feetToInchesDisplay = document.getElementById("feetToInchesDisplay");

    feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
  };

  const milesToFeetAction = document.getElementById("milesToFeetAction");

  milesToFeetAction.onclick = () => {
    const milesToFeetInput = document.getElementById("milesToFeetInput");
    const milesToFeetDisplay = document.getElementById("milesToFeetDisplay");

    milesToFeetDisplay.textContent = milesToFeet(milesToFeetInput.value);
  };

  const areaOfTriangleAction = document.getElementById("areaOfTriangleAction");

  areaOfTriangleAction.onclick = () => {
    const areaOfTriangleInputBase = document.getElementById(
      "areaOfTriangleInputBase"
    );
    const areaOfTriangleInputHeight = document.getElementById(
      "areaOfTriangleInputHeight"
    );
    const areaOfTriangleDisplay = document.getElementById(
      "areaOfTriangleDisplay"
    );

    areaOfTriangleDisplay.textContent = areaOfTriangle(
      areaOfTriangleInputBase.value,
      areaOfTriangleInputHeight.value
    );
  };

  const areaOfCircleAction = document.getElementById("areaOfCircleAction");

  areaOfCircleAction.onclick = () => {
    const areaOfCircleInput = document.getElementById("areaOfCircleInput");
    const areaOfCircleDisplay = document.getElementById("areaOfCircleDisplay");

    areaOfCircleDisplay.textContent = areaOfCircle(areaOfCircleInput.value);
  };
};

const feetToInches = feet => {
  return feet * 12;
};

const milesToFeet = miles => {
  return miles * feetPerMile;
};

const areaOfTriangle = (base, height) => {
  let area = (base * height) / 2;
  return area;
};

const areaOfCircle = radius => {
  let area = Math.PI * radius * radius;
  return area;
};
