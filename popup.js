document.addEventListener("DOMContentLoaded", function () {

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

var responseContainer_selected_text = document.getElementById("selectContainer");
// this code is used for getting the selected text from webpage whatever we have selected in context
const get_selected_text = localStorage.getItem('selectionText');
    const resume = `Full stack developer with 4 years software engineering experience. During my studies I provided an additional 1 year of Software Design teaching assistance under the University of Toronto St. George CS Dept My tech stack
    Javascript, Typescript, Node, Python, GraphQL, Azure, Docker, Git, Unix, React, Redux, NextJS, Jest, Husky, PostgreSQL, Azure, CRMs, ERPs, Headless, MongoDB, Firebase, Mongoose, TypeORM, JSON, SOLID, SDLC, VCS, Clean Code, Clean Architecture, APIs, Microservices, JWT auth, OAuth`
    var data = { message: `I am giving you internet text from an arbitrary source. Simplify the words and explain it to a five year old in 3 sentences at maximum. + ${get_selected_text}` };
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

responseContainer_selected_text.innerHTML = get_selected_text;