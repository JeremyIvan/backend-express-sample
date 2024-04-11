const apiController = {}

const apiService = require('../services/apiService');

apiController.helloApiController = async (request, response) => {
    const requestBody = request.body;

    const result = await apiService.helloApiService(requestBody)

    response.status(200).json({
        data: result
    });
};

apiController.retrieveCompanyListController = async (request, response) => {
    try {
        const result = await apiService.retrieveCompanyListService();
        
        response.status(200).json(result);
    } catch (error) {
        response.status(500).json(error)
    }
};

module.exports = apiController