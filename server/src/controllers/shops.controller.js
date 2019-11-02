const Users = require("../models/users");
const ShopsSchema = require("../models/shops");
const ErrorTypes = require("../models/constants/ErrorTypes");
const ApiError = require("../models/constants/ApiError");
const bcrypt = require("bcrypt");
const config = require("../../config.json");
const { JWT, JWK } = require("jose");
const fetch = require("node-fetch");
const { ALL, SAMPLE, LIKE, DISLIKE } = require("../models/constants/constants");

class Shops {
  async getShops(token = null) {
    try {
      if (token === null) {
        let result = await ShopsSchema.find({});
        result = await result.map(shop => ({
          id: shop._id,
          name: shop.name,
          location: shop.location,
          photo: shop.photo,
          likes: shop.likes,
          dislikes: shop.dislikes,
          mode: ALL
        }));
        return result;
      } else {
        console.log(token);

        let user = JWT.verify(token, JWK.asKey(config.KEY), {});
        let result = await ShopsSchema.find({});
        result = await result.map(shop => {
          return {
            id: shop._id,
            name: shop.name,
            location: shop.location,
            photo: shop.photo,
            likes: shop.likes,
            dislikes: shop.dislikes,
            mode: shop.likes.includes(user.id)
              ? LIKE
              : shop.dislikes.includes(user.id)
              ? DISLIKE
              : ALL
          };
        });
        return result;
      }
    } catch (error) {
      console.log(error);

      throw ApiError(
        ErrorTypes.INTERNAL_ERROR,
        "couldn't get shops from google"
      );
    }
  }

  async updateShop(token, shopId, mode) {
    let user = JWT.verify(token, JWK.asKey(config.KEY));
    let shop = await ShopsSchema.findById(shopId);
    if (!shop || shop === null) {
      throw ApiError(ErrorTypes.NOT_FOUND, "cannot find this shop");
    }

    let update =
      mode === LIKE
        ? {
            likes: shop.likes.includes(user.id)
              ? [...shop.likes]
              : [...shop.likes, user.id],
            dislikes: shop.dislikes.filter(l => `${l}` !== user.id)
          }
        : mode === DISLIKE
        ? {
            dislikes: shop.dislikes.includes(user.id)
              ? [...shop.dislikes]
              : [...shop.dislikes, user.id],
            likes: shop.likes.filter(l => `${l}` !== user.id)
          }
        : {
            likes: shop.likes.filter(l => `${l}` !== user.id),
            dislikes: shop.dislikes.filter(l => `${l}` !== user.id)
          };
    return await ShopsSchema.findByIdAndUpdate(shopId, update);
  }
}

module.exports = new Shops();
