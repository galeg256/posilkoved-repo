export const throwErr = (res, status, error) => {
    switch (status) {
        case 400: 
            res.status(400).json({result: [], msg:"Пользователь уже существует"})
            break
        case 404: 
            res.status(404).json({result: [], msg:"Ошибка авторизации"})
            break
        case 412:
            res.status(412).json({result: [], errors: error.array(), msg: "Некорректные данные при входе/регистрации"})
            break
        case 500: 
            res.status(500).json({result: [], msg: "Ошибка БД: " + error})
            break
        default: 
            res.status(505).json({result: [], msg: "Что-то пошло не так"})
    }
}