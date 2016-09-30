function getData() {
  const request = require('request-promise')

  const options = {
    method: 'GET',
    uri: "http://osmstats.redcross.org/stats/missingmaps",
    json: true
  }

  request(options)
    .then(function (response) {
      console.log(response)
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

module.exports = {
  getData: getData,
  cleanData: cleanData
}
