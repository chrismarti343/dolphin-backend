import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    
    UserName: String,
    UserEmail: String,
    UserMobile: Number,
    UserType: {
        type:String,
        default: "Customer"
    },
    address :{
        type:String,
        default: null
    }


})

const Userdb = mongoose.model('Userdb', UserSchema);

export default Userdb;