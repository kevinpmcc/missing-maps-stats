var pull = require('../app/pull.js')

var data = { changesets: 113877,
users: 13298,
roads: 271336.4010588139,
buildings: 1205424,
edits: 1469188,
latest: '2016-09-30T10:27:12.000Z' }

var cleanedData = { users: 13298,
  roads: 271336.4010588139,
  buildings: 1205424,
  latest: '2016-09-30T10:27:12.000Z' }

describe("cleanData", function() {
  it("returns data without edits and changesets", function() {
    expect(pull.cleanData(data)).toEqual(cleanedData);
  });
});
