const UserJson = require("../Model/User.json");
const fs = require("fs").promises;
const path = require("path");
const SampleUserObj = require("../Model/SampleUser.json");

const bcrypt = require("bcrypt");

const UserObj = {
  data: [...UserJson],
  addData: function (newData) {
    this.data = [...this.data, newData];
  },
};

async function reWrinteJson() {
  await fs.writeFile(
    path.join(__dirname, "../", "Model", "User.json"),
    JSON.stringify(UserObj.data)
  );
}

const RegisterUser = async (req, res) => {
  try {
    let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(req.body.password, salt);
    UserObj.addData({ ...SampleUserObj, ...req.body,address_list:[...req.body.address_list], password: hashPassword });
    reWrinteJson();
    res.json({ Message: "successfully registered" });
  } catch {
    res.status(500);
  }
  // res.json({ message: "message is successfully created",Name:req.body.name });
};

const SignInUser = async (req, res) => {
  let reqUser = UserObj.data.find(
    user => user.email === req.body.email || user.Phno === req.body.email
  );
  if (reqUser == null) {
    res.json({ message: "Invalid email or password" });
    return;
  }

  try {
    if (await bcrypt.compare(req.body.password, reqUser.password)) {
      let {password,...rest}=reqUser
      res.json({ message: "success", userData: rest });
    } else {
      res.json({ message: "Invalid email or password" });
    }
  } catch {
    res.status(4003);
  }
};

const getAllUsers = (req, res) => {
  res.json(UserObj.data);
};

module.exports = { RegisterUser, SignInUser, getAllUsers };
