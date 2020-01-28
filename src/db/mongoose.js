const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:test@cluster0-hlhqu.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  }
);
 