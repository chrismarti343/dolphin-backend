import express from 'express'

import { product } from './routes_logic.js';
import { register } from './routes_logic.js';
import { find_by_product_id } from './routes_logic.js';
import { remUser } from './routes_logic.js';
import { addProduct } from './routes_logic.js';
import { remProduct } from './routes_logic.js';




const router = express.Router();

// list all my routes
// get Request
// get all product
router.get('/product', product)
// get one product
router.get('/product=:ItemID', find_by_product_id)
// post request
// rem product
router.delete('/rem-product', remProduct)
// add product
router.post('/addproduct', addProduct)



// remove the user
router.delete('/rem-user', remUser)
// register a user
router.get('/register', register)



export default router;