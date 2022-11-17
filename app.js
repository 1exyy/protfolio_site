require('dotenv').config();

const nodemailer = require('nodemailer');
const express = require('express');
const path = require('path');

const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const mailOptions = {
    from: 'a.surnyn@100clientov.com',
    to: 'a.surnyn@100clientov.com',
    subject: "WORK",
    text: ''
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages', 'index.html'));
});

app.post('/sendMessage', (req, res) => {
    mailOptions.text
        = `${req.body.message}
        Имя: ${req.body.name}
        Почта: ${req.body.email}
        `
    transporter.sendMail(mailOptions)
    res.redirect('/');
})

app.listen(PORT, () => {
    console.log(`Sever has been started on port: ${PORT}`);
});
