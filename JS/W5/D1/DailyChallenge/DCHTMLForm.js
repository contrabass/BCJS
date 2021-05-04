function toJSON() {
  let form = document.forms.form1;
  let firstName = form1.elements.firstname.value;
  let lstName = form1.elements.lastname.value;
  let stringified = JSON.stringify((firstName, lastname));
  JSONForThePage = document.createTextNode("test");
  document.body.appendChild(JSONForThePage);
  return false;
}
