const apiService = {}

const RetrieveCompanyList = require('../middlewares/RetrieveCompanyList')

apiService.helloApiService = async (requestBody) => {
    const companyDetails = {
        company_name: requestBody?.company?.name,
        address: requestBody?.company?.address,
        employer: requestBody?.company?.employer,
        name: "asdfasdf",
        age: 25
    }

    return companyDetails
}

apiService.retrieveCompanyListService = async () => {
    const result = RetrieveCompanyList()

    return result
}

module.exports = apiService;