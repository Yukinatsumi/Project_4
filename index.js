const express = require('express');
require('dotenv').config();
const path = require('path');
const connectDB = require("./configs/database.config");
const clientRoutes = require("./routes/client/index.routes");

const app = express()
const port = 3000

connectDB();

app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', clientRoutes);

app.listen(port, () => {
  console.log('Website đang chạy trên cổng ${port}');
})