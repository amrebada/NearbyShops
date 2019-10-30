const Users = require("../models/users");
const ErrorTypes = require("../models/constants/ErrorTypes");
const ApiError = require("../models/constants/ApiError");
const bcrypt = require("bcrypt");
const config = require("../../config.json");
const { JWT, JWK } = require("jose");
const fetch = require('node-fetch');
const { ALL, SAMPLE } = require('../models/constants/constants')

class Shops {
    getPhotoURL(photo) {
        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${config.GOOGLE_API_KEY}`
    }
    async getShops(like = false, dislike = false, location = "0,0", token = null) {
        if (like) {
            if (token === null) {
                throw ApiError(ErrorTypes.FORBIDDEN, 'You have to sign in first');
            }
            return [{ shops: 'likes' }]
        }

        if (dislike) {
            if (token === null) {
                throw ApiError(ErrorTypes.FORBIDDEN, 'You have to sign in first');
            }
            return [{ shops: 'dislikes' }]
        }

        try {
            if (config.AUTO) {

                // let body = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
                //     location}&type=shop&key=${config.GOOGLE_API_KEY}&rankby=distance`);
                // let json = await body.json();


                // return json.results.map(place => ({
                //     id: place.id,
                //     name: place.name,
                //     icon: place.icon,
                //     location: [place.geometry.location.lat, place.geometry.location.lng],
                //     mode: ALL,
                //     photo: place.photos && place.photos.length >= 1 ? this.getPhotoURL(place.photos[0]) : null
                // }));
                return SAMPLE;
            }
        } catch (error) {
            console.log(error);

            throw ApiError(ErrorTypes.INTERNAL_ERROR, "couldn't get shops from google");
        }
    }


}

module.exports = new Shops();