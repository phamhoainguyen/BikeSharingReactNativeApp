const putRecord = (id, record, token) => {
    let url = `https://trafficsharing.herokuapp.com/api/records/${id}`;
    fetch(url,
    {   
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': token
        },
        body: JSON.stringify(record)
    })
    .then((response) => response.json());
}
module.exports = putRecord;