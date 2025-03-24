function submitData(name, email) {
  // Create the data object to send
  const data = {
    name: name,
    email: email,
  };

  // Make a POST request to /users
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json", // Explicitly set the Accept header
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      // Check if the response is ok
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => {
      // Append the new id to the DOM
      const body = document.querySelector("body");
      const idElement = document.createElement("p");
      idElement.textContent = `ID: ${json.id}`;
      body.appendChild(idElement);
      return json;
    })
    .catch((error) => {
      // Handle errors and append the error message to the DOM
      const body = document.querySelector("body");
      const errorElement = document.createElement("p");
      errorElement.textContent = `Error: ${error.message}`;
      body.appendChild(errorElement);
    });
}
