
const express = require('express');

const sequelize = require('./util/database');
var cors = require('cors')

const app = express();
app.use(cors());
let expenseRoute=require('./route');
// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(express.json());


app.use(expenseRoute);




// app.use(errorController.get404);

sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(8000);
  })
  .catch(err => {
    console.log(err);
  });
