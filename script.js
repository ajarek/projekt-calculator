let sum = 0;
let newNumber = 0;
const containerSelector = ".calculator";
const getNumber = (e) => {
  e.preventDefault();
  newNumber = e.target.parentElement.children[0].value;
  addNumbers();
  e.target.parentElement.children[0].value = "";
};

const createForm = (formContainer) => {
  const container = document.createElement("div");
  container.classList.add("container");
  const form = document.createElement("form");
  form.classList.add("form");
  const input = document.createElement("input");
  input.classList.add("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Enter your numbers");
  const button = document.createElement("button");
  button.classList.add("button");
  button.addEventListener("click", getNumber);
  button.innerHTML = "Add Up ";
  form.appendChild(input);
  form.appendChild(button);
  container.appendChild(form);
  formContainer.appendChild(container);
  return formContainer;
};

const renderSum = (sum) => {
  const container = document.querySelector(containerSelector);
  const sumContainer = document.createElement("div");
  sumContainer.classList.add("sumContainer");
  const sumText = document.createElement("p");
  sumText.classList.add("sumText");
  sumText.innerHTML = `The sum is ${sum}`;
  sumContainer.appendChild(sumText);
  container.appendChild(sumContainer)
  ;
  return sumContainer;
};

const addNumbers = () => {
  const container = document.querySelector(".sumContainer");
  if (container) {
    container.remove();
  }
  enteredNumber = newNumber;
  if (!isNaN(enteredNumber)) {
    enteredNumber.split("").forEach((element) => {
      sum = sum + Number(element);
    });
    renderSum(sum);
    sum = 0;
  } else {
    renderSum("Error in input!");
  }
};

createForm(document.querySelector(containerSelector));
