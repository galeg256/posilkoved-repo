import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import {PORT} from './config/config.js'
import authRoute from './routes/auth.route.js'
import db from './config/DBconnection.js'
import passport from 'passport'
import pass from './middleware/passport.js'

const app = express()

db.connect(err => {
    if (!err) console.log("Подключение к серверу MySQL успешно установлено")
    else console.log("Ошибка:" + err.message)
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(passport.initialize())
pass(passport)

app.use('/api/auth', authRoute)

app.listen(PORT, () => {
    console.log('Сервер запущен')
})
