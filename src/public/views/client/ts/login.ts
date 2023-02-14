const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const username = (<HTMLInputElement>document.getElementById('username'))
    .value;
  const password = (<HTMLInputElement>document.getElementById('password'))
    .value;
  const data = { username, password };
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        window.location.href = '/dashboard';
      } else {
        alert(data.message);
      }
    })
    .catch((err) => console.log(err));
});
