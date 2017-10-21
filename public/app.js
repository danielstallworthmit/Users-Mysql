const createUser = document.querySelector('.CreateUser');
createUser.addEventListener('submit', e => {
    e.preventDefault();
    const username = createUser.querySelector('.username').value;
    const password = createUser.querySelector('.password').value;
    post('/createUser', {username, password})
})

function post (path, data) {
    return fetch(path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}