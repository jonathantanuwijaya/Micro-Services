const apiAdapter = require('../../apiAdapter')
const {
    URL_SERVICE_USER,
    JWT_SECRET,
    JWT_SECRET_REFRESH_TOKEN,
    JWT_ACCESS_TOKEN_EXPIRED,
    JWT_REFRESH_TOKEN_EXPIRED
} = process.env
const jwt = require('jsonwebtoken')
const api = apiAdapter(URL_SERVICE_USER)

module.exports = async (req, res) => {
    try {
        const user = await api.post('/users/login', req.body)
        const data = user.data.data
        const token = jwt.sign({data}, JWT_SECRET,
            {
                expiresIn: JWT_ACCESS_TOKEN_EXPIRED
            })

        const refreshtoken = jwt.sign({data}, JWT_SECRET_REFRESH_TOKEN,
            {
                expiresIn: JWT_REFRESH_TOKEN_EXPIRED
            })
        await api.post('/refresh_tokens',
            {
                refresh_token: refreshtoken, user_id: data.id
            }
        )
        return res.json({
            status: 'sucess',
            data: {
                token,
                refresh_token: refreshtoken
            }
        })
    } catch (e) {
        if (e.code === 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'service unavailable'
            })
        }

        const {status, data} = e.response
        return res.status(status).json(data)
    }
}
