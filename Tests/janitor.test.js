const Janitor = require("../lib/janitor");

test("Can set favorite task via constructor", () => {
  const testValue = "Mopping";
  const e = new Janitor("Bob", 1, "test@test.com", testValue);
  expect(e.task).toBe(testValue);
});

test("getRole() should return \"Janitor\"", () => {
  const testValue = "Janitor";
  const e = new Janitor("Bob", 1, "test@test.com", "Mopping");
  expect(e.getRole()).toBe(testValue);
});

test("Can get favorite task via getFavoriteTask()", () => {
  const testValue = "Mopping";
  const e = new Janitor("Bob", 1, "test@test.com", testValue);
  expect(e.getTask()).toBe(testValue);
});