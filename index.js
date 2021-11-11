//framework express
const express = require('express');
const app = express();

//config du port
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});