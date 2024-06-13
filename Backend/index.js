const express = require("express")
const cors = require('cors')
const productRoutes = require("./Routes/productRoute")
const categoryRoute = require("./Routes/categoryRoute")
const mongoose = require('mongoose')

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())
app.use("/products",productRoutes);
app.use("/category",categoryRoute)

app.listen(port , ()=>{
    console.log(`App listening on port ${port}`);
});

main().then(() => console.log("connected")).catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://vk856549:ICj87sZ55bIpGkmz@sample2.hek9ig7.mongodb.net/?retryWrites=true&w=majority&appName=sample2"
  );
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
