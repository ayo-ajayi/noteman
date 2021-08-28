const express = require('express'),
app = express(),
cors = require('cors'),
PORT = 3300,
mongoose = require('mongoose'),
{MONGODB}= require('./config'),
userRoutes = require('./routes/user'),
noteRoutes = require('./routes/note'),
bodyParser = require('body-parser'),
auth = require('./middleware/auth');


app
.use(cors())
.use(bodyParser.json())

.use('/api/notes', auth, noteRoutes)
.use('/api/users', userRoutes)

.get('/', (req, res, next)=> res.end('welcome!'))
.use((req, res, next)=>{
    //when no valid path is specified
    const err = new Error('not found')
    err.status = 404
    next(err)
})
.use((err, req, res, next)=>{
    const status = err.status || 500
    res.status(status).json({error: {message : err.message}})
})



mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log(`Mongo/Mongoose Connected`))
  .catch((err) => {console.log(`Error connecting to DB:`, err.message);
    return process.exit(1)});


app.listen(PORT, ()=> console.log(`server is running at http://localhost:${PORT}`))