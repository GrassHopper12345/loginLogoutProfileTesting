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
        origin: ["http://localhost:5173/"],
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
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json({ Message: "Server side Error" });
        if (data.length > 0) {
            const name = data[0].name;
            const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", { expiresIn: '1d' });
            res.cookie('token', token);
            return res.json({ Status: "Success" })
        } else {
            return res.json({ Message: "No Record Exists" });
        }
    });
})


app.listen(8081, () => {
    console.log("Running");
})