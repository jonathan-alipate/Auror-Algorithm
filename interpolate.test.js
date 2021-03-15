const interpolate = require('./interpolate')

test("replace a name", () => {
  expect(interpolate("Hello [name]", { name: "Jim" })).toBe("Hello Jim");
});