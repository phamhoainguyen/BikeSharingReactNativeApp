const signIn = (phoneNumber, password) => (
    fetch('https://trafficsharing.herokuapp.com/api/auth',
    {   
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, password })
    })
    .then((response) => {
        console.log(response);
        return response.json();
    })
);

module.exports = signIn;