const interpolate = require("./interpolate");

test("replace a name", () => {
  expect(interpolate("Hello [name]", { name: "Jim" })).toBe("Hello Jim");
});

test("don't replace a value when the brackets are escaped", () => {
  expect(interpolate("Hello [name] [[author]]", { name: "Jim" })).toBe(
    "Hello Jim [author]"
  );
});

test("replace multiple types of token data", () => {
  expect(
    interpolate("Hello [name] the date is [date] your height is [height]", {
      name: "Jim",
      date: "16/03/2021",
      height: "180cm",
    })
  ).toBe("Hello Jim the date is 16/03/2021 your height is 180cm");
});

test("returns original token if token does not exist in dicitonary", () => {
  expect(interpolate("Hello [name]", { date: "16/03/2021" })).toBe(
    "Hello [name]"
  );
});
