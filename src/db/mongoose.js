const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://corneliam1:Momdad1loveyou123@cluster0-7pon9.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  }
);
