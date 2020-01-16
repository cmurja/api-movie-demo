const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if(!validator.isEmail(value)) {
        throw new Error("Email is invalid")
      }
    }
    },
    
    Name: {
     type: Number,
     required: true,
     trim: true
    },
    
    Password:{
      type:String,
      required:true,
      trim:true,
      minLength:6,
      validate(value){
        if(value.toLowerCase().includes("password")){
          throw new Error('Password cannot contain "password"')
        }
      }
},
    
    Graduated: {
    
        type: Boolean,
        default: false
        
    },
  tokens: [
    {
      token:{
        type: String,
      required: true
      } 
    }
  ]
});

userSchema.methods.generateToken = async function(){
  const user= this;
  const token = jwt.sign({_id:user._idtoString()}, "obeysudo");
  user.tokens = user.tokens.concat({token})
  await user.save();
  return token;
}



userSchema.pre("save", async function(next){
  const user = this;
  if(user.isModified("password")){
    user.password = await bcrypt.hash(user.password, 7);
  }
  next();
});
// when we send a post or patch request, then bcrypt will run before the user password is saved to the mongo object

userSchema.statics.findByCredentials = async (email, password) =>{
  const user = await User.findOne({email});
  if(!user){
    throw new Error("unable to login");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if(!ismatch){
    throw new Error("incorrect password");
  }return user;
};

const User = mongoose.model("User", userSchema); 
module.exports = User;

