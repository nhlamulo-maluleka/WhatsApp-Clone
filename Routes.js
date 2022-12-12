const { Router } = require("express");
const route = Router();
const { userSchema } = require("./Schema");
const multer = require("multer")();

// (async () => {
//   const d = await userSchema.deleteOne({number: '0733859365'})
//   console.log(d)
// })()

route.post("/authPhone", async (req, res) => {
  const {
    body: { phone },
  } = req;
  const exist = await userSchema.findOne({ number: phone });
  res.send({ exists: exist ? true : false });
});

route.post("/createUser", multer.single("profile"), async (req, res) => {
  const {
    body: { number, name, profile },
    file,
  } = req;

  var user = new userSchema({
    number: number,
    name: name,
    about: null,
    profile: profile,
    verified: true,
  });

  await user.save((err, record) => {
    if (err)
      return res.send({
        id: null,
        success: false,
        error: err,
      });
    console.log("New user successfully created!!");
    res.send({
      id: record._id,
      success: true,
      error: false,
    });
  });
});

module.exports = route;
