const signIn = (phoneNumber, password) => (
    fetch('https://bikesharingapi.herokuapp.com/api/auth',
    {   
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, password })
    })
    .then((response) => response.json())
);

module.exports = signIn;