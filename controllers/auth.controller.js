import db from '../config/DBconnection.js'
import bcrypt from 'bcryptjs'
import {throwErr} from '../errors/errors.js'
import jwt from 'jsonwebtoken'
import {keys} from '../config/keys.js'
import {validationResult} from 'express-validator'

//test DB
export const getUsers = (req, res) => {
    db.query("SELECT * from user", (error, result) => {
        res.json(result)
    })
}

//auth
export const login = async (req, res) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        const login = req.body.login
        const password = req.body.password

        const sqlSelect = "SELECT * FROM user WHERE user_login=?"

        db.query(sqlSelect, login, async (error, result) => {
            if (!error) {
                if (result.length) {
                    const user = result[0]
                    const isMatch = await bcrypt.compare(password, user.user_password)
                    if (isMatch) {
                        const token = jwt.sign({
                            user_id: result.insertId, 
                            user_login: login,
                        }, keys.jwt, {expiresIn: 60*60})
                        
                        res.json({
                            result: `Bearer ${token}`, 
                            msg: "success"
                        })
                    } else throwErr(res, 404, error)
                } else throwErr(res, 404, error)
            } else throwErr(res, 500, error)
        })
    } else throwErr(res, 412, errors)
}

//register
export const register = (req, res) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        const login = req.body.login
        const password = req.body.password

        const sqlSelect = "SELECT * from user where user_login=?"

        db.query(sqlSelect, login, async (error, result) => {
            if (!error) {
                if (!result.length) {
                    const hashPassword = await bcrypt.hash(password, 12)
                    const sqlInsert = "INSERT INTO user (user_login, user_password) VALUES (?,?)"
                    
                    db.query(sqlInsert, [login, hashPassword], (error, result) => {
                        if (!error) {
                            const token = jwt.sign({
                                user_id: result.insertId, 
                                user_login: login,
                            }, keys.jwt, {expiresIn: 60*60})
                            
                            res.json({
                                result: `Bearer ${token}`, 
                                msg: "success"
                            })
                        } else throwErr(res, 500, error)
                    })
                } else throwErr(res, 400, error)
            } else throwErr(res, 500, error)
        })
    } else throwErr(res, 412, errors) 
}