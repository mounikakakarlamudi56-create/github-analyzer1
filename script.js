async function getProfile() {
  const username = document.getElementById("username").value;
  const result = document.getElementById("result");

  if (!username) {
    result.innerHTML = "Enter username!";
    return;
  }

  try {
    const res = await fetch("https://api.github.com/users/" + username);
    const user = await res.json();

    result.innerHTML = `
      <h2>${user.login}</h2>
      <p>Repos: ${user.public_repos}</p>
      <p>Followers: ${user.followers}</p>
    `;
  } catch {
    result.innerHTML = "Error!";
  }
}
