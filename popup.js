document.addEventListener("DOMContentLoaded", function () {
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // If the message contains selected text, display it
    if (message.text) {
      var div = document.createElement("div");
      div.style.position = "fixed";
      div.style.top = "10px";
      div.style.right = "10px";
      div.style.backgroundColor = "#fff";
      div.style.border = "1px solid #000";
      div.style.padding = "10px";
      div.style.zIndex = "9999";
      div.textContent = message.text;
      document.body.appendChild(div);
    }
  });

  var submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", function () {
    var inputField = document.getElementById("inputField");
    var data = { message: inputField.value };
    console.log(inputField, inputField.value);
    var xhr = new XMLHttpRequest();
    console.log("clicked");
    xhr.open("POST", "http://localhost:4000/conversation", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener("load", function () {
      if (xhr.status === 200) {
        // If the response is successful, parse the response data as JSON and display it in the response container
        var response = JSON.parse(xhr.responseText);
        var responseContainer = document.getElementById("responseContainer");
        console.log(response);
        responseContainer.innerHTML = response.response;
      } else {
        // If the response is not successful, display an error message
        var responseContainer = document.getElementById("responseContainer");
        responseContainer.innerHTML = "Error: " + xhr.status;
      }
    });
    //   xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
  });
});

var responseContainer_selected_text = document.getElementById("responseContainer");
// this code is used for getting the selected text from webpage whatever we have selected in context
const get_selected_text = localStorage.getItem('selectionText');
responseContainer_selected_text.innerText = get_selected_text;