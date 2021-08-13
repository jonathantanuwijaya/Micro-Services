require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const courseRouter = require('./routes/courses')
const orderRouter = require('./routes/orders')
const mediaRouter = require('./routes/media');
const paymentRouter = require('./routes/payment')
const refreshTokenRouter = require('./routes/refreshTokens')
const mentorRouter = require('./routes/mentors')
const ChapterRouter = require('./routes/chapters')
const lessonRouter = require('./routes/lessons')
const imageCourseRouter = require('./routes/imageCourses')
const myCourseRouter = require('./routes/myCourses')
const reviewRouter = require('./routes/reviews')
const verifyToken = require('./middlewares/verifyToken')
const app = express();

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: false, limit: '50mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', courseRouter)
app.use('/media', mediaRouter)
app.use('/payments', paymentRouter)
app.use('/orders', orderRouter)
app.use('/refresh-tokens', refreshTokenRouter)
app.use('/mentors', verifyToken, mentorRouter)
app.use('/chapters', verifyToken, ChapterRouter)
app.use('/lessons', verifyToken, lessonRouter)
app.use('/image-courses', verifyToken, imageCourseRouter)
app.use('/my-courses', verifyToken, myCourseRouter)
app.use('/reviews', verifyToken,reviewRouter)

module.exports = app;
