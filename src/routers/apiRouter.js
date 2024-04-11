const apiRouter = require('express').Router()

const apiController = require('../controllers/apiController')

apiRouter.get('/api/test', apiController.retrieveCompanyListController);
apiRouter.post('/api/hello', apiController.helloApiController);

module.exports = apiRouter;