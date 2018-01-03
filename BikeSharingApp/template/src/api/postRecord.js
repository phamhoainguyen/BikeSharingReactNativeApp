const postRecord = (record, token) => (
    fetch('https://trafficsharing.herokuapp.com/api/records',
    {   
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': token
        },
        body: JSON.stringify(record)
    })
    .then((response) => response.json())
);

module.exports = postRecord;