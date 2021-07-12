import {Router} from 'express'
const router = Router()

import * as userCtrl from '../controllers/user.controller'
import {authJwt, verifySignUp} from '../middlewares'
import * as authCtrl from '../controllers/auth.controller'


router.get('/', [authJwt.verifyToken, authJwt.isAdmin], userCtrl.getUsers)
// router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted], userCtrl.createUser)
router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], userCtrl.deleteUser)
router.post('/', [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted], authCtrl.signUp)

export default router;