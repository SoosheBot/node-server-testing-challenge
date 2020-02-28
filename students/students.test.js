const request = require("supertest");

const server = require("../api/server");
describe("students router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

  describe("GET /api/cohorts", function() {
    it("should return 201 OK", function() {
      return request(server)
        .get("/api/students")
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it("should return JSON formatted body", function() {
      return request(server)
        .get("/api/students")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });
  });
});
