function zaidimas() {
  alert("hello");

  let ats = confirm("labas?");

  if (ats) {
    console.log("confirmed");
  } else {
    console.log("not confirmed");
  }
}

const dalykas = document.getElementById("sitas");

console.log(document);

dalykas.textContent = "Lietuviskas labas!";

const btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click", thing);

function thing() {
  const textfield = document.getElementById("inp");
  const textarea = document.getElementById("txt");

  const text = textfield.value;
  console.log(text);
  textarea.textContent = text;
}
