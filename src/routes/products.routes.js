import {Router} from 'express'
const router = Router()

import * as productsCtrl from '../controllers/products.controller'
import {authJwt} from '../middlewares'

router.get('/', productsCtrl.getProducts)
router.post('/', [authJwt.verifyToken, authJwt.isSeller], productsCtrl.createProduct)

router.get('/:productId', authJwt.verifyToken, productsCtrl.getProductById)
router.put('/:productId', [authJwt.verifyToken,  authJwt.isSeller], productsCtrl.updateProductById)
router.delete('/:productId', [authJwt.verifyToken, authJwt.isSeller], productsCtrl.deleteProductById)

export default router;