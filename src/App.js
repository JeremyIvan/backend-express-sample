const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const httpErrors = require('http-errors');
const morgan = require('morgan');

const apiRouter = require('./routers/apiRouter');

const server = express();

server.use(bodyParser.json())
server.use(morgan('dev'));
server.use(cors());

server.use('/accounts', apiRouter)

server.use((request, response, next) => {
    next(httpErrors(404));
});

server.use((error, request, response, next) => {
    console.error(error)

    if (!error.status) {
        const isProduction = server.get('env') == 'production';
        return response.status(500).json({
            message: isProduction ? 'Internal Server Error' : error.message
        });
    };

    if (error.status == 400) {
        return response.status(400).json({
            error: error.message
        });
    };

    if (error.status == 401) {
        return response.status(401).json({
            error: 'Unauthorized Access.'
        });
    };

    return response.status(error.status).json({
        error: error.message
    })
});

server.listen(8001, () => {
    console.log('Server is running at http://localhost:8001')
});