function renderUserList(users) {
  const userList = document.getElementById('user-list');

  users.forEach((user) => {
    const li = document.createElement('li');
    li.innerHTML = user.name;
    userList.appendChild(li);
  });
}

function getUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      renderUserList(data);
    });
}

export { getUsers };
