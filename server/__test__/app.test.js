const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  test("it should be respond with the string hello world", async () => {
    const response = await request(app).get("/");
    expect(response.text).toEqual("Hello World");
  });
});
