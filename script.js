const userContainer = document.getElementById("userContainer");
const statusText = document.getElementById("status");

async function fetchUsers() {
  statusText.innerText = "Loading users...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("API failed");
    }

    const users = await response.json();
    statusText.innerText = "";

    displayUsers(users);

  } catch (error) {
    statusText.innerText = "Failed to load users";
  }
}

function displayUsers(users) {
  users.forEach(user => {
    const div = document.createElement("div");
    div.className = "user-card";
    div.innerHTML = `
      <h4>${user.name}</h4>
      <p>${user.email}</p>
      <p>${user.address.city}</p>
    `;
    userContainer.appendChild(div);
  });
}

fetchUsers();