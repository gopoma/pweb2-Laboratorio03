// En el lado del Cliente
function recitar(markupText) {
  const url = "http://localhost:4000";
  const data = {
    text: markupText
  };
  console.log(data);
  
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  
  http = fetch(url, request);
  http
  .then(response => response.json())
  .then(data => {
    document.querySelector("#htmlCode").innerHTML = data.text
  })
}

document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector("#markupText");
  document.querySelector("#markupForm").onsubmit = function (evt) {
    recitar(text.value);
    return false;
  }
});