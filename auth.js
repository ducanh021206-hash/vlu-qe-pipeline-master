function login(username, password) {
    const users = {
        admin: {
            password: "123",
            locked: false
        },
        blocked: {
            password: "123",
            locked: true
        }
    };

    // Kiểm tra username có rỗng hay không
    if (!username) {
        return false;
    }

    // Kiểm tra tài khoản có tồn tại không
    if (!users[username]) {
        return false;
    }

    // Kiểm tra tài khoản có bị khóa không
    if (users[username].locked) {
        return false;
    }

    // Không cho phép mật khẩu chứa ký tự đặc biệt
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        return false;
    }

    // Kiểm tra mật khẩu
    return users[username].password === password;
}

module.exports = { login };
