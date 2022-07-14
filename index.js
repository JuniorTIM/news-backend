const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/assets/img', express.static(__dirname + '/assets/img'));

app.use(require("./routes/index"));

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("Успешно соединились с MongoDB"))
  .catch((e) => console.log("Ошибка при соединии с сервером:" + e.message));
  
  app.listen(process.env.PORT, () => {
  console.log("Сервер работает");
});
