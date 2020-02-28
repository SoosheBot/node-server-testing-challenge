const request = require("supertest");

const server = require("../api/server");

describe("students router", function() {
    it("should run the tests", function() {
      expect(true).toBe(true);
    });

    it("should return students as the router value (async version)", async function() {
         const res = await request(server).get("/api/students");

         expect(res.body.router).toBe("students");
     });
});