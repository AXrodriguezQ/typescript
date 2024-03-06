var _a;
function login() {
    return {
        username: "juan",
        created_at: new Date(),
        superuser: true,
        personal: {
            name: "juan",
            age: 21
        },
        logout: function () { },
        rename: function (username) {
            username.toUpperCase();
        }
    };
}
var data = login();
data.created_at && data.created_at.getDay();
(_a = data.created_at) === null || _a === void 0 ? void 0 : _a.getHours();
