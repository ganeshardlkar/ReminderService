const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

// const { sendBasicEmail } = require('./services/email-service');
const TicketController = require('./controllers/ticket-controller');

const jobs = require('./utils/job.js');

const setupAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server started on ${PORT}`);
        jobs();
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