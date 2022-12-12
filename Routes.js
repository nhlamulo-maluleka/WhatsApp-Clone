const { Router } = require('express')
const route = Router();
const { userSchema } = require('./Schema')
const multer = require('multer')();

route.post('/authPhone', async (req, res) => {
    const { body: { phone } } = req;
    const exist = await userSchema.findOne({ number: phone })
    res.send({ exists: exist ? true : false });
})

route.post("/createUser", multer.single("profile"), (req, res) => {
    const { body, file } = req;

    console.log(body, file)
    // var user = new userSchema({
    //     number: phone,
    //     name: null,
    //     about: null,
    //     profile: null
    // })


    // const exists = await user.save().then(e => {
    //     console.log(e)
    // });
})

module.exports = route