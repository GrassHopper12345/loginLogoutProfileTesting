import express from 'express';
import mysqli from 'mysqli';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import JWT from 'jsonwebtoken';
import { METHODS } from 'http';

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: "",
        method: ['POST, GET'],
        credentials: true,
    }
));

const db = mysql.createConnection(
    {
        host: "localhost",
        username: "root",
        password: "",
        database: "signup",
    }
);

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
})


app.listen(8081, () => {
    console.log("Running");
})