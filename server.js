const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const htmlRoutes = require('./controllers/htmlRoutes')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
})
