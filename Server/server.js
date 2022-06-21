const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;


app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/apis/featureProduct"));
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => console.log("server is running in port 3001"));
