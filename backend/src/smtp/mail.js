const nodemailer = require('nodemailer');
const path = require('path')
// require('dotenv').config({ path: path.resolve('./../../.env') })
require('dotenv').config({ path: require('find-config')('.env') })


exports.mailto = function(tomail , content){
    
    
    const from = process.env.SENDER

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        // port : 587,
        auth: {
            user: process.env.USER ,
            pass: process.env.SECRET
        }
    });
    let mailOptions = {
        from: from,
        to: tomail,
        subject: 'from mailer',
        text: content
    };
    transporter.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error);
        }
        console.log(response)
    });

}

