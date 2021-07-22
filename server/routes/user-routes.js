const router = require('express').Router()

const {
    getSingleUser,
    createUser,
    saveGame,
    removeGame,
    login
} = require('../controllers/user-controller');

const { authMiddleware } = require('../utils/Auth');

router.route('/me').get(getSingleUser, authMiddleware)
router.route('/login').post(login)
router.route('/games/:gameId').delete(removeGame, authMiddleware)
router.route('/').post(createUser).put(authMiddleware, saveGame)

module.exports = router;