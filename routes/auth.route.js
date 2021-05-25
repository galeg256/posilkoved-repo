import Router from 'express'
import {login, register, getLogin} from '../controllers/auth.controller.js'
import check from 'express-validator'
import passport from 'passport'

const router = Router()
const {body, validationResult} = check


router.get('/', passport.authenticate('jwt', {session: false}), getLogin) //test DB

// router.get('/', getLogin) //test DB

router.post('/login', [
    body('login','Некорректный e-mail').isEmail(),
    body('password', "Введите пароль").notEmpty()
],login)

router.post("/register", [
    body('login','Некорректный e-mail').isEmail(),
    body('password', "Минимальная длина пароля 6 символов").isLength({min: 6})
], register)

export default router