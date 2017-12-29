const getRecordByID = (startLocation, vehical, endLocation, startTime, token) => (
    fetch('https://bikesharingapi.herokuapp.com/api/records/',
    {   
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': token
        },
        body: JSON.stringify({ startLocation, vehical, endLocation, startTime })
    })
    .then((response) => response.json())
);

module.exports = getRecordByID;