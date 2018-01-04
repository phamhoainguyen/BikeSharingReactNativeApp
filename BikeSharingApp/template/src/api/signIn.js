const signIn = async (phoneNumber, password) => {
    let response = await fetch('https://trafficsharing.herokuapp.com/api/auth',
    {   
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, password })
    });

    let jsonRes = await response.json();
    return jsonRes;
};

module.exports = signIn;