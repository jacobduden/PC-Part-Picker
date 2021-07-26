const { User, Game } = require('../models');
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/Auth');


const resolvers = {
    Query: {
me: async (context, args)=>{
    if(context.user){
        const userData = await User.findOne({})
        .select('-__v -password')
        .poputlate('games')
        return userData
    }
    throw new AuthenticationError('No user found!')
}
    },

    Mutation: {
        addUser: async (context, args) =>{
            const user = await User.create(args)
            const token = signToken(user)
            return {token, user}
        },
        
        login: async (context, { email, password })=>{
            const user = await User.findOne({ email })
            if(!user){
                throw new AuthenticationError('That is not a valid email address.')
            }
            const correctPassword = await user.isCorrectPassword(password)
            if(!correctPassword){
                throw new AuthenticationError('Not a valid password.')
            }
            const token = signToken(user)
            return {token, user}
        },

        saveGame: async (context, args)=>{
            if(context.user){
                const updateUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$addToSet:{gameInput: args.input}},
                    {new: true}
                );
                return updateUser
            }
            throw new AuthenticationError('Must be logged in to add a part to the build cart!');
        },
        removeGame: async (context, args)=>{
            if(context.user){
                const updateUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {gameId: args.gameId}},
                    {new: true}
                );
                return updateUser
            }
            throw new AuthenticationError('You must be logged in to remove a book from the build cart!')
        }
    }

}

module.exports = resolvers;