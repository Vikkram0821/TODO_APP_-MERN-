// mongodb+srv://vikkramsm1:XiHeb8wZU7ZjX8If@cluster0.u8bq6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//Modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/ToDoRoute");

//App-Express
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.port || 3000;

//MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`CONNECTED TO MONGODB`));

app.use(routes);

app.listen(PORT, () => {
  console.log("App is listening on ", PORT);
});
