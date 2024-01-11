const {Router} = require('express')
const router = Router()

const {createUser,getUser,getUserById,deleteUserById,updateUserById} = require('../controller/user.controller')

router.route('/')
    .get(getUser)
    .post(createUser)

router.route('/:id')
    .get(getUserById)
    .delete(deleteUserById)
    .put(updateUserById)

module.exports = router;
