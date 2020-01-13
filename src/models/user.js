const mongoose = require("mongoose");

const User = mongoose.model("user", {

Email: {
type: String,
required: true

},

Name: {
 type: Number,
 required: true

  },

Graduated: {

    type: Boolean
    
  }

});

module.exports = User;

