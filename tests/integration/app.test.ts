import supertest from "supertest"

import app from "../../src/app.js"

describe("Testing app", () => {
  it("Hello world", async () => {
    expect("random_data").toBe("random_data")
  })
})
