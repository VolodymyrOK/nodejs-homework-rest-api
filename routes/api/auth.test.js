const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../../app");
const User = require("../../models/User");

const { DB_TEST_HOST, PORT = 3000 } = process.env;

describe("test /users/login route", () => {
  let server = null;
  beforeAll(async () => {
    await mongoose.connect(DB_TEST_HOST);
    server = app.listen(PORT);
  });
  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });
  test("test /users/login with correctData", async () => {
    const registerData = {
      email: "john@gmail.com",
      password: "123456",
    };
    await request(app).post("/users/register").send(registerData);

    const { body, statusCode } = await request(app)
      .post("/users/login")
      .send(registerData);

    expect(statusCode).toBe(200);
    expect(body.user.email).toBe(registerData.email);
    expect(body.user.subscription).toBe("starter");
    console.log(body);

    const user = await User.findOne({ email: registerData.email });
    expect(user.email).toBe(registerData.email);
  });
});
