const apiAdapter = require('../../apiAdapter')
const {
    URL_SERVICE_COURSE
} = process.env

const api = apiAdapter(URL_SERVICE_COURSE)

module.exports = async (req, res) => {
    try {
        const id = req.params.id
        const chapter = await api.get(`/api/chapters/${id}`)
        return res.json(chapter.data)
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
