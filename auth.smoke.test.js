const { login } = require("./auth");

test("Login đúng với tài khoản admin", () => {
    expect(login("admin", "123")).toBe(true);
});
