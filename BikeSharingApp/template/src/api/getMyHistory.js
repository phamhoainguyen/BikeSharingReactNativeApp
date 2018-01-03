const getRecordByID = async (token) => {
        let response = await fetch('https://trafficsharing.herokuapp.com/api/records/myhistory',
            {
                method: 'GET',
                headers: {
                    'authorization': token
                }
            });
        let res = await response.json();
        return res;
}

module.exports = getRecordByID;