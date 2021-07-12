import {Router} from 'express'
const router = Router()

import * as roleCtrl from '../controllers/role.controller'
import {authJwt} from '../middlewares';


router.get('/', [authJwt.verifyToken, authJwt.isAdmin], roleCtrl.getRoles)

export default router;