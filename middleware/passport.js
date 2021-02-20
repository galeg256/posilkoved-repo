import strategy from 'passport-jwt'
const JwtStrategy = strategy.Strategy

import extract from 'passport-jwt'
const ExtactJwt = extract.ExtractJwt

import {keys} from '../config/keys.js'
import db from '../config/DBconnection.js'

const options = {
    jwtFromRequest: ExtactJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

export default passport => {
    passport.use(
        new JwtStrategy(options, (payload, done) => {
            try {
                const sqlSelect = 'SELECT * FROM todo.user WHERE userId=?'
                db.query(sqlSelect, payload.userId, (error, result) => {
                    if (!error)
                        if (result[0].userId) 
                            done(null, result[0].userId)
                        else 
                            done(null, false)
                    else done(error, false)
                })
            }
            catch(e) {
                console.log(e)
            }
        })
    )
}