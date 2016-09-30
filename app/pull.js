
var dataArray = [];

function getData() {
  const request = require('request-promise')

  const options = {
    method: 'GET',
    uri: "http://osmstats.redcross.org/stats/missingmaps",
    json: true
  }

  request(options)
    .then(function (response) {
      data = cleanData(response);
      if(isUpdated(data)) {
        dataArray.push(data)
        console.log(dataArray)
      } else {
        console.log('no update')
      }
    })

    .catch(function (err) {
      console.log('api call failed')
    })
}

function cleanData(data) {
    delete data['changesets'];
    delete data['edits'];
    return data
}

function isUpdated(data) {
  if (dataArray.length == 0) {
    return true
  } else {
  return data.latest != dataArray[dataArray.length - 1].latest
  }
}


module.exports = {
  getData: getData,
  cleanData: cleanData,

}
