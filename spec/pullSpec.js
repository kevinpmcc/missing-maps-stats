var pull = require('../app/pull.js')


describe("Hello ", function() {
  it("returns howdy", function() {
    var data = { changesets: 113877,
  users: 13298,
  roads: 271336.4010588139,
  buildings: 1205424,
  edits: 1469188,
  latest: '2016-09-30T10:27:12.000Z' }

  var cleanedData = {
    users: 13298,
    roads: 271336.4010588139,
    buildings: 1205424,
    latest: '2016-09-30T10:27:12.000Z'
  }
    expect(pull.cleanData(data)).toBe(cleanedData);
  });
});
