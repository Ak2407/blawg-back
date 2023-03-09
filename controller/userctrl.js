const repo = require("../DB/repository/userrepo");
const { register } = require("../DB/repository/userrepo");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async register(req, res) {
    let olduser = await repo.findUserByEmail(req.body);
    if (olduser) {
      res.send({
        success: false,
        message: "User already exists",
        olduser,
      });
    } else {
      let userobj = req.body;
      const myPass = await bcrypt.hash(userobj.password, 10);
      userobj.password = myPass;
      repo.register(userobj).then((data) => {
        const token = jwt.sign(
          {
            id: data._id,
            email: data.email,
          },
          "shhh",
          {
            expiresIn: "2h",
          }
        );
        const { name, email, bio, job, _id } = data;
        data.password = undefined;
        res.status(200).json({
          success: true,
          message: "User created successfully",
          name,
          email,
          bio,
          job,
          user: _id,
          token,
        });
      });
    }
  },

  async login(req, res) {
    const result = await repo.login(req.body);
    if (result) {
      const { email, name, job, bio, _id } = result;
      const token = jwt.sign(
        {
          id: result._id,
          email: result.email,
        },
        "shhh",
        {
          expiresIn: "2h",
        }
      );
      res.send({
        message: "User Logged In Successfully",
        success: true,
        email,
        name,
        job,
        bio,
        user: _id,
        token,
      });
    } else {
      res.send({
        message: "Invalid Credentials",
        success: false,
      });
    }
  },

  async findUser(req, res) {
    console.log(req.body);
    const userobj = req.body;
    const result = await repo.findUser(userobj);
    if (result) {
      res.send({
        result,
        success: true,
      });
    } else {
      res.send({
        success: false,
      });
    }
  },

  async authenticate(req, res) {
    if (req.headers.authorization) {
        const body = req.headers.authorization;
        const token = body.split(" ")[1];
        jwt.verify(token, "shhh", function (error, decoded) {
            if (error) {
                res.status(400).send({
                    message: "Invalid Token",
                });
            }
            else if (decoded) {
                res.status(200).send({
                    message: "Token Valid",
                    decoded,
                });
            }
        });
    }
    else {
        res.status(400).send({
            message: "No Token Found",
        });
    }
}
};
