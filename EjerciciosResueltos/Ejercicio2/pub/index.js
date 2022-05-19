function recitar() {
  // const url = "http://localhost:4000/recitar";
  const url = "/recitar";
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.table(data);
    document.querySelector("#poema").innerHTML = data.text;
  })
  .catch(error => {console.log(error)});
}