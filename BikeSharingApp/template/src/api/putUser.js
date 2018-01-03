const updateUser = (id, user) => {
    let url = `https://bikesharingapi.herokuapp.com/api/users/${id}`
    fetch(url,
    {   
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
    .then((response) => response.json());
}
module.exports = updateUser;