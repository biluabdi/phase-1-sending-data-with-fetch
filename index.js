function submitData(name, email) {
  const formData = {
    name: name,
    email: email,
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(data => {
      const newId = document.createElement("p");
      newId.textContent = `ID: ${data.id}`;
      document.body.appendChild(newId);
    })
    .catch(error => {
      const errorMsg = document.createElement("p");
      errorMsg.textContent = error.message;
      document.body.appendChild(errorMsg);
    });
}
