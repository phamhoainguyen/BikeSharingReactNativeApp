const getRecordByID = (id, token) => {
    let url = `https://trafficsharing.herokuapp.com/api/users/${id}`;
    
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