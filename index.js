//framework express
const express = require('express');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
//accès aux variables d'environnement
require('dotenv').config({path: './config/.env'})
require('./config/db');
const {checkUser, requireAuth } = require('./middleware/auth.middleware');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req,res) => {
    res.status(200).send(res.locals.user._id)
});

//routes 
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

//config du serveur 
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});