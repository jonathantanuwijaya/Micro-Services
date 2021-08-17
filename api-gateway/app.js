require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const courseRouter = require('./routes/courses')
const orderPaymentRouter = require('./routes/orders-payment')
const mediaRouter = require('./routes/media');
const refreshTokenRouter = require('./routes/refreshTokens')
const mentorRouter = require('./routes/mentors')
const ChapterRouter = require('./routes/chapters')
const lessonRouter = require('./routes/lessons')
const imageCourseRouter = require('./routes/imageCourses')
const myCourseRouter = require('./routes/myCourses')
const reviewRouter = require('./routes/reviews')
const webHookRouter = require('./routes/webhook')

const can = require('./middlewares/permission')
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
app.use('/media',verifyToken,can('admin','student'), mediaRouter)
app.use('/orders', verifyToken,can('admin','student'), orderPaymentRouter)
app.use('/refresh-tokens', refreshTokenRouter)
app.use('/mentors', verifyToken, can('admin'),mentorRouter)
app.use('/chapters', verifyToken,can('admin'), ChapterRouter)
app.use('/lessons', verifyToken,can('admin'), lessonRouter)
app.use('/image-courses', verifyToken,can('admin'), imageCourseRouter)
app.use('/my-courses', verifyToken,can('admin','student'), myCourseRouter)
app.use('/reviews', verifyToken,can('admin','student'), reviewRouter)
app.use('/webhook', webHookRouter)

module.exports = app;
