const register = (phoneNumber, name, password) => (
    fetch('https://trafficsharing.herokuapp.com/api/users',
    {   
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, name, password })
    })
    .then((response) => response.json())
);

module.exports = register;