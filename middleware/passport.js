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
                const sqlSelect = 'SELECT * FROM user WHERE user_id=?'
 
                db.query(sqlSelect, payload.user_id, (error, result) => {
                    if (!error)
                        if (result[0].user_id) done(null, result[0].user_id)
                        else done(null, false)
                    else done(error, false)
                })
            }
            catch(e) {
                console.log(e)
            }
        })
    )
}