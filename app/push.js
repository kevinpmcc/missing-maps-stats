var dotenv = require ('dotenv')
dotenv.load();

var API_KEY = process.env.GECKOBOARD_API_KEY;

var gb = require('geckoboard')(API_KEY);

function pushDataset(dataArray) {
  gb.datasets.findOrCreate(
      {
        id: 'missingmaps-stats',
        fields: {
         users: {
            type: 'number',
            name: 'Total users',
          },
          roads: {
            type: 'number',
            name: 'Total roads'

          },
          buildings: {
            type: 'number',
            name: 'Total buildings'
          },
         latest: {
            type: 'datetime',
            name: 'DateTime'
          }
        }
      },
  function (err, dataset) {
    if (err) {
      console.error(err);
      return;
    }

    dataset.put(
      dataArray,

              function (err) {
                if (err) {
                  console.error(err);
                  return;
                }
                console.log('Dataset created and data added');
              }
    );
  }
  );
}

module.exports = pushDataset;
