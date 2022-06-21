import express from 'express';
import cors from 'cors';
import db from './config/config.js'

const PORT = 1234;

const app = express();

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

/* 
app.use(express.static('public'));
*/

app.use(express.json());
app.use(cors());

try {
    await db.authenticate();
    console.log('Database connection has been established successfully');
} catch (error) {
    console.error('Unable to connect to the database: ', error);
}

db.sync();
