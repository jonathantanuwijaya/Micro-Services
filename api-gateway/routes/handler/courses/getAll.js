const apiAdapter = require('../../apiAdapter')
const {
    URL_SERVICE_COURSE,
    HOST_NAME
} = process.env

const api = apiAdapter(URL_SERVICE_COURSE)

module.exports = async (req, res) => {
    try {
        const course = await api.get('/api/courses', {
            params: {
                ...req.query,
                status: 'published'
            }
        })
        const courseData = course.data
        const firstPage = courseData.data.first_page_url.split('?').pop()
        const lastPage = courseData.data.last_page_url.split('?').pop()
        courseData.data.first_page_url = `${HOST_NAME}/courses?${firstPage}`
        courseData.data.last_page_url = `${HOST_NAME}/courses?${lastPage}`

        if (courseData.data.next_page_url) {
            const nextPage = courseData.data.next_page_url.split('?').pop()
            courseData.data.next_page_url = `${HOST_NAME}/courses?${nextPage}`
        }

        if (courseData.data.prev_page_url) {
            const prevPage = courseData.data.prev_page_url.split('?').pop()
            courseData.data.prev_page_url = `${HOST_NAME}/courses?${prevPage}`
        }
        courseData.data.path = `${HOST_NAME}/courses`

        return res.json(courseData)
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
