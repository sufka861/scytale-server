require('dotenv').config();
const port = process.env.PORT || 4000;
const app = require('./src/app');

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
