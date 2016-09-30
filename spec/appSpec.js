var hello = require('../app/app.js')


describe("Hello ", function() {
  it("returns howdy", function() {
    expect(hello()).toBe('howdy');
  });
});
