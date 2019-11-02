const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Users = require("../src/models/users");
const Shops = require("../src/models/shops");
const config = require("../config.json");
const Constants = require("../src/models/constants/constants");

mongoose.connect(config.DB_URL, async err => {
  if (err) {
    return console.error(err);
  }
  let hash = await bcrypt.hash("123456", 10);

  let user = new Users({
    email: "amr@souqalmal.com",
    password: hash,
    role: 0
  });
  console.log(await user.save());

  await Constants.SAMPLE.forEach(async shop => {
    console.log(await new Shops(shop).save());
  });
});
