const mongoose = require("mongoose")
const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required : true
    },
   

    password:{
type: String,
required: true
    }
  

    
})
// const admin=mongoose.model(`Admin` , adminSchema);


module.exports = mongoose.model("Admin", adminSchema)