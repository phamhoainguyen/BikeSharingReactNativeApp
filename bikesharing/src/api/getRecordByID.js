const getRecordByID = (id, token) => {
let url = `https://trafficsharing.herokuapp.com/api/records/${id}`;

    fetch(url,
    {   
        method: 'POST',
        headers: {
            'authorization': token
        }
    })
    .then((response) => response.json())
};

module.exports = getRecordByID;