

const { User } = require('../models');
const { signToken } = require('../utils/Auth');

module.exports = {
async getSingleUser({ user = null, params }, res){
    const userFound = await User.findOne({
        $or: [{_id: user ? user.id : params.id}, {username: params.username}]
    });
    if(!userFound){
        res.status(400).json({message: 'Cant find a user with that ID!'})
    }
    res.json(userFound)
},
async createUser({body}, res){
    const user = await User.create(body);
    if(!user){
        return res.status(400).json({message:'something when wrong when registering!'});
    }
    const token = signToken(user);
    res.json({token, user})
},
async login({body}, res){
    const user = await User.findOne({ $or: [{username: body.username}, {email: body.email}]});
    if(!user){
       return res.status(400).json({message:'User not found! Please review login credentials.'});  
    }
    const correctPassword = await user.isCorrectPassword(body.password);
    if(!correctPassword){
        return res.status(400).json({message:'Incorrect password! Please try again.'})
    }
    const token = signToken(user)
    res.json({token, user});
},
async saveGame({user, body}, res){
    try {
        const updatedUser = await User.findOneAndUpdate(
            {_id: user._id},
            {$addToSet: {savedGames: body}},
            {new: true, runValidators: true}
        );
        return res.json(updatedUser)
    } catch (err) {
        console.log(err)
        return res.status(400).json(err)
    }
},
async removeGame({user, params}, res){
    const updatedUser = await User.findOneAndUpdate(
        {_id: user._id},
        {$pull: {savedGames: {gameId: params.gameId} } },
        {new: true}
    );
    if(!updatedUser){
        return res.status(404).json({message:"Couldn't find user with this id."});
    }
    return res.json(updatedUser);
}
}