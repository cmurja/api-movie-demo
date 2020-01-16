const express = require("express");
require("./db/mongoose"); //ensures mongoose runs and connects to our database
const app = express();
const movieRouter = require("./routers/movies");
const userRouter = require("./routers/users");
app.use(express.json());
app.use(movieRouter);
app.use(userRouter);
app.listen(3000, () => {
  console.log("Server up on 3000");
});


//Encription bcrypt hashing will occur as middleware during requests
/* const bcrypt = require("bcryptjs");
const testFunction = async () => {
  const password = "siths1234";
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare("siths1234", hashedPassword);
  console.log(isMatch)
}

testFunction(); */

/* const jwt = require("jsonwebtoken");
constestFunction() = async () =>{
  const token = jwt.sign({_id:  // grab an id but mongooose is being a pain, "obeysudo", {
    expiresIn: "7 days"
  });
  console.log(token);
  const data = jwt.verify(token, "obeysudo");
  console.log(data);
}
testFunction(); */
