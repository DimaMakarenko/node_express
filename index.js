const express = require('express');
const userRouter = require('./routes/user.route');
const postRouter = require('./routes/post.route');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json())
app.use('/api', userRouter);
app.use('/api', postRouter);
app.listen(PORT, () => console.log('server has been started at port  ' + PORT));

