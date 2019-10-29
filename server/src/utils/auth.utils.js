class AuthUtils {

    getToken(headers) {
        let authorization = headers['authorization'];
        if (!authorization) {
            return null;
        }
        let token = authorization.split(" ");
        if (token.length != 2) {
            return null;
        }
        return token[1];
    }
}
module.exports = new AuthUtils();