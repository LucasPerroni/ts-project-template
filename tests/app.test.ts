import supertest from "supertest"

import app from "../src/app.js"

describe("Testing app", () => {
  it("Should return statusCode 200", async () => {
    const response = await supertest(app).get("/")
    expect(response.statusCode).toBe(200)
  })
})
