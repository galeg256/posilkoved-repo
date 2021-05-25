import Router from 'express'
import {createPDF, getPDF} from '../controllers/order.controller.js'
// import {check} from 'express-validator'
import passport from 'passport'

const router = Router()

// router.get('/', passport.authenticate('jwt', {session: false}), getLogin) //test DB

router.post('/create-doc', passport.authenticate('jwt', {session: false}), createPDF)
router.get('/get-doc', passport.authenticate('jwt', {session: false}), getPDF)
export default router