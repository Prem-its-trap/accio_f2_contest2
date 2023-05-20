const arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let userContainer = document.getElementById("userDetails");

function generateuserData(arr) {
  return arr
    .map(
      (arr) => `
    <div id="data">
        <span>Id:${arr.id}</span>
        <span>Name: ${arr.name}</span>
        <span>Profession: ${arr.profession}</span>
        <span>Age: ${arr.age}</span>
        </div>
    `
    )
    .join("");
}
userContainer.innerHTML = generateuserData(arr);

function addNewUser() {
  let name = document.getElementById("name").value;
  let prof = document.getElementById("prof").value;
  let age = document.getElementById("age").value;

  if (!name || !prof || !age) {
    alert("Fields cannot be empty");
    return;
  }
  //   console.log(arr);
  let newUser = {
    id: arr.length + 1,
    name: name,
    profession: prof,
    age: age,
  };
  //   alert(newUser);
  arr.push(newUser);
  let employeeHtml = generateuserData(arr);
  userContainer.innerHTML = employeeHtml;
  //   userContainer.innerHTML = generateuserData(arr);
}
document.querySelector("#addUserBtn").addEventListener("click", function () {
  addNewUser();
  document.getElementById("name").value = "";
  document.getElementById("prof").value = "";
  document.getElementById("age").value = "";
});

//
function filterUserData(pro) {
  if (!pro) {
    alert("Please select profession");
  }
  if (pro === "Profession") {
    alert("Select valid Profession");
    return;
  }
  const filteredData = arr.filter(
    (arr) => arr.profession.toLowerCase() === pro.toLowerCase()
  );
  const employeeHtml = generateuserData(filteredData);
  userContainer.innerHTML = employeeHtml;
}

document.querySelector("#btn").addEventListener("click", function () {
  const profession = document.getElementById("dropdown").value;
  filterUserData(profession);
});
