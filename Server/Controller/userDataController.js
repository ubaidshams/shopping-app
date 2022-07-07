let userData = require("../Model/User.json");
const fs = require("fs").promises;
const path = require("path");

async function reWrinteJson(updatedData) {
  await fs.writeFile(
    path.join(__dirname, "../", "Model", "User.json"),
    JSON.stringify(updatedData)
  );
}

let addNewAddress = (req, res) => {
  const userId = req.params.id;
  let updatedData = userData.map(item => {
    if (item.id == userId) {
      item.addressList.push(req.body);
      return item;
    } else {
      return item;
    }
  });

  reWrinteJson(updatedData);
  res.send("success");
};

const updateProfile = (req, res) => {
  const userId = req.params.id;
  const newdata = req.body;
  let updatedData = userData.map(item => {
    if (item.id == userId) {
      return { ...item, ...newdata };
    } else {
      return item;
    }
  });

  reWrinteJson(updatedData);
  res.send("success");
};

module.exports = { addNewAddress, updateProfile };
