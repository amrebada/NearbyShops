const Users = require("../models/users");
const ErrorTypes = require("../models/constants/ErrorTypes");
const ApiError = require("../models/constants/ApiError");
const bcrypt = require("bcrypt");
const config = require("../../config.json");
const { JWT, JWK } = require("jose");

class Auth {
  async login(email, password) {
    let user = await Users.findOne({ email });
    if (!user) {
      throw ApiError(ErrorTypes.NOT_FOUND, "email not found");
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, async (err, Equal) => {
        if (err) {
          reject(ApiError(ErrorTypes.INTERNAL_ERROR, "interntal server error"));
        }
        if (Equal) {
          let token = JWT.sign({ id: user._id }, JWK.asKey(config.KEY));
          resolve({ token });
        }

        reject(ApiError(ErrorTypes.FORBIDDEN, "invalid password "));
      });
    });
  }

  async getUserByToken(token) {
    let uid = JWT.verify(token, JWK.asKey(config.KEY));
    if (uid && uid.id) {
      try {
        let user = await Users.findById(uid.id);
        return user;
      } catch (error) {
        throw ApiError(ErrorTypes.NOT_FOUND, "user not found");
      }
    }
  }

  async checkIfAdmin(token) {
    let admin = JWT.verify(token, JWK.asKey(config.KEY));

    if (admin && admin.id) {
      try {
        let user = await Users.findById(admin.id);
        return user.role === 1;
      } catch (error) {
        return false;
      }
    } else {
      return false;
    }
  }

  async signUp(email, password, cpassword) {
    let searchedUser = await Users.findOne({ email });
    if (searchedUser) {
      throw ApiError(ErrorTypes.CONFLICT, "this email regestered before");
    }
    if (password !== cpassword) {
      throw ApiError(ErrorTypes.BAD_REQUEST, "password not matched");
    }

    let hash = await bcrypt.hash(password, 10);

    let user = new Users({
      email,
      password: hash,
      role: 0
    });

    let savedUser = await user.save();

    let token = JWT.sign({ id: savedUser._id }, JWK.asKey(config.KEY));
    return { token };
  }

  logout(token) { }
}
module.exports = new Auth();
