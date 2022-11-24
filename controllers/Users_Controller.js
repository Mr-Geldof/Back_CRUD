const User = require("../models/Users_Model")//import du Shéma utilisateur

//creation utilisateur
module.exports.newUser = async (req,res) =>{
    const {nom, prenom, email, password} = req.body;

    try{
        const user = await User.create({nom,prenom,email,password});
        res.status(201).json(`User Added successfully ${user}`)
    }
    catch(err){
        res.status(500).json(`Message ${err}`)
    }
}

//voir tout les utlisateurs
module.exports.allUser = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(`message ${err}`)
    }
}

//voir un utilisateur particulier
module.exports.showUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(`message : ${err}`)
    }
}

//mettre à jour un utlisateurs
module.exports.updateUser = async (req , res) => {
    try{
        const user = await User.findByIdAndUpdate(
            {_id : req.params.id} ,
            {
                $set: {
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    email: req.body.email,
                    password: req.body.password,
                }
            },
            { new : true},
        );
        res.status(200).json({
            message: 'Update user',
            user
        })
        console.log(user)
    } catch (err) {
        res.status(500).send({ message: err });
      }
}

//Suppression utilisateur
module.exports.deleteUser = async (req, res) => {
    try {
        const user = await User.remove({_id: req.params.id}).exec();
        res.status(200).json({
            message: 'User removed !',
            user
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Error when removing user',
            error
        })
    }
}