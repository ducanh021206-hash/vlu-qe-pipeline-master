const { login } = require("./auth");

test("Sai mật khẩu", () => {
    expect(login("admin", "999")).toBe(false);
});

test("Username rỗng", () => {
    expect(login("", "123")).toBe(false);
});

test("Mật khẩu chứa ký tự đặc biệt", () => {
    expect(login("admin", "123@")).toBe(false);
});

test("Tài khoản bị khóa", () => {
    expect(login("blocked", "123")).toBe(false);
});

test("Username không tồn tại", () => {
    expect(login("user123", "123")).toBe(false);
});

test("Mật khẩu đúng của tài khoản admin", () => {
    expect(login("admin", "123")).toBe(true);
});
