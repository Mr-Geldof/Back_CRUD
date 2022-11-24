const mongoose = require('mongoose');
//-----------------------creation du model utilisateur--------------------------------
const userSchema = new mongoose.Schema({
    nom : {type : 'string',require : true}, 
    prenom : {type : 'string',require : true},
    email : {type : 'string',require : true},
    password : {type : 'string',require : true}
})
module.exports = mongoose.model('User', userSchema)