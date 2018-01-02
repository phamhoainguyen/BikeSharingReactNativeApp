const getRecordByConditions = async (startLocation, vehical, radius, startTime, token) => {

    let url;
    var res = startTime.split(" ");

    let strDate = res[0].split("-");
    let strTime = res[1].split(":");

    let year = strDate[0];
    let month = strDate[1];
    let dates = strDate[2];

    let hours = strTime[0];
    let minutes = strTime[1];

    url = `https://trafficsharing.herokuapp.com/api/records/getrecords/?lat=${startLocation.lat}&long=${startLocation.long}&radius=${radius}&year=${year}&month=${month}&date=${dates}&hour=${hours}&minute=${minutes}&vehicle=${vehical}`;
    let response = await fetch(url,
        {   
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token,
            },
        });
    
    let data = await response.json();
    return data;
        // .then((response) => {
        //     console.log(response);
        //     return response.json();
        // })
};

module.exports = getRecordByConditions;