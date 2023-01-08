const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

// const { sendBasicEmail } = require('./services/email-service');

const cron = require('node-cron');

const setupAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server started on ${PORT}`);

        // sendBasicEmail(
        //     'support@admin.com',
        //     'ardalkarg@gmail.com',
        //     'This is a testing email',
        //     'Hey! How are you. I hope you our testing service'
        // )
        
        // cron.schedule('*/2 * * * *', () => {
        //     console.log('Running a task every 2 minutes');
        // });
    });
}

setupAndStartServer();